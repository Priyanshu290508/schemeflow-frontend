import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

export const StagedLoader = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentStage, setCurrentStage] = useState(0);

  const STAGES = [
    t('stage1') || "Reading profile & normalized attributes",
    t('stage2') || "Checking deterministic eligibility rules",
    t('stage3') || "Evaluating central & state scheme repositories",
    t('stage4') || "Calculating weighted compatibility scores",
    t('stage5') || "Synthesizing explainable match breakdowns"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev < STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 400);
          }
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      textAlign: 'center'
    }}>
      
      {/* Central Pulsing Icon */}
      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '24px',
        background: 'var(--primary-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--accent-glow-strong)',
        marginBottom: '28px'
      }} className="animate-glow">
        <Sparkles size={36} color="#030A12" strokeWidth={2.5} />
      </div>

      <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-main)' }}>
        {t('loaderTitle') || "Evaluating Scheme Eligibility"}
      </h3>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '440px' }}>
        {t('loaderSubtitle') || "Processing rules deterministically across official Ministry guidelines..."}
      </p>

      {/* Stage Progression List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        width: '100%',
        maxWidth: '460px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px'
      }}>
        {STAGES.map((stage, idx) => {
          const isDone = idx < currentStage;
          const isCurrent = idx === currentStage;

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left',
                opacity: isDone || isCurrent ? 1 : 0.35,
                transition: 'opacity 0.3s ease'
              }}
            >
              {isDone ? (
                <CheckCircle2 size={20} color="var(--success)" />
              ) : isCurrent ? (
                <Loader2 size={20} color="var(--primary-bright)" className="animate-spin" />
              ) : (
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '2px solid var(--text-muted)'
                }} />
              )}

              <span style={{
                fontSize: '14px',
                fontWeight: isCurrent ? 600 : 400,
                color: isCurrent ? 'var(--primary-bright)' : isDone ? 'var(--text-main)' : 'var(--text-muted)'
              }}>
                {stage}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>

    </div>
  );
};
