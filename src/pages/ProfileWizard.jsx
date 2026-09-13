import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { StagedLoader } from '../components/StagedLoader';
import {
  localizeSector,
  localizeEmployment,
  localizeBusinessStatus,
  localizeSocialCategory
} from '../translations/schemeTranslations';
import {
  User,
  IndianRupee,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Save,
  Info
} from 'lucide-react';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
];

const BUSINESS_SECTORS = [
  "Manufacturing",
  "Service & Hospitality",
  "Retail & Trading",
  "Agriculture & Farming",
  "Dairy & Animal Husbandry",
  "Poultry & Livestock",
  "Food Processing & Bakery",
  "Handicrafts & Traditional Artisan",
  "Traditional Crafts (Vishwakarma)",
  "Garment & Textile",
  "Technology & Innovation",
  "Renewable Energy & Solar",
  "Fisheries & Aquaculture",
  "Other"
];

export const ProfileWizard = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const { profile, updateProfile, refreshRecommendations } = useProfile();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ ...profile });
  const [isProcessing, setIsProcessing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    updateProfile(formData);
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Trigger staged loader then redirect to dashboard
      setIsProcessing(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveProgress = () => {
    updateProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLoaderComplete = async () => {
    await refreshRecommendations(formData);
    setActivePage('dashboard');
  };

  if (isProcessing) {
    return (
      <div className="container" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <StagedLoader onComplete={handleLoaderComplete} />
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(24, 200, 255, 0.1)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            marginBottom: '12px'
          }}>
            <Sparkles size={14} color="var(--primary-bright)" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-bright)', textTransform: 'uppercase' }}>
              {t('progressiveEngine') || "Progressive Eligibility Engine"}
            </span>
          </div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>{t('wizardTitle')}</h1>
          <p style={{ fontSize: '15px' }}>
            {t('wizardSubtitleLong') || "Enter your situation below to run deterministic rule matching across all active government schemes."}
          </p>
        </div>

        {/* Step Indicator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginBottom: '32px'
        }}>
          {[
            { step: 1, title: t('wizardStep1'), icon: User },
            { step: 2, title: t('wizardStep2'), icon: IndianRupee },
            { step: 3, title: t('wizardStep3'), icon: Briefcase },
            { step: 4, title: t('wizardStep4'), icon: CheckCircle2 }
          ].map(item => {
            const Icon = item.icon;
            const isDone = item.step < currentStep;
            const isCurrent = item.step === currentStep;

            return (
              <div
                key={item.step}
                onClick={() => { if (item.step < currentStep) setCurrentStep(item.step); }}
                style={{
                  background: isCurrent ? 'rgba(24, 200, 255, 0.15)' : 'var(--bg-card)',
                  border: '1px solid ' + (isCurrent ? 'var(--border-bright)' : isDone ? 'rgba(53, 211, 154, 0.4)' : 'var(--border-subtle)'),
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 10px',
                  textAlign: 'center',
                  cursor: item.step < currentStep ? 'pointer' : 'default',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                  <Icon size={18} color={isCurrent ? 'var(--primary-bright)' : isDone ? 'var(--success)' : 'var(--text-muted)'} />
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: isCurrent ? 700 : 500,
                  color: isCurrent ? 'var(--primary-bright)' : isDone ? 'var(--text-main)' : 'var(--text-muted)'
                }}>
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Wizard Form Card */}
        <div className="card" style={{ padding: '36px 32px', marginBottom: '24px' }}>
          
          {/* STEP 1: PERSONAL */}
          {currentStep === 1 && (
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={20} color="var(--primary-cyan)" />
                <span>{t('wizardPersonalHeader') || "Personal & Location Attributes"}</span>
              </h3>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">{t('labelAge')} *</label>
                  <input
                    type="number"
                    min="15"
                    max="100"
                    className="form-input"
                    value={formData.age || ''}
                    onChange={(e) => handleChange('age', parseInt(e.target.value) || '')}
                    placeholder="e.g. 28"
                  />
                  <div className="form-helper">{t('ageHelper') || "Most youth schemes apply between 18–45 years."}</div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('labelGender')}</label>
                  <select
                    className="form-select"
                    value={formData.gender || 'Female'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  >
                    <option value="Female">{t('femaleSubsidyHint') || "Female (Eligible for Stand-Up India & Women Subsidies)"}</option>
                    <option value="Male">{t('optionMale') || "Male"}</option>
                    <option value="Other">{t('optionOther') || "Other"}</option>
                  </select>
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">{t('labelState')} *</label>
                  <select
                    className="form-select"
                    value={formData.state || 'West Bengal'}
                    onChange={(e) => handleChange('state', e.target.value)}
                  >
                    {INDIAN_STATES.map((st, i) => (
                      <option key={i} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('labelDistrict')}</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.district || ''}
                    onChange={(e) => handleChange('district', e.target.value)}
                    placeholder="e.g. Kolkata, Nadia, Pune"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t('labelCategory')}</label>
                <select
                  className="form-select"
                  value={formData.category || 'General'}
                  onChange={(e) => handleChange('category', e.target.value)}
                >
                  <option value="General">{localizeSocialCategory('General', lang)}</option>
                  <option value="OBC">{localizeSocialCategory('OBC', lang)}</option>
                  <option value="SC">{localizeSocialCategory('SC', lang)}</option>
                  <option value="ST">{localizeSocialCategory('ST', lang)}</option>
                  <option value="Minority">{localizeSocialCategory('Minority', lang)}</option>
                </select>
                <div className="form-helper">{t('categoryHelper') || "Special categories receive higher subsidy rates (up to 35% under PMEGP)."}</div>
              </div>
            </div>
          )}

          {/* STEP 2: FINANCIAL */}
          {currentStep === 2 && (
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IndianRupee size={20} color="var(--primary-cyan)" />
                <span>{t('wizardFinancialHeader') || "Financial & Employment Situation"}</span>
              </h3>

              <div className="form-group">
                <label className="form-label">{t('labelIncome')} *</label>
                <input
                  type="number"
                  step="10000"
                  className="form-input"
                  value={formData.annual_income || ''}
                  onChange={(e) => handleChange('annual_income', parseFloat(e.target.value) || '')}
                  placeholder="e.g. 250000"
                />
                <div className="form-helper">{t('incomeHelper') || "Enter total annual household income in Rupees (e.g. ₹2,50,000)."}</div>
              </div>

              <div className="form-group">
                <label className="form-label">{t('labelEmployment')}</label>
                <select
                  className="form-select"
                  value={formData.employment_status || 'Self-employed'}
                  onChange={(e) => handleChange('employment_status', e.target.value)}
                >
                  <option value="Self-employed">{localizeEmployment('Self-employed', lang)}</option>
                  <option value="Unemployed">{localizeEmployment('Unemployed', lang)}</option>
                  <option value="Farmer">{localizeEmployment('Farmer', lang)}</option>
                  <option value="Business Owner">{localizeEmployment('Business Owner', lang)}</option>
                  <option value="Student">{localizeEmployment('Student', lang)}</option>
                  <option value="Salaried">{localizeEmployment('Salaried', lang)}</option>
                </select>
              </div>

              <div style={{
                background: 'rgba(24, 200, 255, 0.06)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '20px'
              }}>
                <Info size={20} color="var(--primary-cyan)" />
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {t('incomeInfoBanner') || "Income thresholds are only checked for schemes requiring income caps (e.g., specific subsidies and welfare DBT)."}
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: ENTERPRISE & GOALS */}
          {currentStep === 3 && (
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={20} color="var(--primary-cyan)" />
                <span>{t('wizardEnterpriseHeader') || "Enterprise & Financial Requirement"}</span>
              </h3>

              <div className="form-group">
                <label className="form-label">{t('labelBusinessType')} *</label>
                <select
                  className="form-select"
                  value={formData.business_type || 'Manufacturing'}
                  onChange={(e) => handleChange('business_type', e.target.value)}
                >
                  {BUSINESS_SECTORS.map((sec, i) => (
                    <option key={i} value={sec}>{localizeSector(sec, lang)}</option>
                  ))}
                </select>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">{t('labelBusinessStatus')}</label>
                  <select
                    className="form-select"
                    value={formData.business_status || 'New / Proposed'}
                    onChange={(e) => handleChange('business_status', e.target.value)}
                  >
                    <option value="New / Proposed">{localizeBusinessStatus('New / Proposed', lang)}</option>
                    <option value="Existing">{localizeBusinessStatus('Existing', lang)}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('labelLoanReq')} *</label>
                  <input
                    type="number"
                    step="10000"
                    className="form-input"
                    value={formData.loan_required || ''}
                    onChange={(e) => handleChange('loan_required', parseFloat(e.target.value) || '')}
                    placeholder="e.g. 200000"
                  />
                  <div className="form-helper">{t('loanHelper') || "Desired loan or funding support amount."}</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {currentStep === 4 && (
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="var(--success)" />
                <span>{t('wizardReviewHeader') || "Profile Review & Evaluation Summary"}</span>
              </h3>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('reviewAgeGender') || "Age & Gender"}</span>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formData.age} {t('yrs')} • {formData.gender === 'Female' ? t('optionFemale') : formData.gender === 'Male' ? t('optionMale') : formData.gender}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('reviewLocation') || "Location"}</span>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formData.district ? `${formData.district}, ` : ''}{formData.state}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('reviewIncome') || "Household Income"}</span>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>₹{Number(formData.annual_income || 0).toLocaleString('en-IN')}/{t('yr')}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('reviewSector') || "Business Sector"}</span>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{localizeSector(formData.business_type, lang)}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('reviewStage') || "Stage"}</span>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{localizeBusinessStatus(formData.business_status, lang)}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('reviewLoan') || "Target Loan Amount"}</span>
                  <div style={{ fontWeight: 600, color: 'var(--primary-bright)' }}>₹{Number(formData.loan_required || 0).toLocaleString('en-IN')}</div>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {t('reviewDisclaimer') || "Clicking Find Matching Schemes will execute the deterministic rule engine to check age limits, sector guidelines, state coverage, and financial eligibility."}
              </p>
            </div>
          )}

          {/* Navigation Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px'
          }}>
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline"
                >
                  <ArrowLeft size={16} />
                  <span>{t('btnBack')}</span>
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={handleSaveProgress}
                className="btn btn-secondary btn-sm"
                title="Save profile progress"
              >
                <Save size={15} />
                <span>{saveSuccess ? (t('savedSuccess') || 'Saved!') : t('btnSaveProfile')}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
              >
                <span>{currentStep === 4 ? t('btnFindMatches') : t('btnNext')}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
