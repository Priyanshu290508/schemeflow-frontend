import React from 'react';
import { CheckCircle2, XCircle, AlertCircle, HelpCircle, FileText } from 'lucide-react';

export const CriterionRow = ({ criterion }) => {
  const { field, label, status, user_value, required_value, reason, required, source_reference } = criterion;

  let StatusIcon = CheckCircle2;
  let statusBadgeClass = 'badge-success';
  let statusText = 'Pass';
  let iconColor = 'var(--success)';

  if (status === 'FAIL') {
    StatusIcon = XCircle;
    statusBadgeClass = 'badge-danger';
    statusText = required ? 'Mandatory Failed' : 'Not Satisfied';
    iconColor = 'var(--danger)';
  } else if (status === 'NEEDS_VERIFICATION') {
    StatusIcon = AlertCircle;
    statusBadgeClass = 'badge-warning';
    statusText = 'Needs Verification';
    iconColor = 'var(--warning)';
  } else if (status === 'MISSING_INFORMATION') {
    StatusIcon = HelpCircle;
    statusBadgeClass = 'badge-neutral';
    statusText = 'Missing Info';
    iconColor = 'var(--text-muted)';
  }

  // Format required value for clean display
  let requiredDisplay = required_value;
  if (Array.isArray(required_value)) {
    requiredDisplay = required_value.join(' / ');
  } else if (typeof required_value === 'object' && required_value !== null) {
    requiredDisplay = JSON.stringify(required_value);
  }

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      transition: 'border-color 0.2s ease'
    }}>
      
      {/* Header with Title and Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <StatusIcon size={18} color={iconColor} />
          <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-main)' }}>
            {label}
          </span>
          {required && (
            <span style={{ fontSize: '11px', color: 'var(--primary-bright)', background: 'rgba(24, 200, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
              Mandatory
            </span>
          )}
        </div>
        <span className={`badge ${statusBadgeClass}`}>
          {statusText}
        </span>
      </div>

      {/* Comparison Grid: You vs Requirement */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '12px',
        background: 'rgba(3, 10, 18, 0.4)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '13px'
      }}>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>
            Your Profile:
          </span>
          <span style={{ fontWeight: 600, color: user_value !== null && user_value !== undefined ? 'var(--text-main)' : 'var(--warning)' }}>
            {user_value !== null && user_value !== undefined ? String(user_value) : 'Not Provided'}
          </span>
        </div>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>
            Scheme Requirement:
          </span>
          <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
            {requiredDisplay ? String(requiredDisplay) : 'Open / Applicable'}
          </span>
        </div>
      </div>

      {/* Evaluation Reason */}
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
        {reason}
      </p>

      {/* Source Citation */}
      {source_reference && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
          <FileText size={12} color="var(--primary-cyan)" />
          <span>Source: {source_reference}</span>
        </div>
      )}

    </div>
  );
};
