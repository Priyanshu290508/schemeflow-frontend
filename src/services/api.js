// SchemeFlow API Client Service
// Automatically adapts between localhost, local network Wi-Fi (phone access), and production
const getApiBase = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.') || host.startsWith('10.') || host.startsWith('172.')) {
      return `http://${host}:8000/api`;
    }
  }
  return '/api';
};

const API_BASE = getApiBase();


export const api = {
  // Get all schemes or filtered list
  async getSchemes(params = {}) {
    const query = new URLSearchParams();
    if (params.category) query.append('category', params.category);
    if (params.state) query.append('state', params.state);
    if (params.q) query.append('q', params.q);

    const res = await fetch(`${API_BASE}/schemes?${query.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch schemes');
    return res.json();
  },

  // Get single scheme detail
  async getScheme(id) {
    const res = await fetch(`${API_BASE}/schemes/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch scheme ${id}`);
    return res.json();
  },

  // Evaluate profile and return ranked recommendations
  async getRecommendations(profile) {
    const res = await fetch(`${API_BASE}/recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
    if (!res.ok) throw new Error('Failed to fetch recommendations');
    return res.json();
  },

  // Evaluate single scheme against profile
  async evaluateSingleScheme(schemeId, profile) {
    const res = await fetch(`${API_BASE}/recommendations/evaluate/${schemeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
    if (!res.ok) throw new Error('Failed to evaluate scheme');
    return res.json();
  },

  // Assistant conversational message endpoint
  async sendAssistantMessage(message, currentProfile) {
    const res = await fetch(`${API_BASE}/assistant/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        current_profile: currentProfile
      })
    });
    if (!res.ok) throw new Error('Failed to send assistant message');
    return res.json();
  },

  // Save profile to backend
  async saveProfile(profile) {
    const res = await fetch(`${API_BASE}/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
    if (!res.ok) throw new Error('Failed to save profile');
    return res.json();
  },

  // Application status tracker endpoint
  async getApplicationStatus(trackingId) {
    const res = await fetch(`${API_BASE}/tracker/${encodeURIComponent(trackingId)}`);
    if (!res.ok) throw new Error('Failed to fetch application status');
    return res.json();
  }
};
