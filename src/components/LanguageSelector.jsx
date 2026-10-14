import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Search, Check, ChevronDown, X } from 'lucide-react';

export const LanguageSelector = ({ variant = 'navbar', onClose }) => {
  const { lang, setLang, supportedLanguages, currentLanguageConfig, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const filteredLanguages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return supportedLanguages;
    return supportedLanguages.filter((l) =>
      l.name.toLowerCase().includes(q) ||
      l.nativeName.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );
  }, [searchQuery, supportedLanguages]);

  const handleSelect = (code) => {
    setLang(code);
    setIsOpen(false);
    setSearchQuery('');
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const isSidebar = variant === 'sidebar';

  return (
    <div
      ref={dropdownRef}
      style={{
        position: 'relative',
        display: isSidebar ? 'block' : 'inline-block',
        width: isSidebar ? '100%' : 'auto',
        zIndex: 50
      }}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSidebar ? 'space-between' : 'center',
          gap: '8px',
          background: isSidebar ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-pill)',
          padding: isSidebar ? '8px 14px' : '6px 12px',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--text-main)',
          cursor: 'pointer',
          width: isSidebar ? '100%' : 'auto',
          transition: 'all 0.2s ease',
          outline: 'none',
          boxShadow: isOpen ? '0 0 0 2px var(--primary-orange)' : 'none'
        }}
        title="Change Language / भाषा बदलें"
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '14px' }}>{currentLanguageConfig?.flag || '🇮🇳'}</span>
          <span style={{ textTransform: 'uppercase', color: 'var(--primary-navy)', fontWeight: 800 }}>
            {currentLanguageConfig?.code}
          </span>
          <span style={{ color: 'var(--text-main)' }}>
            {currentLanguageConfig?.nativeName}
          </span>
        </span>
        <ChevronDown
          size={14}
          color="var(--text-muted)"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        />
      </button>

      {/* Dropdown Menu Modal */}
      {isOpen && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: isSidebar ? 'auto' : 'calc(100% + 8px)',
            bottom: isSidebar ? 'calc(100% + 8px)' : 'auto',
            right: isSidebar ? '0' : '0',
            left: isSidebar ? '0' : 'auto',
            width: isSidebar ? '100%' : '290px',
            maxWidth: '92vw',
            background: 'var(--bg-card-solid, var(--bg-card))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg, 16px)',
            boxShadow: 'var(--shadow-float, 0 16px 36px rgba(0, 0, 0, 0.2))',
            padding: '10px',
            zIndex: 99999,
            animation: 'fadeInSlide 0.18s ease-out'
          }}
        >
          {/* Header & Search Bar */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '4px 6px 8px 6px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <Globe size={13} color="var(--primary-orange)" />
                <span>Select Language ({supportedLanguages.length})</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setSearchQuery('');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px'
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Quick search input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-pill)',
              padding: '5px 10px'
            }}>
              <Search size={14} color="var(--text-muted)" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language / खोजें..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '12px',
                  color: 'var(--text-main)',
                  width: '100%',
                  fontFamily: 'inherit'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                    padding: 0,
                    display: 'flex'
                  }}
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Languages List */}
          <div
            style={{
              maxHeight: '260px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              paddingRight: '2px'
            }}
            className="sidebar-scroll"
          >
            {filteredLanguages.length === 0 ? (
              <div style={{ padding: '16px 8px', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
                No matching language found
              </div>
            ) : (
              filteredLanguages.map((l) => {
                const isSelected = l.code === lang;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelect(l.code)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-md, 10px)',
                      background: isSelected ? 'var(--primary-orange-light, rgba(255, 165, 48, 0.12))' : 'transparent',
                      border: isSelected ? '1px solid var(--primary-orange)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      textAlign: 'left',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = 'var(--bg-secondary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '16px' }}>{l.flag}</span>
                      <div>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: isSelected ? 'var(--primary-orange)' : 'var(--text-main)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span>{l.nativeName}</span>
                          <span style={{
                            fontSize: '9px',
                            fontWeight: 800,
                            padding: '1px 5px',
                            borderRadius: '4px',
                            background: isSelected ? 'var(--primary-orange)' : 'var(--border-subtle)',
                            color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                            textTransform: 'uppercase'
                          }}>
                            {l.code}
                          </span>
                        </div>
                        <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>
                          {l.name}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check size={16} color="var(--primary-orange)" strokeWidth={2.8} />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
