import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import {
  Search,
  Bell,
  ChevronDown,
  Menu
} from 'lucide-react';

export const Navbar = ({ activePage, setActivePage, searchTerm, setSearchTerm, setMobileMenuOpen }) => {
  const { lang, setLang, t } = useLanguage();
  const { profile = {} } = useProfile();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activePage !== 'dashboard') {
      setActivePage('dashboard');
    }
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      marginBottom: '24px',
      flexWrap: 'wrap'
    }}>
      
      {/* Left: Mobile Hamburger Toggle + Search Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', minWidth: '240px' }}>
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => typeof setMobileMenuOpen === 'function' && setMobileMenuOpen(true)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-navy)',
            cursor: 'pointer',
            flexShrink: 0
          }}
          className="mobile-menu-toggle"
          title="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>

        {/* Search Pill Input */}
        <form
          onSubmit={handleSearchSubmit}
          style={{
            flex: '1',
            maxWidth: '480px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <input
            type="text"
            value={searchTerm || ''}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            placeholder={t('searchPlaceholder')}
            style={{
              width: '100%',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-pill)',
              padding: '11px 44px 11px 18px',
              fontSize: '13px',
              color: 'var(--text-main)',
              outline: 'none',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-main)',
              boxShadow: 'var(--shadow-card)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--primary-orange)';
              e.target.style.boxShadow = '0 0 0 3px var(--primary-orange-light)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-card)';
              e.target.style.boxShadow = 'var(--shadow-card)';
            }}
          />

          <button
            type="submit"
            style={{
              position: 'absolute',
              right: '6px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-orange)',
              cursor: 'pointer'
            }}
          >
            <Search size={18} strokeWidth={2.5} />
          </button>
        </form>
      </div>

      {/* Right Controls: Language Selector + Notification + User Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        
        {/* Language Flag Selector */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-pill)',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--text-main)'
        }}>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="en">EN 🇬🇧 English</option>
            <option value="hi">HI 🇮🇳 हिन्दी</option>
            <option value="bn">BN 🇮🇳 বাংলা</option>
          </select>
        </div>

        {/* Notification Bell */}
        <div
          onClick={() => setActivePage('tracker')}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            color: 'var(--primary-navy)',
            flexShrink: 0
          }}
          title="Active Notifications & Application Tracker"
        >
          <Bell size={17} />
          <span style={{
            position: 'absolute',
            top: '7px',
            right: '7px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'var(--primary-orange)',
            border: '2px solid var(--bg-card-solid)'
          }} />
        </div>

        {/* User Sign In / Profile Pill Widget */}
        <button
          onClick={() => setActivePage('login')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-pill)',
            padding: '4px 14px 4px 6px',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}
          title={t('signIn')}
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Profile Avatar"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-navy)' }}>
            {profile?.district ? `${profile.district}` : t('signIn')}
          </span>
          <ChevronDown size={13} color="var(--text-muted)" className="desktop-only" />
        </button>
      </div>

    </header>
  );
};
