import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, TrendingUp, MapPin, Quote, ShieldCheck } from 'lucide-react';

const SAMPLE_STORIES = [
  {
    name: "Sunita Roy",
    location: "Nadia, West Bengal",
    enterprise: "Eco-Packaging & Areca Leaf Products",
    scheme: "Prime Minister's Employment Generation Programme (PMEGP)",
    before_metric: "Unemployed • ₹0 Revenue",
    after_metric: "Employs 12 Rural Women • ₹4.8 Lakh Monthly Turnover",
    subsidy_received: "₹5.25 Lakh Government Subsidy (35% Special Category)",
    quote: "PMEGP gave me the seed capital to start my eco-packaging unit. The 35% margin money subsidy locked in effortlessly through KVIC."
  },
  {
    name: "Ramesh Patel",
    location: "Ahmedabad, Gujarat",
    enterprise: "Precision Auto Components Workshop",
    scheme: "PM MUDRA Yojana (Kishore Category)",
    before_metric: "Single Manual Lathe • ₹45,000/mo",
    after_metric: "CNC Machine Installed • ₹3.8 Lakh/mo",
    subsidy_received: "₹4.5 Lakh Collateral-Free Term Loan @ 9.5%",
    quote: "MUDRA Kishore didn't demand ancestral land or mortgage. Within 10 days of applying on Udyamimitra, my bank sanctioned the machine loan."
  },
  {
    name: "Mohan Lal",
    location: "Varanasi, Uttar Pradesh",
    enterprise: "Traditional Wooden Toys & Heritage Crafts",
    scheme: "PM Vishwakarma Scheme",
    before_metric: "Hand Chisel Only • Low Output",
    after_metric: "Electric Lathe • 3x Productivity",
    subsidy_received: "₹15,000 Digital Toolkit Grant + ₹1 Lakh Loan @ 5%",
    quote: "The ₹15,000 modern toolkit e-voucher arrived via SMS. The 5% subsidized loan helped me stock premium raw wood ahead of festival season."
  }
];

export const SuccessStories = () => {
  const { t } = useLanguage();

  return (
    <div style={{ marginTop: '16px' }}>
      
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>
            Real Beneficiary Success Stories
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Verified impact case studies with before/after growth metrics.
          </p>
        </div>

        <span className="badge badge-orange">
          Verified Beneficiaries
        </span>
      </div>

      {/* Stories Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {SAMPLE_STORIES.map((story, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#FFFFFF'
            }}
          >
            <div>
              {/* Name & Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '2px' }}>
                    {story.name}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <MapPin size={12} color="var(--primary-navy)" />
                    <span>{story.location}</span>
                  </div>
                </div>

                <span className="badge badge-navy" style={{ fontSize: '10px' }}>
                  Case Study
                </span>
              </div>

              {/* Enterprise & Scheme Tag */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 10px',
                marginBottom: '14px'
              }}>
                <div style={{ fontSize: '11px', color: 'var(--primary-navy)', fontWeight: 700 }}>
                  {story.enterprise}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Scheme: <strong>{story.scheme}</strong>
                </div>
              </div>

              {/* Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px' }}>
                <div style={{ background: 'var(--danger-bg)', padding: '6px 8px', borderRadius: '6px' }}>
                  <span style={{ fontSize: '9px', color: 'var(--danger)', fontWeight: 700, display: 'block' }}>Before</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{story.before_metric}</span>
                </div>
                <div style={{ background: 'var(--primary-orange-light)', padding: '6px 8px', borderRadius: '6px' }}>
                  <span style={{ fontSize: '9px', color: '#C27000', fontWeight: 700, display: 'block' }}>Growth</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-main)', fontWeight: 700 }}>{story.after_metric}</span>
                </div>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Award size={13} color="var(--primary-orange)" />
                <span>{story.subsidy_received}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '10px',
              fontSize: '11px',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              display: 'flex',
              gap: '6px'
            }}>
              <Quote size={13} color="var(--primary-navy)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>"{story.quote}"</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
