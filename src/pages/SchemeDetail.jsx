import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { api } from '../services/api';
import { CriterionRow } from '../components/CriterionRow';
import { DocumentChecklist } from '../components/DocumentChecklist';
import {
  ArrowLeft,
  Building2,
  ExternalLink,
  ShieldCheck,
  Award,
  Layers,
  FileCheck2,
  Bookmark,
  Calendar,
  Clock,
  Volume2,
  VolumeX,
  Sparkles,
  Quote,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const SchemeDetail = ({ schemeId, setActivePage }) => {
  const { lang, t } = useLanguage();
  const { profile = {}, savedSchemeIds = [], toggleSaveScheme } = useProfile();
  
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    if (schemeId) {
      setLoading(true);
      api.evaluateSingleScheme(schemeId, profile)
        .then(data => {
          setEvaluation(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [schemeId, profile]);

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window) || !evaluation) {
      alert("Text-to-speech not supported in this browser.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const whyList = Array.isArray(evaluation.why_this_scheme) ? evaluation.why_this_scheme.slice(0, 3).join('. ') : '';
    const textToSpeak = `${evaluation.scheme_name}. ${evaluation.summary}. Maximum benefit: ${evaluation.max_benefit}. Key criteria: ${whyList}. Application window: ${evaluation.deadline}.`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    if (lang === 'hi') utterance.lang = 'hi-IN';
    else if (lang === 'bn') utterance.lang = 'bn-IN';
    else utterance.lang = 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--primary-navy)' }}>
        Evaluating criteria & loading official scheme facts...
      </div>
    );
  }

  if (!evaluation) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
        <h3>Scheme details not found</h3>
        <button onClick={() => setActivePage('dashboard')} className="btn btn-navy btn-sm" style={{ marginTop: '12px' }}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  const isSaved = Array.isArray(savedSchemeIds) && savedSchemeIds.includes(evaluation.scheme_id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '920px' }}>
      
      {/* Back Button & Top Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <button
          onClick={() => setActivePage('dashboard')}
          className="btn btn-outline btn-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to Recommendations</span>
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleToggleAudio}
            className="btn btn-secondary btn-sm"
          >
            {isPlayingAudio ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{isPlayingAudio ? 'Stop Audio' : 'Listen'}</span>
          </button>

          <button
            onClick={() => typeof toggleSaveScheme === 'function' && toggleSaveScheme(evaluation.scheme_id)}
            className="btn btn-secondary btn-sm"
          >
            <Bookmark size={14} fill={isSaved ? 'var(--primary-orange)' : 'none'} />
            <span>{isSaved ? 'Bookmarked' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Scheme Header Card */}
      <div className="card" style={{ padding: '28px', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '8px' }}>
              {evaluation.category}
            </span>

            <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              {evaluation.scheme_name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>
              <Building2 size={14} color="var(--primary-navy)" />
              <span>{evaluation.department} • {evaluation.ministry}</span>
            </div>

            {/* Deadline & Processing Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--primary-orange-light)', color: '#C27000', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 700 }}>
                <Calendar size={13} />
                <span>Deadline: {evaluation.deadline}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--palette-sand-light)', color: 'var(--text-main)', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 700 }}>
                <Clock size={13} />
                <span>Processing: {evaluation.processing_timeline}</span>
              </div>
            </div>
          </div>

          {/* Match Score Card */}
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 20px',
            textAlign: 'center',
            minWidth: '130px'
          }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: evaluation.match_score >= 85 ? 'var(--primary-orange)' : 'var(--primary-navy)', lineHeight: 1 }}>
              {evaluation.match_score}%
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', marginTop: '4px' }}>
              {evaluation.match_label}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          {evaluation.summary}
        </p>
      </div>

      {/* Near-Miss Proactive Guidance Box */}
      {evaluation.near_miss_tips && evaluation.near_miss_tips.length > 0 && (
        <div style={{
          background: 'var(--warning-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          border: '1px solid rgba(217, 119, 6, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--warning)', fontWeight: 800, fontSize: '13px', marginBottom: '6px' }}>
            <Sparkles size={15} />
            <span>Proactive Eligibility Optimization Advice:</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: 'var(--text-main)' }}>
            {evaluation.near_miss_tips.map((tip, idx) => (
              <div key={idx} style={{ lineHeight: 1.4 }}>{tip}</div>
            ))}
          </div>
        </div>
      )}

      {/* Eligibility Breakdown */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
          Eligibility Criteria Analysis
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {evaluation.criteria_results?.map((crit, idx) => (
            <CriterionRow key={idx} criterion={crit} />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      {evaluation.benefits && evaluation.benefits.length > 0 && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
            Key Benefits & Subsidies
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {evaluation.benefits.map((b, idx) => (
              <div key={idx} className="card" style={{ background: 'var(--bg-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '14px', color: 'var(--text-main)' }}>{b.title}</h4>
                  {b.amount_or_percentage && (
                    <span className="badge badge-orange" style={{ fontSize: '11px' }}>
                      {b.amount_or_percentage}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Document Checklist */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
          Document Readiness
        </h3>
        <DocumentChecklist
          schemeId={evaluation.scheme_id}
          documents={evaluation.documents || []}
        />
      </div>

      {/* Official External Link CTA */}
      <div style={{
        background: 'var(--palette-sand-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-navy)' }}>
            Official Application Portal
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
            Redirects directly to verified government e-portal.
          </div>
        </div>

        {evaluation.application_url && (
          <a
            href={evaluation.application_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '8px 20px' }}
          >
            <span>Proceed to Portal</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>

    </div>
  );
};
