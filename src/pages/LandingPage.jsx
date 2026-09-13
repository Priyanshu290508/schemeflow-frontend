import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { api } from '../services/api';
import { MatchScore } from '../components/MatchScore';
import { localizeScheme, localizeCategory } from '../translations/schemeTranslations';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileCheck2,
  Cpu,
  CheckCircle,
  Building2,
  TrendingUp,
  Award,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';

export const LandingPage = ({ setActivePage, setSelectedSchemeId }) => {
  const { lang, language, t } = useLanguage();
  const [featuredSchemes, setFeaturedSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    api.getSchemes()
      .then(data => {
        setFeaturedSchemes(data.schemes || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Business & Entrepreneurship', 'Credit & Micro-Finance', 'Women & SC/ST Entrepreneurship', 'Artisans & Traditional Crafts', 'Animal Husbandry & Dairy', 'Agriculture & Direct Income Support'];

  const filteredSchemes = activeCategory === 'All'
    ? featuredSchemes
    : featuredSchemes.filter(s => s.category === activeCategory);

  return (
    <div>
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '60px', paddingBottom: '90px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            
            {/* Left Hero Content */}
            <div>
              {/* Eyebrow badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(24, 200, 255, 0.1)',
                border: '1px solid var(--border-bright)',
                borderRadius: 'var(--radius-full)',
                padding: '6px 14px',
                marginBottom: '24px'
              }}>
                <Sparkles size={15} color="var(--primary-bright)" />
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-bright)', letterSpacing: '0.06em' }}>
                  {t('heroEyebrow')}
                </span>
              </div>

              {/* Main Headline */}
              <h1 style={{ marginBottom: '20px', lineHeight: 1.15 }}>
                Find Government Schemes That Fit Your <span style={{
                  background: 'var(--primary-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Exact Situation.</span>
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: '17px', lineHeight: 1.6, marginBottom: '36px', maxWidth: '540px' }}>
                {t('heroSubtitle')}
              </p>

              {/* Dual Action CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
                <button
                  onClick={() => setActivePage('wizard')}
                  className="btn btn-primary btn-lg"
                >
                  <span>{t('ctaFindSchemes')}</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => setActivePage('assistant')}
                  className="btn btn-secondary btn-lg"
                >
                  <Cpu size={18} />
                  <span>{t('ctaAskAssistant')}</span>
                </button>
              </div>

              {/* Trust Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '13px' }}>
                <ShieldCheck size={18} color="var(--success)" />
                <span>{t('heroVerifiedBadges')}</span>
              </div>
            </div>

            {/* Right Abstract Futuristic Visual */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '480px',
                background: 'var(--bg-card-elevated)',
                border: '1px solid var(--border-bright)',
                borderRadius: 'var(--radius-xl)',
                padding: '32px',
                boxShadow: 'var(--accent-glow-strong)',
                position: 'relative',
                overflow: 'hidden'
              }} className="card-glass">
                
                {/* Background circuit glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(24, 200, 255, 0.3) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} className="animate-glow" />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--success)' }} />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '0.04em' }}>
                      DETERMINISTIC RULE ENGINE
                    </span>
                  </div>
                  <span className="badge badge-cyan">Live Evaluation</span>
                </div>

                {/* Simulated Visual Nodes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  
                  {/* Node 1 */}
                  <div style={{
                    background: 'rgba(3, 10, 18, 0.6)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--success)" />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Age Limit Check (18–45)</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Input: 28 yrs • Rule: GTE 18</div>
                      </div>
                    </div>
                    <span className="badge badge-success">Match (20 pts)</span>
                  </div>

                  {/* Node 2 */}
                  <div style={{
                    background: 'rgba(3, 10, 18, 0.6)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--success)" />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Income Ceiling Verification</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Input: ₹2.5L • Threshold: ≤ ₹3.0L</div>
                      </div>
                    </div>
                    <span className="badge badge-success">Match (25 pts)</span>
                  </div>

                  {/* Node 3 */}
                  <div style={{
                    background: 'rgba(3, 10, 18, 0.6)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--success)" />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Sector Alignment (Dairy & Farming)</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Mapped to DAHD / NLM Guidelines</div>
                      </div>
                    </div>
                    <span className="badge badge-success">Match (25 pts)</span>
                  </div>

                </div>

                {/* Score Output Banner */}
                <div style={{
                  marginTop: '20px',
                  background: 'linear-gradient(135deg, rgba(24, 200, 255, 0.15), rgba(20, 123, 255, 0.15))',
                  border: '1px solid var(--border-bright)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--primary-bright)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Top Recommended Scheme
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                      National Livestock Mission (NLM)
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: 'var(--success)' }}>
                      92/100
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW IT WORKS (4 Cards)
          ========================================================================= */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px auto' }}>
            <h2 style={{ marginBottom: '14px' }}>{t('howItWorksTitle')}</h2>
            <p style={{ fontSize: '16px' }}>{t('howItWorksSubtitle')}</p>
          </div>

          <div className="grid-4">
            
            {/* Card 1 */}
            <div className="card">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(24, 200, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: 'var(--primary-bright)'
              }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{t('step1Title')}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{t('step1Desc')}</p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(24, 200, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: 'var(--primary-bright)'
              }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{t('step2Title')}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{t('step2Desc')}</p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(24, 200, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: 'var(--primary-bright)'
              }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{t('step3Title')}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{t('step3Desc')}</p>
            </div>

            {/* Card 4 */}
            <div className="card">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(24, 200, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: 'var(--primary-bright)'
              }}>
                <FileCheck2 size={24} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{t('step4Title')}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{t('step4Desc')}</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          TRUST & EXPLAINABILITY PIPELINE
          ========================================================================= */}
      <section className="section">
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
            <h2 style={{ marginBottom: '14px' }}>{t('trustPipelineTitle')}</h2>
            <p style={{ fontSize: '16px' }}>{t('trustPipelineSubtitle')}</p>
          </div>

          {/* Interactive Pipeline Diagram */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 32px',
            position: 'relative'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '20px',
              position: 'relative',
              zIndex: 2
            }}>
              
              {[
                { title: t('trustNodeProfile'), desc: 'Normalized inputs', icon: Compass },
                { title: t('trustNodeRules'), desc: 'Hard conditions', icon: Cpu },
                { title: t('trustNodeSchemes'), desc: 'Verified ministries', icon: Building2 },
                { title: t('trustNodeRanking'), desc: 'Weighted score', icon: TrendingUp },
                { title: t('trustNodeExplanation'), desc: 'Clear why-reasons', icon: Award }
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-bright)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px 16px',
                      textAlign: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(24, 200, 255, 0.15)',
                      color: 'var(--primary-bright)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px auto'
                    }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {node.title}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {node.desc}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FEATURED VERIFIED SCHEMES SECTION
          ========================================================================= */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '32px' }}>
            <div>
              <h2 style={{ marginBottom: '8px' }}>Verified Government Schemes</h2>
              <p style={{ fontSize: '15px' }}>Explore central and state welfare programs with structured eligibility rules.</p>
            </div>

            <button
              onClick={() => setActivePage('dashboard')}
              className="btn btn-secondary btn-sm"
            >
              <span>Explore All Schemes</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Category Filter Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'var(--primary-gradient)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#030A12' : 'var(--text-secondary)',
                  border: '1px solid ' + (activeCategory === cat ? 'transparent' : 'var(--border-subtle)'),
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat === 'All' ? (t('catAll') || 'All') : localizeCategory(cat, language)}
              </button>
            ))}
          </div>

          {/* Schemes Grid */}
          <div className="grid-3">
            {filteredSchemes.slice(0, 6).map((rawScheme) => {
              const scheme = localizeScheme(rawScheme, language);
              return (
                <div
                  key={scheme.id}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                      <span className="badge badge-cyan" style={{ fontSize: '11px' }}>
                        {localizeCategory(scheme.category, language)}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {t('verifiedBadge')}: {scheme.last_verified_at}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>
                      {scheme.name}
                    </h3>

                    <p style={{ fontSize: '13px', lineHeight: 1.5, marginBottom: '16px', color: 'var(--text-secondary)' }}>
                      {scheme.summary}
                    </p>
                  </div>

                  <div>
                    {scheme.max_benefit && (
                      <div style={{
                        background: 'rgba(3, 10, 18, 0.5)',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '16px',
                        fontSize: '12px'
                      }}>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>
                          {t('maxBenefitLabel')}
                        </span>
                        <span style={{ fontWeight: 700, color: 'var(--primary-bright)' }}>
                          {scheme.max_benefit}
                        </span>
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => {
                          setSelectedSchemeId(scheme.id);
                          setActivePage('detail');
                        }}
                        className="btn btn-secondary btn-sm"
                        style={{ flex: 1 }}
                      >
                        {t('viewDetails')}
                      </button>

                      {scheme.source_url && (
                        <a
                          href={scheme.source_url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline btn-sm"
                          title="Official Ministry Guidelines"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
