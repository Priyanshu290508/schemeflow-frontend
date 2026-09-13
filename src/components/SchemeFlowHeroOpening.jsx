import React from 'react';
import PathDrawingPortfolioHero from '@/components/ui/path-drawing-portfolio-hero';
import { Sparkles, ArrowRight, ShieldCheck, Compass, FileCheck2, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function SchemeFlowHeroOpening({ setActivePage }) {
  const { t } = useLanguage();

  return (
    <div style={{
      width: '100%',
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      marginBottom: '32px',
      background: 'linear-gradient(135deg, #101c38 0%, #1a2f5e 50%, #0d162a 100%)',
      boxShadow: '0 20px 40px -15px rgba(18, 33, 68, 0.4)',
      border: '1px solid rgba(255, 165, 48, 0.25)',
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 165, 48, 0.18) 0%, rgba(34, 61, 121, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <PathDrawingPortfolioHero
        brand="SCHEMEFLOW"
        eyebrow="National Government Scheme Gateway"
        tagline="Personalized, Explainable Government Scheme Discovery & Eligibility Engine"
        fromColor="#FFA530"
        toColor="#FFD285"
        className="min-h-[460px] pb-12 pt-12"
      >
        {/* Interactive Action Bar inside Hero Opening */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '28px',
          zIndex: 20,
          position: 'relative'
        }}>
          <button
            onClick={() => setActivePage('wizard')}
            className="btn btn-primary btn-lg"
            style={{
              boxShadow: '0 8px 24px rgba(255, 165, 48, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Sparkles size={18} />
            <span>Check My Eligibility</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => setActivePage('assistant')}
            className="btn btn-secondary btn-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              backdropFilter: 'blur(8px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Cpu size={18} />
            <span>Ask AI Assistant</span>
          </button>
        </div>

        {/* Live Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '28px',
          color: 'rgba(255, 255, 255, 0.65)',
          fontSize: '13px',
          zIndex: 20,
          position: 'relative'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} color="#4ade80" /> 100% Official Schemes
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={16} color="#FFA530" /> Instant Match Scoring
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <FileCheck2 size={16} color="#60a5fa" /> Document Checklists
          </span>
        </div>
      </PathDrawingPortfolioHero>
    </div>
  );
}

export default SchemeFlowHeroOpening;
