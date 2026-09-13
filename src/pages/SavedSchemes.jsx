import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { api } from '../services/api';
import { DocumentChecklist } from '../components/DocumentChecklist';
import { localizeScheme, localizeCategory } from '../translations/schemeTranslations';
import {
  Bookmark,
  Trash2,
  ExternalLink,
  ArrowRight,
  FileCheck,
  AlertTriangle,
  Compass
} from 'lucide-react';

export const SavedSchemes = ({ setActivePage, setSelectedSchemeId }) => {
  const { lang, t } = useLanguage();
  const { savedSchemeIds, toggleSaveScheme, checkedDocuments } = useProfile();
  
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getSchemes()
      .then(data => {
        const all = data.schemes || [];
        const saved = all.filter(s => savedSchemeIds.includes(s.id));
        setSchemes(saved);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [savedSchemeIds]);

  return (
    <div className="section" style={{ paddingTop: '20px' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Bookmark size={20} color="var(--primary-orange)" />
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary-navy)', textTransform: 'uppercase' }}>
              {t('savedSchemesTitle')}
            </span>
          </div>
          <h1 style={{ fontSize: '26px', marginBottom: '6px', fontWeight: 800, color: 'var(--text-main)' }}>{t('navSaved')}</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            {t('savedSchemesSubtitle')}
          </p>
        </div>

        {/* Schemes List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--primary-navy)' }}>
            <div>Loading saved schemes...</div>
          </div>
        ) : schemes.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '60px 24px' }}>
            <Bookmark size={42} color="var(--text-muted)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ marginBottom: '8px' }}>{t('emptySchemesTitle')}</h3>
            <p style={{ maxWidth: '420px', margin: '0 auto 24px auto', fontSize: '13px', color: 'var(--text-muted)' }}>
              {t('noSavedSchemes')}
            </p>
            <button
              onClick={() => setActivePage('dashboard')}
              className="btn btn-primary btn-sm"
            >
              <Compass size={16} />
              <span>{t('ctaFindSchemes')}</span>
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {schemes.map(rawScheme => {
              const scheme = localizeScheme(rawScheme, lang);
              const docs = scheme.documents || [];
              const checkedList = checkedDocuments[scheme.id] || [];
              const readyCount = docs.filter(d => checkedList.includes(d.name)).length;
              const totalDocs = docs.length;
              const percent = totalDocs > 0 ? Math.round((readyCount / totalDocs) * 100) : 100;

              return (
                <div key={scheme.id} className="card" style={{ padding: '24px' }}>
                  
                  {/* Scheme Header */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ flex: 1, minWidth: '260px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span className="badge badge-navy">{localizeCategory(scheme.category, lang)}</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{scheme.department}</span>
                      </div>

                      <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 800 }}>
                        {scheme.name}
                      </h3>

                      <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                        {scheme.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleSaveScheme(scheme.id)}
                      className="btn btn-outline btn-sm"
                      style={{ color: 'var(--danger)', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                    >
                      <Trash2 size={14} />
                      <span>{t('removeCompare')}</span>
                    </button>
                  </div>

                  {/* Interactive Document Checklist embedded */}
                  <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <DocumentChecklist schemeId={scheme.id} documents={docs} />
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {t('maxProjectAssist')}: <strong style={{ color: 'var(--primary-orange)' }}>{scheme.max_benefit || 'Standard Subsidy'}</strong>
                    </span>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => {
                          setSelectedSchemeId(scheme.id);
                          setActivePage('detail');
                        }}
                        className="btn btn-secondary btn-sm"
                      >
                        <span>{t('viewDetails')}</span>
                        <ArrowRight size={14} />
                      </button>

                      {scheme.application_url && (
                        <a
                          href={scheme.application_url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <span>{t('applyNow')}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
