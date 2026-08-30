import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { CheckSquare, Square, FileCheck, AlertCircle, Info } from 'lucide-react';

export const DocumentChecklist = ({ schemeId, documents = [] }) => {
  const { checkedDocuments, toggleDocumentCheck } = useProfile();
  const checkedForScheme = checkedDocuments[schemeId] || [];

  const totalDocs = documents.length;
  const readyDocs = documents.filter(d => checkedForScheme.includes(d.name)).length;
  const readinessPercent = totalDocs > 0 ? Math.round((readyDocs / totalDocs) * 100) : 100;

  const mandatoryCount = documents.filter(d => d.is_mandatory).length;
  const readyMandatoryCount = documents.filter(d => d.is_mandatory && checkedForScheme.includes(d.name)).length;

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px'
    }}>
      
      {/* Header & Readiness Bar */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCheck size={20} color="var(--primary-cyan)" />
            <h3 style={{ fontSize: '18px', color: 'var(--text-main)' }}>Application Readiness</h3>
          </div>
          <span style={{
            fontSize: '14px',
            fontWeight: 700,
            color: readinessPercent === 100 ? 'var(--success)' : 'var(--primary-bright)'
          }}>
            {readyDocs} of {totalDocs} Ready ({readinessPercent}%)
          </span>
        </div>

        {/* Progress Track */}
        <div style={{
          width: '100%',
          height: '8px',
          background: 'rgba(84, 210, 255, 0.1)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${readinessPercent}%`,
            height: '100%',
            background: readinessPercent === 100 ? 'var(--success)' : 'var(--primary-gradient)',
            borderRadius: '4px',
            transition: 'width 0.4s ease'
          }} />
        </div>

        {readyMandatoryCount < mandatoryCount && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px', fontSize: '12px', color: 'var(--warning)' }}>
            <AlertCircle size={14} />
            <span>Missing {mandatoryCount - readyMandatoryCount} mandatory document(s) before applying.</span>
          </div>
        )}
      </div>

      {/* Interactive Document Checklist */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {documents.map((doc, idx) => {
          const isChecked = checkedForScheme.includes(doc.name);

          return (
            <div
              key={idx}
              onClick={() => toggleDocumentCheck(schemeId, doc.name)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px 16px',
                background: isChecked ? 'rgba(53, 211, 154, 0.08)' : 'var(--bg-secondary)',
                border: '1px solid ' + (isChecked ? 'rgba(53, 211, 154, 0.3)' : 'var(--border-subtle)'),
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <div style={{ marginTop: '2px', color: isChecked ? 'var(--success)' : 'var(--text-muted)' }}>
                {isChecked ? <CheckSquare size={18} /> : <Square size={18} />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{
                    fontWeight: 600,
                    fontSize: '14px',
                    color: isChecked ? 'var(--text-main)' : 'var(--text-secondary)',
                    textDecoration: isChecked ? 'none' : 'none'
                  }}>
                    {doc.name}
                  </span>
                  <span className={`badge ${doc.is_mandatory ? 'badge-danger' : 'badge-neutral'}`} style={{ fontSize: '11px' }}>
                    {doc.is_mandatory ? 'Required' : 'Optional'}
                  </span>
                </div>

                {doc.description && (
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', margin: 0 }}>
                    {doc.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Checklist Tip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
        <Info size={14} color="var(--primary-cyan)" />
        <span>Click any document to mark it as ready in your personal checklist.</span>
      </div>

    </div>
  );
};
