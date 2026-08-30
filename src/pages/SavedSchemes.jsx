import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { api } from '../services/api';
import { DocumentChecklist } from '../components/DocumentChecklist';
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
  const { t } = useLanguage();
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
    <div className="section" style={{ paddingTop: '36px' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Bookmark size={20} color="var(--primary-cyan)" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-bright)', textTransform: 'uppercase' }}>
              Personal Shortlist & Readiness
            </span>
          </div>
          <h1 style={{ fontSize: '28px', marginBottom: '6px' }}>{t('navSaved')}</h1>
          <p style={{ fontSize: '15px' }}>
            Track document readiness and prepare your applications for your shortlisted government schemes.
          </p>
        </div>

        {/* Schemes List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="animate-glow" style={{ color: 'var(--primary-bright)' }}>
              Loading your saved schemes...
            </div>
          </div>
        ) : schemes.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '60px 24px' }}>
            <Bookmark size={42} color="var(--text-muted)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ marginBottom: '8px' }}>No Saved Schemes Yet</h3>
            <p style={{ maxWidth: '420px', margin: '0 auto 24px auto', fontSize: '14px' }}>
              Explore the recommendations dashboard or ask the AI assistant to shortlist relevant schemes.
            </p>
            <button
              onClick={() => setActivePage('dashboard')}
              className="btn btn-primary btn-sm"
            >
              <Compass size={16} />
              <span>Explore Recommendations</span>
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {schemes.map(scheme => {
              const docs = scheme.documents || [];
              const checkedList = checkedDocuments[scheme.id] || [];
              const readyCount = docs.filter(d => checkedList.includes(d.name)).length;
              const totalDocs = docs.length;
              const percent = totalDocs > 0 ? Math.round((readyCount / totalDocs) * 100) : 100;

              return (
                <div key={scheme.id} className="card" style={{ padding: '28px' }}>
                  
                  {/* Scheme Header */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span className="badge badge-cyan">{scheme.category}</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{scheme.department}</span>
                      </div>

                      <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '6px' }}>
                        {scheme.name}
                      </h3>

                      <p style={{ fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                        {scheme.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleSaveScheme(scheme.id)}
                      className="btn btn-outline btn-sm"
                      style={{ color: 'var(--danger)', borderColor: 'rgba(255,111,145,0.3)' }}
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>

                  {/* Interactive Document Checklist embedded */}
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <DocumentChecklist schemeId={scheme.id} documents={docs} />
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      Max Benefit: <strong style={{ color: 'var(--text-main)' }}>{scheme.max_benefit || 'Standard Subsidy'}</strong>
                    </span>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => {
                          setSelectedSchemeId(scheme.id);
                          setActivePage('detail');
                        }}
                        className="btn btn-secondary btn-sm"
                      >
                        <span>View Full Rules</span>
                        <ArrowRight size={14} />
                      </button>

                      {scheme.application_url && (
                        <a
                          href={scheme.application_url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <span>Apply Online</span>
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
