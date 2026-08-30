import React from 'react';

export const MatchScore = ({ score = 0, label = '', mandatoryEligible = true, size = 'md' }) => {
  // Determine color theme based on score and mandatory status
  let strokeColor = 'var(--primary-cyan)';
  let bgGlow = 'rgba(24, 200, 255, 0.2)';
  let textColor = 'var(--primary-bright)';

  if (!mandatoryEligible) {
    strokeColor = 'var(--danger)';
    bgGlow = 'rgba(255, 111, 145, 0.25)';
    textColor = 'var(--danger)';
  } else if (score >= 85) {
    strokeColor = 'var(--success)';
    bgGlow = 'rgba(53, 211, 154, 0.25)';
    textColor = 'var(--success)';
  } else if (score >= 70) {
    strokeColor = 'var(--primary-cyan)';
    bgGlow = 'rgba(24, 200, 255, 0.25)';
    textColor = 'var(--primary-bright)';
  } else if (score >= 50) {
    strokeColor = 'var(--warning)';
    bgGlow = 'rgba(255, 203, 102, 0.25)';
    textColor = 'var(--warning)';
  } else {
    strokeColor = 'var(--danger)';
    bgGlow = 'rgba(255, 111, 145, 0.25)';
    textColor = 'var(--danger)';
  }

  // Circular gauge parameters
  const dimensions = size === 'lg' ? 120 : size === 'sm' ? 56 : 84;
  const strokeWidth = size === 'lg' ? 9 : size === 'sm' ? 5 : 7;
  const radius = (dimensions - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (Math.max(0, Math.min(100, score)) / 100) * circumference;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      
      {/* Radial Meter */}
      <div style={{ position: 'relative', width: `${dimensions}px`, height: `${dimensions}px` }}>
        <svg width={dimensions} height={dimensions} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle track */}
          <circle
            cx={dimensions / 2}
            cy={dimensions / 2}
            r={radius}
            stroke="rgba(84, 210, 255, 0.12)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active progress stroke */}
          <circle
            cx={dimensions / 2}
            cy={dimensions / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{
              transition: 'stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: `drop-shadow(0 0 6px ${bgGlow})`
            }}
          />
        </svg>

        {/* Center score readout */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          lineHeight: 1
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: size === 'lg' ? '28px' : size === 'sm' ? '14px' : '20px',
            color: textColor
          }}>
            {score}
          </span>
          {size !== 'sm' && (
            <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 600 }}>
              / 100
            </span>
          )}
        </div>
      </div>

      {/* Classification label */}
      {label && size !== 'sm' && (
        <span style={{
          fontSize: size === 'lg' ? '13px' : '11px',
          fontWeight: 700,
          color: textColor,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          textAlign: 'center'
        }}>
          {label}
        </span>
      )}

    </div>
  );
};
