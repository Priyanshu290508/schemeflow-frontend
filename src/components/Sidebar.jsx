import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import {
  Home,
  Grid,
  Layers,
  FileSearch,
  Sparkles,
  Bookmark,
  User,
  Settings,
  GraduationCap,
  ShieldCheck,
  X
} from 'lucide-react';

export const Sidebar = ({ activePage, setActivePage, mobileMenuOpen, setMobileMenuOpen }) => {
  const { t } = useLanguage();
  const { savedSchemeIds = [] } = useProfile();

  const navItems = [
    { id: 'dashboard', label: 'Home / Discover', icon: Home },
    { id: 'wizard', label: 'Categories / Fit', icon: Grid },
    { id: 'tracker', label: t('navTracker'), icon: FileSearch },
    { id: 'assistant', label: t('navAssistant'), icon: Sparkles },
    { id: 'saved', label: `${t('navSaved')} (${savedSchemeIds?.length || 0})`, icon: Bookmark },
    { id: 'profile', label: 'Profile & Settings', icon: Settings },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    if (typeof setMobileMenuOpen === 'function') {
      setMobileMenuOpen(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => typeof setMobileMenuOpen === 'function' && setMobileMenuOpen(false)}
      />

      <aside
        className={`left-sidebar-panel sidebar-scroll ${mobileMenuOpen ? 'mobile-open' : ''}`}
        style={{
          width: '240px',
          borderRight: '1px solid var(--border-subtle)',
          background: '#FFFFFF',
          padding: '24px 16px 20px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          minHeight: '100vh',
          overflowY: 'auto'
        }}
      >
        <div>
          {/* Top Header with Brand & Mobile Close Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              paddingLeft: '4px'
            }}
          >
            <div
              onClick={() => handleNavClick('dashboard')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--primary-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 6px 14px rgba(34, 61, 121, 0.25)'
              }}>
                <GraduationCap size={20} strokeWidth={2.4} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'var(--primary-navy)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}>
                  SchemeFlow
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Public Welfare
                </div>
              </div>
            </div>

            {/* Mobile Close Icon */}
            <button
              onClick={() => typeof setMobileMenuOpen === 'function' && setMobileMenuOpen(false)}
              style={{
                background: 'var(--bg-secondary)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                cursor: 'pointer'
              }}
              className="mobile-close-btn"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation List */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id || (item.id === 'dashboard' && activePage === 'landing');

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: isActive ? '8px 14px' : '10px 14px',
                    borderRadius: isActive ? 'var(--radius-pill)' : 'var(--radius-md)',
                    background: isActive ? 'var(--primary-orange)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: '13px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    textAlign: 'left',
                    boxShadow: isActive ? 'var(--shadow-orange)' : 'none'
                  }}
                >
                  {/* Circular Icon Container */}
                  <div style={{
                    width: isActive ? '28px' : '22px',
                    height: isActive ? '28px' : '22px',
                    borderRadius: '50%',
                    background: isActive ? '#FFFFFF' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? 'var(--primary-orange)' : 'inherit',
                    flexShrink: 0
                  }}>
                    <Icon size={isActive ? 15 : 17} />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Quick Card */}
        <div style={{
          background: 'var(--palette-sand-light)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          marginTop: '20px',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <ShieldCheck size={14} color="var(--primary-navy)" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--primary-navy)', textTransform: 'uppercase' }}>
              100% Grounded
            </span>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.35, margin: 0 }}>
            Official deterministic matching.
          </p>
        </div>
      </aside>

      <style>{`
        @media (max-width: 900px) {
          .mobile-close-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};
