import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { localizeScheme } from '../translations/schemeTranslations';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Clock,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

export const SchemeComparator = ({ selectedSchemes = [], onRemoveScheme, onClearAll, onSelectScheme }) => {
  const { lang, t } = useLanguage();

  if (selectedSchemes.length === 0) {
    return null;
  }

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: '24px',
      boxShadow: 'var(--shadow-card)',
      marginBottom: '16px'
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--primary-navy-light)',
            color: 'var(--primary-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Layers size={18} />
          </div>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              {t('comparatorTitle') || "Side-by-Side Scheme Comparison"}
            </h2>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {selectedSchemes.length} {t('comparingSchemesCount') || "Comparing schemes side-by-side"}
            </div>
          </div>
        </div>

        <button
          onClick={onClearAll}
          className="btn btn-outline btn-sm"
        >
          <span>{t('clearComparison') || "Clear Comparison"}</span>
        </button>
      </div>

      {/* Comparison Grid Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-muted)', width: '22%', fontSize: '11px', textTransform: 'uppercase' }}>
                {t('criteriaHeader') || "Criteria"}
              </th>
              {selectedSchemes.map(rawS => {
                const s = localizeScheme(rawS, lang);
                return (
                  <th key={s.scheme_id || s.id} style={{ textAlign: 'left', padding: '12px', width: `${78 / selectedSchemes.length}%` }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '6px' }}>
                      <span style={{ fontWeight: 800, fontSize: '14px', color: 'var(--text-main)' }}>
                        {s.scheme_name || s.name}
                      </span>
                      <button
                        onClick={() => onRemoveScheme(s.scheme_id || s.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer' }}
                        title={t('removeCompare') || "Remove"}
                      >
                        <X size={15} />
                      </button>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            
            {/* Match Score */}
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
              <td style={{ padding: '12px', fontWeight: 700, color: 'var(--text-main)' }}>
                {t('matchScoreCol') || "Match Score"}
              </td>
              {selectedSchemes.map(rawS => {
                const s = localizeScheme(rawS, lang);
                return (
                  <td key={s.scheme_id || s.id} style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: s.match_score >= 85 ? 'var(--primary-orange)' : 'var(--primary-navy)' }}>
                        {s.match_score || 85}%
                      </span>
                      <span className={`badge ${s.mandatory_eligible !== false ? 'badge-orange' : 'badge-danger'}`} style={{ fontSize: '10px' }}>
                        {s.mandatory_eligible !== false
                          ? (lang === 'hi' ? 'योग्य' : (lang === 'bn' ? 'উপযুক্ত' : 'Good Match'))
                          : (lang === 'hi' ? 'अयोग्य' : (lang === 'bn' ? 'অনুপযুক্ত' : 'Ineligible'))}
                      </span>
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Ministry & Category */}
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <td style={{ padding: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {t('ministryCategoryCol') || "Ministry / Category"}
              </td>
              {selectedSchemes.map(rawS => {
                const s = localizeScheme(rawS, lang);
                return (
                  <td key={s.scheme_id || s.id} style={{ padding: '12px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{s.category}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s.department || s.ministry}</div>
                  </td>
                );
              })}
            </tr>

            {/* Benefit Max */}
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
              <td style={{ padding: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {t('maxBenefitCol') || "Max Benefit"}
              </td>
              {selectedSchemes.map(rawS => {
                const s = localizeScheme(rawS, lang);
                return (
                  <td key={s.scheme_id || s.id} style={{ padding: '12px', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    {s.max_benefit || (lang === 'hi' ? 'प्रत्यक्ष सहायता' : (lang === 'bn' ? 'সরাসরি আর্থিক সহায়তা' : 'Direct assistance'))}
                  </td>
                );
              })}
            </tr>

            {/* Processing Timeline */}
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <td style={{ padding: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {t('processingTimeCol') || "Processing Time"}
              </td>
              {selectedSchemes.map(rawS => {
                const s = localizeScheme(rawS, lang);
                return (
                  <td key={s.scheme_id || s.id} style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-orange)', fontWeight: 700 }}>
                      <Clock size={13} />
                      <span>{s.processing_timeline || (lang === 'hi' ? '15–30 दिन' : (lang === 'bn' ? '১৫–৩০ দিন' : '15–30 Days'))}</span>
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Action Buttons */}
            <tr>
              <td style={{ padding: '12px' }} />
              {selectedSchemes.map(rawS => {
                const s = localizeScheme(rawS, lang);
                return (
                  <td key={s.scheme_id || s.id} style={{ padding: '12px' }}>
                    <button
                      onClick={() => onSelectScheme(s.scheme_id || s.id)}
                      className="btn btn-navy btn-sm"
                      style={{ width: '100%', marginBottom: '6px' }}
                    >
                      <span>{t('fullBreakdown') || "Full Breakdown"}</span>
                      <ArrowRight size={13} />
                    </button>
                    {s.application_url && (
                      <a
                        href={s.application_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                        style={{ width: '100%' }}
                      >
                        <span>{t('officialPortalBtn') || "Official Portal"}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </td>
                );
              })}
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};
