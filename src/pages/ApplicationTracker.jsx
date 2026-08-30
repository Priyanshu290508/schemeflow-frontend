import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { api } from '../services/api';
import {
  FileSearch,
  CheckCircle2,
  Clock,
  AlertCircle,
  Building2,
  User,
  Calendar,
  ArrowRight,
  ShieldCheck,
  FileText,
  Sparkles
} from 'lucide-react';

const DEMO_PRESETS = [
  { id: "PMEGP-2026-WB-8921", label: "PMEGP Dairy (West Bengal)" },
  { id: "MUDRA-2026-KISHORE-4492", label: "MUDRA Kishore (Auto Workshop)" },
  { id: "VISHWAKARMA-2026-3120", label: "PM Vishwakarma (Artisan Toolkit)" }
];

export const ApplicationTracker = ({ initialTrackingId = 'PMEGP-2026-WB-8921' }) => {
  const { t } = useLanguage();
  const [trackingIdInput, setTrackingIdInput] = useState(initialTrackingId);
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStatus = async (idToTrack) => {
    if (!idToTrack.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await api.getApplicationStatus(idToTrack);
      setStatusData(data);
    } catch (err) {
      console.error(err);
      setError("Unable to retrieve status for this tracking reference. Please check ID.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus(initialTrackingId);
  }, [initialTrackingId]);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    fetchStatus(trackingIdInput);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '880px' }}>
      
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span className="badge badge-navy">Feature: Milestone Verification</span>
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
          Application Status Tracker
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Track your application milestone verification, bank appraisal, and subsidy disbursal.
        </p>
      </div>

      {/* Search Box */}
      <div className="card" style={{ padding: '20px' }}>
        <form onSubmit={handleTrackSubmit} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
          <input
            type="text"
            className="form-input"
            style={{ textTransform: 'uppercase', fontWeight: 700 }}
            value={trackingIdInput}
            onChange={(e) => setTrackingIdInput(e.target.value)}
            placeholder="Enter Tracking ID (e.g. PMEGP-2026-WB-8921)"
          />
          <button
            type="submit"
            disabled={loading || !trackingIdInput.trim()}
            className="btn btn-navy"
            style={{ padding: '0 24px' }}
          >
            <span>Track</span>
            <ArrowRight size={15} />
          </button>
        </form>

        {/* Demo Presets */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Demo Presets:</span>
          {DEMO_PRESETS.map((preset, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setTrackingIdInput(preset.id);
                fetchStatus(preset.id);
              }}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--primary-navy)',
                borderRadius: 'var(--radius-pill)',
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: '11px',
                fontWeight: 700
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tracking Results */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--primary-navy)' }}>
          Querying application verification records...
        </div>
      ) : error ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px', color: 'var(--danger)' }}>
          <AlertCircle size={32} style={{ margin: '0 auto 8px auto' }} />
          <div>{error}</div>
        </div>
      ) : statusData && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Summary Status Banner */}
          <div className="card" style={{ padding: '24px', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Application ID: <strong style={{ color: 'var(--primary-navy)' }}>{statusData.tracking_id}</strong>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                  {statusData.scheme_name}
                </h3>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  Applicant: <strong>{statusData.applicant_name}</strong> • Applied: <strong>{statusData.applied_date}</strong>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className={`badge ${statusData.overall_status === 'APPROVED' ? 'badge-orange' : 'badge-warning'}`} style={{ fontSize: '12px', padding: '6px 12px' }}>
                  {statusData.overall_status.replace('_', ' ')}
                </span>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Progress: <strong style={{ color: 'var(--text-main)' }}>{statusData.progress_percentage}%</strong>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{
              width: '100%',
              height: '8px',
              background: 'var(--bg-secondary)',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              <div style={{
                width: `${statusData.progress_percentage}%`,
                height: '100%',
                background: 'var(--primary-navy)',
                borderRadius: '4px',
                transition: 'width 0.6s ease'
              }} />
            </div>

            {/* Next Action Due Banner */}
            {statusData.next_action_due && (
              <div style={{
                background: 'var(--warning-bg)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Clock size={16} color="var(--warning)" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '10px', color: 'var(--warning)', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>
                    Next Action Due:
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-main)', fontWeight: 600 }}>
                    {statusData.next_action_due}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Timeline Audit Logs */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={16} color="var(--primary-navy)" />
              <span>Milestone Verification Log</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {statusData.steps.map((step, idx) => {
                const isCompleted = step.status === 'COMPLETED';
                const isInProgress = step.status === 'IN_PROGRESS';

                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isCompleted ? 'var(--primary-orange-light)' : isInProgress ? 'var(--primary-navy-light)' : 'var(--bg-secondary)',
                      color: isCompleted ? 'var(--primary-orange)' : isInProgress ? 'var(--primary-navy)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '12px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      {isCompleted ? <CheckCircle2 size={15} /> : idx + 1}
                    </div>

                    <div style={{
                      flex: 1,
                      background: isInProgress ? 'var(--primary-navy-light)' : 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 14px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                        <span style={{ fontWeight: 700, fontSize: '13px', color: 'var(--text-main)' }}>
                          {step.title}
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                          {step.date}
                        </span>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
                        {step.officer_remark}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
