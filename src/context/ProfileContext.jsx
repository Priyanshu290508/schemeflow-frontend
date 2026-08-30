import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const ProfileContext = createContext();

const DEFAULT_PROFILE = {
  age: 28,
  gender: 'Female',
  state: 'West Bengal',
  district: 'Kolkata',
  annual_income: 250000,
  employment_status: 'Self-employed',
  business_type: 'Dairy & Animal Husbandry',
  business_status: 'New / Proposed',
  business_size: 'Micro',
  investment_required: 300000,
  loan_required: 200000,
  category: 'General',
  is_differently_abled: false
};

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('schemeflow_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return DEFAULT_PROFILE;
  });

  const [savedSchemeIds, setSavedSchemeIds] = useState(() => {
    const saved = localStorage.getItem('schemeflow_saved_schemes');
    return saved ? JSON.parse(saved) : ['pmegp_001', 'nlm_dairy_poultry_008'];
  });

  const [checkedDocuments, setCheckedDocuments] = useState(() => {
    const saved = localStorage.getItem('schemeflow_checked_docs');
    return saved ? JSON.parse(saved) : {
      'pmegp_001': ['Aadhaar Card', 'Bank Account Details & Cancelled Cheque'],
      'nlm_dairy_poultry_008': ['Land Ownership / 15-Year Registered Lease Deed']
    };
  });

  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);

  useEffect(() => {
    localStorage.setItem('schemeflow_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('schemeflow_saved_schemes', JSON.stringify(savedSchemeIds));
  }, [savedSchemeIds]);

  useEffect(() => {
    localStorage.setItem('schemeflow_checked_docs', JSON.stringify(checkedDocuments));
  }, [checkedDocuments]);

  // Fetch recommendations for active profile
  const refreshRecommendations = async (profileToUse = profile) => {
    setLoadingRecommendations(true);
    try {
      const data = await api.getRecommendations(profileToUse);
      setRecommendations(data);
      return data;
    } catch (err) {
      console.error('Failed to get recommendations:', err);
      return [];
    } finally {
      setLoadingRecommendations(false);
    }
  };

  const updateProfile = (newValues) => {
    setProfile(prev => ({ ...prev, ...newValues }));
  };

  const toggleSaveScheme = (schemeId) => {
    setSavedSchemeIds(prev => {
      if (prev.includes(schemeId)) {
        return prev.filter(id => id !== schemeId);
      } else {
        return [...prev, schemeId];
      }
    });
  };

  const toggleDocumentCheck = (schemeId, docName) => {
    setCheckedDocuments(prev => {
      const currentList = prev[schemeId] || [];
      const updated = currentList.includes(docName)
        ? currentList.filter(d => d !== docName)
        : [...currentList, docName];
      return { ...prev, [schemeId]: updated };
    });
  };

  return (
    <ProfileContext.Provider value={{
      profile,
      updateProfile,
      savedSchemeIds,
      toggleSaveScheme,
      checkedDocuments,
      toggleDocumentCheck,
      recommendations,
      loadingRecommendations,
      refreshRecommendations
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
