import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { localizeCaseStudy } from '../translations/schemeTranslations';
import {
  Award,
  TrendingUp,
  MapPin,
  Quote,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Building2,
  Cpu,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const CASE_STUDIES = [
  {
    id: "cs-01",
    tag: "Micro-Enterprise • Women Entrepreneurship",
    title: "Eco-Packaging & Areca Leaf Products",
    beneficiary: "Sunita Roy",
    location: "Nadia, West Bengal",
    scheme: "Prime Minister's Employment Generation Programme (PMEGP)",
    featured: true,
    problem: "Unemployed with ₹0 capital; unable to secure traditional commercial bank credit without upfront collateral.",
    solution: "Personalized matching identified PMEGP with a 35% non-repayable margin money subsidy for rural special category entrepreneurs.",
    result: "Secured ₹5.25 Lakh subsidy, established a sustainable unit, and employs 12 rural women generating ₹4.8 Lakh monthly revenue.",
    quote: "PMEGP gave me the seed capital to start my eco-packaging unit. The 35% margin money subsidy locked in effortlessly through KVIC.",
    badgeText: "35% Rural Subsidy Unlocked"
  },
  {
    id: "cs-02",
    tag: "MSME Expansion • Collateral-Free Credit",
    title: "Precision Auto Components Workshop",
    beneficiary: "Ramesh Patel",
    location: "Ahmedabad, Gujarat",
    scheme: "PM MUDRA Yojana (Kishore Category)",
    featured: false,
    problem: "Restricted to single manual lathe; lacked collateral to fund ₹4.5 Lakh CNC precision machinery upgrade.",
    solution: "Algorithm matched profile against MUDRA Kishore institutional tier for existing micro-enterprises needing expansion capital.",
    result: "Disbursed in 10 days collateral-free @ 9.5% interest; workshop revenue tripled to ₹3.8 Lakh per month.",
    quote: "MUDRA Kishore didn't demand land mortgage. Within 10 days of applying on Udyamimitra, my bank sanctioned the machine loan.",
    badgeText: "₹4.5L Collateral-Free Disbursal"
  },
  {
    id: "cs-03",
    tag: "Traditional Artisan • Toolkit & Subsidized Credit",
    title: "Heritage Wooden Toys & Woodcraft",
    beneficiary: "Mohan Lal",
    location: "Varanasi, Uttar Pradesh",
    scheme: "PM Vishwakarma Scheme",
    featured: false,
    problem: "Hand-tool productivity bottleneck and lack of working capital ahead of peak festive retail seasons.",
    solution: "Instant rule verification unlocked PM Vishwakarma digital toolkit grant plus collateral-free enterprise loan @ 5% interest.",
    result: "Received ₹15,00,0 digital toolkit e-voucher & ₹1 Lakh working capital, boosting craft output by 3x.",
    quote: "The ₹15,000 modern toolkit e-voucher arrived via SMS. The 5% subsidized loan helped me stock premium raw wood with ease.",
    badgeText: "₹15,000 Toolkit + 5% Subsidized Loan"
  }
];

export const SuccessStories = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="case-studies-section" style={{ marginTop: '24px', position: 'relative' }}>
      
      {/* Section Header with Visual Storytelling */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--primary-orange-light)',
            color: '#C27000',
            borderRadius: 'var(--radius-pill)',
            padding: '4px 12px',
            fontSize: '11px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '8px'
          }}>
            <Sparkles size={13} />
            <span>{t('realImpactStories') || "Real Impact Stories"}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(20px, 3.5vw, 24px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1.25,
            marginBottom: '6px',
            fontFamily: 'var(--font-display)'
          }}>
            {t('caseStudiesHeading') || "Real Problems. Clearer Paths."}
          </h2>

          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            {t('caseStudiesSub') || "See how personalized discovery and transparent eligibility matching simplify the process of finding government support."}
          </p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          padding: '6px 14px',
          borderRadius: 'var(--radius-pill)',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--primary-navy)'
        }}>
          <Award size={15} color="var(--primary-orange)" />
          <span>{lang === 'hi' ? 'सत्यापित लाभार्थी' : (lang === 'bn' ? 'যাচাইকৃত সুবিধাভোগী' : 'Verified Beneficiaries')}</span>
        </div>
      </div>

      {/* Case Studies Visual Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
        gap: '20px'
      }}>
        {CASE_STUDIES.map((rawCs) => {
          const cs = localizeCaseStudy(rawCs, lang);
          return (
            <div
              key={cs.id}
              className="card case-study-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Subtle Decorative Gradient Edge */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: cs.featured
                  ? 'linear-gradient(90deg, var(--primary-orange), #FFA530)'
                  : 'linear-gradient(90deg, var(--primary-navy), var(--palette-sand))'
              }} />

              <div>
                {/* Tag & Top Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--primary-navy)',
                    background: 'var(--primary-navy-light)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-pill)',
                    maxWidth: '80%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {cs.tag}
                  </span>

                  <span style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    {lang === 'hi' ? 'केस स्टडी ↗' : (lang === 'bn' ? 'কেস স্টাডি ↗' : 'CASE STUDY ↗')}
                  </span>
                </div>

                {/* Case Study Title & Beneficiary */}
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.3,
                  marginBottom: '4px'
                }}>
                  {cs.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginBottom: '14px'
                }}>
                  <span style={{ fontWeight: 700, color: 'var(--primary-navy)' }}>{cs.beneficiary}</span>
                  <span>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)' }}>
                    <MapPin size={12} color="var(--primary-navy)" />
                    <span>{cs.location}</span>
                  </div>
                </div>

                {/* Scheme Capsule */}
                <div style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px 12px',
                  marginBottom: '14px',
                  fontSize: '12px'
                }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {lang === 'hi' ? 'मिलान योजना:' : (lang === 'bn' ? 'উপযুক্ত স্কিম:' : 'Matched Scheme:')}
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-navy)', lineHeight: 1.3 }}>
                    {cs.scheme}
                  </div>
                </div>

                {/* Problem vs Result Breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
                  
                  {/* Problem */}
                  <div style={{
                    background: 'var(--danger-bg)',
                    border: '1px solid rgba(220, 38, 38, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--danger)', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>
                      <AlertCircle size={12} />
                      <span>{lang === 'hi' ? 'शुरुआती समस्या' : (lang === 'bn' ? 'প্রাথমিক সমস্যা' : 'The Challenge')}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-main)', margin: 0, lineHeight: 1.4 }}>
                      {cs.problem}
                    </p>
                  </div>

                  {/* Result */}
                  <div style={{
                    background: 'var(--success-bg)',
                    border: '1px solid rgba(21, 128, 61, 0.18)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--success)', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>
                      <CheckCircle2 size={12} />
                      <span>{lang === 'hi' ? 'सत्यापित परिणाम' : (lang === 'bn' ? 'যাচাইকৃত ফলাফল' : 'The Outcome')}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-main)', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                      {cs.result}
                    </p>
                  </div>

                </div>

                {/* Direct Quote Preview */}
                <div style={{
                  borderLeft: '3px solid var(--primary-orange)',
                  paddingLeft: '10px',
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                  marginBottom: '16px'
                }}>
                  "{cs.quote}"
                </div>
              </div>

              {/* Card Footer CTA */}
              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'var(--primary-navy)'
                }}>
                  {cs.badgeText}
                </span>

                <button
                  onClick={() => alert(`Case Study: ${cs.title}\n\nBeneficiary: ${cs.beneficiary} (${cs.location})\nScheme: ${cs.scheme}\n\nProblem:\n${cs.problem}\n\nSolution:\n${cs.solution}\n\nImpact:\n${cs.result}`)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--primary-orange)',
                    fontWeight: 700,
                    fontSize: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    padding: '4px 6px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <span>{lang === 'hi' ? 'केस स्टडी देखें' : (lang === 'bn' ? 'কেস স্টাডি দেখুন' : 'Explore Case Study')}</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
