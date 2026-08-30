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
  const { lang, setLang } = useLanguage();
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
            placeholder="Search schemes, subsidies..."
            style={{
              width: '100%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-pill)',
              padding: '11px 44px 11px 18px',
              fontSize: '13px',
              color: 'var(--text-main)',
              outline: 'none',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-main)'
            }}
            onFocus={(e) => {
              e.target.style.background = '#FFFFFF';
              e.target.style.borderColor = 'var(--primary-navy)';
              e.target.style.boxShadow = '0 4px 15px rgba(34, 61, 121, 0.08)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'var(--bg-secondary)';
              e.target.style.borderColor = 'var(--border-subtle)';
              e.target.style.boxShadow = 'none';
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

      {/* Right Controls: Language Flag Switcher + Notification + User Pill */}
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
            <option value="en">EN 🇬🇧</option>
            <option value="hi">HI 🇮🇳</option>
            <option value="bn">BN 🇮🇳</option>
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
            border: '2px solid #FFFFFF'
          }} />
        </div>

        {/* User Profile Pill Widget */}
        <div
          onClick={() => setActivePage('profile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-pill)',
            padding: '3px 10px 3px 5px',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
            flexShrink: 0
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Profile Avatar"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-main)' }} className="desktop-only">
            {profile?.district ? `${profile.district}` : 'My Profile'}
          </span>
          <ChevronDown size={13} color="var(--text-muted)" className="desktop-only" />
        </div>

      </div>

    </header>
  );
};
