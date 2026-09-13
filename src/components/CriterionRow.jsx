import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { localizeReason } from '../translations/schemeTranslations';
import { CheckCircle2, XCircle, AlertCircle, HelpCircle, FileText } from 'lucide-react';

const CRITERION_LABELS_MAP = {
  hi: {
    "Age Limit": "आयु सीमा पात्रता",
    "Minimum Age": "न्यूनतम आयु पात्रता",
    "Social Category": "सामाजिक श्रेणी पात्रता",
    "Target Sector": "लक्षित उद्यम क्षेत्र",
    "Business Sector": "व्यवसाय क्षेत्र पात्रता",
    "Trade Category": "कारीगर व्यापार श्रेणी",
    "Vending Sector": "वेंडिंग व्यवसाय क्षेत्र",
    "State / Location": "राज्य / भौगोलिक क्षेत्र",
    "Annual Income Ceiling": "वार्षिक आय सीमा",
    "Business Stage": "व्यापार स्थिति (नया / मौजूदा)",
    "Enterprise Stage": "उद्यम स्थिति (नया / प्रस्तावित)",
    "Project Stage": "परियोजना चरण (नया उद्यम)",
    "Farm Category": "फार्म / कृषि श्रेणी पात्रता",
    "Loan Amount Compatibility": "ऋण राशि उपयुक्तता",
    "Loan Amount": "ऋण राशि सीमा",
    "Gender Priority": "महिला उद्यमी प्राथमिकता",
    "Gender Preference": "महिला / विशेष प्राथमिकता"
  },
  bn: {
    "Age Limit": "বয়স সীমা যোগ্যতা",
    "Minimum Age": "ন্যূনতম বয়স যোগ্যতা",
    "Social Category": "সামাজিক শ্রেণী যোগ্যতা",
    "Target Sector": "লক্ষ্যভিত্তিক ব্যবসায়ের ক্ষেত্র",
    "Business Sector": "ব্যবসায়ের খাত যোগ্যতা",
    "Trade Category": "কারিগর পেশার বিভাগ",
    "Vending Sector": "হকার ব্যবসার ক্ষেত্র",
    "State / Location": "রাজ্য / ভৌগোলিক এলাকা",
    "Annual Income Ceiling": "বার্ষিক আয় সীমা",
    "Business Stage": "ব্যবসার পর্যায় (নতুন / বিদ্যমান)",
    "Enterprise Stage": "উদ্যোগের পর্যায়",
    "Project Stage": "প্রকল্পের পর্যায়",
    "Farm Category": "খামার / কৃষি বিভাগ যোগ্যতা",
    "Loan Amount Compatibility": "ঋণের পরিমাণের উপযুক্ততা",
    "Loan Amount": "ঋণের পরিমাণ",
    "Gender Priority": "মহিলা উদ্যোক্তা অগ্রাধিকার",
    "Gender Preference": "মহিলা / বিশেষ অগ্রাধিকার"
  }
};

export const CriterionRow = ({ criterion }) => {
  const { lang, t } = useLanguage();
  const { field, label, status, user_value, required_value, reason, required, source_reference } = criterion;

  let StatusIcon = CheckCircle2;
  let statusBadgeClass = 'badge-success';
  let statusText = t('passText') || 'Pass';
  let iconColor = 'var(--success)';

  if (status === 'FAIL') {
    StatusIcon = XCircle;
    statusBadgeClass = 'badge-danger';
    statusText = required ? (t('mandatoryFailed') || 'Mandatory Failed') : (t('failText') || 'Not Satisfied');
    iconColor = 'var(--danger)';
  } else if (status === 'NEEDS_VERIFICATION') {
    StatusIcon = AlertCircle;
    statusBadgeClass = 'badge-warning';
    statusText = t('needsVerification') || 'Needs Verification';
    iconColor = 'var(--warning)';
  } else if (status === 'MISSING_INFORMATION') {
    StatusIcon = HelpCircle;
    statusBadgeClass = 'badge-neutral';
    statusText = t('missingInfo') || 'Missing Info';
    iconColor = 'var(--text-muted)';
  }

  // Format required value for clean display
  let requiredDisplay = required_value;
  if (Array.isArray(required_value)) {
    requiredDisplay = required_value.join(' / ');
  } else if (typeof required_value === 'object' && required_value !== null) {
    requiredDisplay = JSON.stringify(required_value);
  }

  const localizedLabel = CRITERION_LABELS_MAP[lang]?.[label] || label;
  const localizedReasonText = localizeReason(reason, lang);

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
            {localizedLabel}
          </span>
          {required && (
            <span style={{ fontSize: '11px', color: 'var(--primary-bright)', background: 'rgba(24, 200, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
              {t('mandatory') || "Mandatory"}
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
        background: 'rgba(3, 10, 18, 0.05)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '13px'
      }}>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>
            {t('yourProfile') || "Your Profile:"}
          </span>
          <span style={{ fontWeight: 600, color: user_value !== null && user_value !== undefined ? 'var(--text-main)' : 'var(--warning)' }}>
            {user_value !== null && user_value !== undefined ? String(user_value) : (t('notProvided') || 'Not Provided')}
          </span>
        </div>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>
            {t('schemeRequirement') || "Scheme Requirement:"}
          </span>
          <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
            {requiredDisplay ? String(requiredDisplay) : (t('openApplicable') || 'Open / Applicable')}
          </span>
        </div>
      </div>

      {/* Evaluation Reason */}
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
        {localizedReasonText}
      </p>

      {/* Source Citation */}
      {source_reference && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
          <FileText size={12} color="var(--primary-navy)" />
          <span>{t('officialSource') || "Official Source:"} {source_reference}</span>
        </div>
      )}

    </div>
  );
};
