import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, ShieldCheck, ExternalLink, Heart } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '60px 0 32px 0',
      marginTop: '80px',
      position: 'relative'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--primary-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Layers size={20} color="#030A12" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px' }}>
                Scheme<span style={{ color: 'var(--primary-bright)' }}>Flow</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              {t('footerDesc')}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontSize: '13px', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>{t('footerVerified')}</span>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '15px' }}>{t('footerCapabilities')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <button 
                  onClick={() => { setActivePage('wizard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  {t('footerWizard')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  {t('footerDashboard')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('assistant'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  {t('footerAssistant')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('saved'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  {t('footerReadiness')}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '15px' }}>{t('footerSources')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <a href="https://www.myscheme.gov.in" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>myScheme Portal (MeitY)</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a href="https://www.udyamimitra.in" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>SIDBI Udyamimitra</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a href="https://www.kviconline.gov.in" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>KVIC PMEGP Portal</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a href="https://pmvishwakarma.gov.in" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>PM Vishwakarma Portal</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div style={{
          background: 'rgba(3, 10, 18, 0.6)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {t('footerDisclaimer')}
          </p>
        </div>

        {/* Bottom copyright */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          borderTop: '1px solid rgba(84, 210, 255, 0.08)',
          paddingTop: '24px',
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          <div>{t('footerRights')}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{t('footerBuiltWith')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
