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
  Lock,
  X
} from 'lucide-react';

export const Sidebar = ({ activePage, setActivePage, mobileMenuOpen, setMobileMenuOpen }) => {
  const { t } = useLanguage();
  const { savedSchemeIds = [] } = useProfile();

  const navItems = [
    { id: 'dashboard', label: t('navDiscover'), icon: Home },
    { id: 'wizard', label: t('navCategoriesFit'), icon: Grid },
    { id: 'tracker', label: t('navTracker'), icon: FileSearch },
    { id: 'assistant', label: t('navAssistant'), icon: Sparkles },
    { id: 'saved', label: `${t('navSaved')} (${savedSchemeIds?.length || 0})`, icon: Bookmark },
    { id: 'login', label: t('navLogin'), icon: Lock },
    { id: 'profile', label: t('navProfileSettings'), icon: Settings },
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
          background: 'var(--sidebar-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
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
                  fontSize: '17px',
                  letterSpacing: '-0.03em',
                  color: 'var(--primary-navy)'
                }}>
                  SchemeFlow
                </div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--palette-slate)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {t('publicWelfare')}
                </div>
              </div>
            </div>

            {/* Mobile Close Icon Button */}
            <button
              onClick={() => typeof setMobileMenuOpen === 'function' && setMobileMenuOpen(false)}
              className="mobile-close-btn"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '6px'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav List */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activePage === item.id || 
                (item.id === 'dashboard' && activePage === 'landing') ||
                (item.id === 'wizard' && activePage === 'detail');

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: isActive ? '9px 12px' : '9px 12px',
                    borderRadius: 'var(--radius-pill)',
                    background: isActive ? 'var(--primary-navy)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '13px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%',
                    textAlign: 'left',
                    boxShadow: isActive ? 'var(--shadow-card)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
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
                    color: isActive ? 'var(--primary-navy)' : 'inherit',
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

        {/* Bottom Area: Trust Badge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          {/* Bottom Quick Card */}
          <div style={{
            background: 'var(--palette-sand-light)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 14px',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <ShieldCheck size={14} color="var(--primary-navy)" />
              <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--primary-navy)', textTransform: 'uppercase' }}>
                {t('groundedBadge')}
              </span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.35, margin: 0 }}>
              {t('deterministicDesc')}
            </p>
          </div>
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
