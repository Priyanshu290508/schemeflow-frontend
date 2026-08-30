import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Mail,
  Users,
  ArrowUpRight,
  TrendingUp,
  FileCheck,
  CheckCircle2
} from 'lucide-react';

export const RightSidebar = ({ setActivePage, setSelectedSchemeId }) => {
  const { t } = useLanguage();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <aside
      className="right-sidebar-panel sidebar-scroll"
      style={{
        width: '300px',
        borderLeft: '1px solid var(--border-subtle)',
        background: '#FFFFFF',
        padding: '28px 20px 24px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        height: '100%',
        minHeight: 'calc(100vh - 48px)',
        overflowY: 'auto'
      }}
    >
      {/* 1. Subscribe to Scheme Alerts Pill Card */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2px' }}>
            {subscribed ? 'Subscribed!' : 'Subscribe to Alerts'}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            Get deadline & quota updates
          </div>
        </div>

        <button
          onClick={() => setSubscribed(!subscribed)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: subscribed ? 'var(--primary-navy)' : 'var(--primary-orange)',
            color: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(255, 165, 48, 0.35)'
          }}
          title="Subscribe"
        >
          {subscribed ? <CheckCircle2 size={18} /> : <Mail size={18} />}
        </button>
      </div>

      {/* 2. Deep Royal Navy Wavy Community Card Matching Mockup */}
      <div style={{
        background: 'linear-gradient(145deg, #223D79 0%, #1A2F5E 60%, #111F3E 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px 20px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(34, 61, 121, 0.25)'
      }}>
        {/* Soft Wave Overlays */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'rgba(255, 165, 48, 0.1)',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            borderRadius: 'var(--radius-pill)',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 700,
            marginBottom: '14px',
            color: '#FFFFFF'
          }}>
            <Users size={13} color="var(--primary-orange)" />
            <span>Beneficiary Network</span>
          </div>

          <h3 style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.35,
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            Join a community of over 5,000+ Entrepreneurs here now
          </h3>

          <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5, marginBottom: '18px' }}>
            Exchange verified DPR templates, bank interview tips, and margin money subsidy tracking.
          </p>

          <button
            onClick={() => setActivePage('assistant')}
            style={{
              background: 'var(--primary-orange)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '8px 18px',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: 'var(--shadow-orange)'
            }}
          >
            <span>Ask Assistant</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* 3. Stat Cards with Sand & Slate Accents */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
        
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--primary-navy-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-navy)',
            flexShrink: 0
          }}>
            <FileCheck size={20} />
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1 }}>
              16+ Schemes
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              Active Central & State Rules
            </div>
          </div>
        </div>

        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--primary-orange-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-orange)',
            flexShrink: 0
          }}>
            <TrendingUp size={20} />
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1 }}>
              Up to 35%
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              Non-Repayable Margin Subsidy
            </div>
          </div>
        </div>

      </div>

    </aside>
  );
};
