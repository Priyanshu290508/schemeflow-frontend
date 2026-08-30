import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { SchemeComparator } from '../components/SchemeComparator';
import { SuccessStories } from '../components/SuccessStories';
import {
  Sparkles,
  ArrowRight,
  Bookmark,
  Calendar,
  Clock,
  Volume2,
  VolumeX,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Building2,
  Award,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const Dashboard = ({ setActivePage, setSelectedSchemeId, searchTerm = '' }) => {
  const { lang, t } = useLanguage();
  const { profile = {}, recommendations = [], loadingRecommendations, refreshRecommendations, savedSchemeIds = [], toggleSaveScheme } = useProfile();
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [compareList, setCompareList] = useState([]);
  const [showComparator, setShowComparator] = useState(false);
  const [activePlayingId, setActivePlayingId] = useState(null);

  useEffect(() => {
    if (!recommendations || recommendations.length === 0) {
      if (typeof refreshRecommendations === 'function') {
        refreshRecommendations();
      }
    }
  }, []);

  const categories = [
    'All',
    'Business & Entrepreneurship',
    'Credit & Micro-Finance',
    'Women & SC/ST Entrepreneurship',
    'Artisans & Traditional Crafts',
    'Animal Husbandry & Dairy'
  ];

  const safeRecs = Array.isArray(recommendations) ? recommendations : [];

  const filteredRecs = safeRecs.filter(rec => {
    if (!rec) return false;
    const matchesCategory = selectedCategory === 'All' || rec.category === selectedCategory;
    const sName = rec.scheme_name || rec.name || '';
    const sSumm = rec.summary || rec.description || '';
    const sDept = rec.department || rec.ministry || '';
    const query = (searchTerm || '').toLowerCase();
    const matchesSearch = !query || 
      sName.toLowerCase().includes(query) ||
      sSumm.toLowerCase().includes(query) ||
      sDept.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const toggleCompareScheme = (rec) => {
    if (!rec) return;
    setCompareList(prev => {
      const recId = rec.scheme_id || rec.id;
      const exists = prev.some(item => (item.scheme_id || item.id) === recId);
      if (exists) {
        return prev.filter(item => (item.scheme_id || item.id) !== recId);
      } else {
        if (prev.length >= 3) {
          alert("You can compare up to 3 schemes side-by-side.");
          return prev;
        }
        return [...prev, rec];
      }
    });
  };

  const handlePlayAudio = (rec) => {
    if (!rec) return;
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech not supported in this browser.");
      return;
    }

    const recId = rec.scheme_id || rec.id;
    if (activePlayingId === recId) {
      window.speechSynthesis.cancel();
      setActivePlayingId(null);
      return;
    }

    const whyText = Array.isArray(rec.why_this_scheme) ? rec.why_this_scheme.slice(0, 2).join('. ') : '';
    const textToSpeak = `${rec.scheme_name || rec.name}. ${rec.summary || ''}. ${whyText}. Deadline: ${rec.deadline || 'Active'}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    if (lang === 'hi') utterance.lang = 'hi-IN';
    else if (lang === 'bn') utterance.lang = 'bn-IN';
    else utterance.lang = 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = () => setActivePlayingId(null);
    utterance.onerror = () => setActivePlayingId(null);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setActivePlayingId(recId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* 1. HERO SHOWCASE BANNER MATCHING PALETTE */}
      <div style={{
        background: 'linear-gradient(135deg, #223D79 0%, #1A2F5E 55%, #122144 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '36px 40px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px -10px rgba(34, 61, 121, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        
        {/* Abstract Wave Overlays */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '100px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.06)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          right: '-20px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'rgba(255, 165, 48, 0.08)',
          pointerEvents: 'none'
        }} />

        {/* Left Content */}
        <div style={{ maxWidth: '520px', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--primary-orange)',
            marginBottom: '8px'
          }}>
            GOVERNMENT WELFARE & SUBSIDY FINDER
          </div>

          <h1 style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '10px',
            fontFamily: 'var(--font-display)',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }}>
            MOST RECOMMENDED SCHEMES THIS MONTH
          </h1>

          <p style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '22px',
            lineHeight: 1.5
          }}>
            Evaluating 100% deterministic rules for {profile?.state || 'National'} • {profile?.business_type || 'Enterprises'} • ₹{Number(profile?.loan_required || 0).toLocaleString('en-IN')} funding.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActivePage('wizard')}
              style={{
                background: 'var(--primary-orange)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 'var(--radius-pill)',
                padding: '10px 24px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: 'var(--shadow-orange)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'all 0.2s ease'
              }}
            >
              FIND MY SCHEMES
            </button>

            {compareList.length > 0 && (
              <button
                onClick={() => setShowComparator(!showComparator)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '10px 18px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {showComparator ? 'Hide Matrix' : `Compare Selected (${compareList.length})`}
              </button>
            )}
          </div>
        </div>

        {/* Right Assistance Badge */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 'var(--radius-xl)',
            padding: '18px 24px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary-orange)', lineHeight: 1 }}>
              ₹50 Lakh
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.85)', marginTop: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
              Max Project Assistance
            </div>
          </div>
        </div>

      </div>

      {/* 2. Embedded Comparator Section */}
      {showComparator && compareList.length > 0 && (
        <SchemeComparator
          selectedSchemes={compareList}
          onRemoveScheme={(id) => setCompareList(prev => prev.filter(item => (item.scheme_id || item.id) !== id))}
          onClearAll={() => setCompareList([])}
          onSelectScheme={(id) => {
            if (typeof setSelectedSchemeId === 'function') setSelectedSchemeId(id);
            if (typeof setActivePage === 'function') setActivePage('detail');
          }}
        />
      )}

      {/* 3. POPULAR SCHEMES SECTION */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>
            Popular Recommendations
          </h2>
          <button
            onClick={() => setActivePage('wizard')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-navy)',
              fontWeight: 800,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>View all</span>
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'var(--primary-navy)' : 'var(--bg-secondary)',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                border: '1px solid ' + (selectedCategory === cat ? 'transparent' : 'var(--border-subtle)'),
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        {loadingRecommendations ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--primary-navy)' }}>
            Evaluating deterministic eligibility rules...
          </div>
        ) : filteredRecs.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
            <AlertTriangle size={32} color="var(--warning)" style={{ margin: '0 auto 10px auto' }} />
            <h4>No schemes found in this category</h4>
            <p style={{ fontSize: '13px', marginTop: '4px' }}>Try switching category or refine profile details.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {filteredRecs.map((rec) => {
              const recId = rec.scheme_id || rec.id || 'scheme';
              const isSaved = Array.isArray(savedSchemeIds) && savedSchemeIds.includes(recId);
              const isCompared = compareList.some(item => (item.scheme_id || item.id) === recId);
              const isAudioActive = activePlayingId === recId;
              const matchScoreVal = typeof rec.match_score === 'number' ? rec.match_score : 85;

              return (
                <div
                  key={recId}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px',
                    position: 'relative',
                    borderTop: rec.mandatory_eligible !== false
                      ? (matchScoreVal >= 85 ? '4px solid var(--primary-orange)' : '4px solid var(--primary-navy)')
                      : '4px solid var(--danger)'
                  }}
                >
                  <div>
                    {/* Top Row: Category Badge + Save Bookmark */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span className="badge badge-navy" style={{ fontSize: '10px' }}>
                        {rec.category || 'General Welfare'}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* Audio Narrator */}
                        <button
                          onClick={() => handlePlayAudio(rec)}
                          style={{
                            background: isAudioActive ? 'var(--primary-orange-light)' : 'var(--bg-secondary)',
                            color: isAudioActive ? 'var(--primary-orange)' : 'var(--primary-navy)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '26px',
                            height: '26px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                          title="Listen in audio"
                        >
                          {isAudioActive ? <VolumeX size={13} /> : <Volume2 size={13} />}
                        </button>

                        {/* Save Bookmark */}
                        <button
                          onClick={() => typeof toggleSaveScheme === 'function' && toggleSaveScheme(recId)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: isSaved ? 'var(--primary-orange)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            padding: '2px'
                          }}
                        >
                          <Bookmark size={16} fill={isSaved ? 'var(--primary-orange)' : 'none'} />
                        </button>
                      </div>
                    </div>

                    {/* Scheme Title */}
                    <h3
                      onClick={() => {
                        if (typeof setSelectedSchemeId === 'function') setSelectedSchemeId(recId);
                        if (typeof setActivePage === 'function') setActivePage('detail');
                      }}
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        lineHeight: 1.35,
                        marginBottom: '8px',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--primary-navy)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                    >
                      {rec.scheme_name || rec.name}
                    </h3>

                    {/* Department */}
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      {rec.department || rec.ministry}
                    </div>

                    {/* Score Bar & Match Label */}
                    <div style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '10px 12px',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        Match Score:
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: matchScoreVal >= 85 ? 'var(--primary-orange)' : 'var(--primary-navy)' }}>
                          {matchScoreVal}%
                        </span>
                        <span className={`badge ${rec.mandatory_eligible !== false ? 'badge-orange' : 'badge-danger'}`} style={{ fontSize: '10px' }}>
                          {rec.match_label || 'Eligible'}
                        </span>
                      </div>
                    </div>

                    {/* Proactive Near-Miss Tip If Available */}
                    {Array.isArray(rec.near_miss_tips) && rec.near_miss_tips.length > 0 && (
                      <div style={{
                        background: 'var(--warning-bg)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '8px 10px',
                        fontSize: '11px',
                        color: 'var(--warning)',
                        marginBottom: '12px',
                        lineHeight: 1.3
                      }}>
                        {rec.near_miss_tips[0]}
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Buttons */}
                  <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px'
                  }}>
                    <button
                      onClick={() => toggleCompareScheme(rec)}
                      style={{
                        background: isCompared ? 'var(--primary-navy)' : 'transparent',
                        color: isCompared ? '#FFFFFF' : 'var(--text-secondary)',
                        border: '1px solid var(--border-card)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '4px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {isCompared ? '✓ Compared' : '+ Compare'}
                    </button>

                    <button
                      onClick={() => {
                        if (typeof setSelectedSchemeId === 'function') setSelectedSchemeId(recId);
                        if (typeof setActivePage === 'function') setActivePage('detail');
                      }}
                      className="btn btn-navy btn-sm"
                      style={{ padding: '4px 12px', fontSize: '11px' }}
                    >
                      <span>Details</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. VERIFIED ENTREPRENEUR CASE STUDIES */}
      <SuccessStories />

    </div>
  );
};
