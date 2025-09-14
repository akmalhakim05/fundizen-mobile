// src/services/apiService.ts

const API_BASE_URL = 'http://localhost:8080/api';

export const apiService = {
  // Authentication APIs
  registerUser: async (token: string, userData: { username: string; email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, user: userData }),
    });
    return response.json();
  },

  loginUser: async (token: string, usernameOrEmail: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, usernameOrEmail, password }),
    });
    return response.json();
  },

  legacyRegister: async (username: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/legacy/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    return response.json();
  },

  legacyLogin: async (usernameOrEmail: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/legacy/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usernameOrEmail, password }),
    });
    return response.json();
  },

  verifyToken: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/verify-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    return response.json();
  },

  checkVerification: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/check-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    return response.json();
  },

  resendVerification: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    return response.json();
  },

  // Campaign APIs
  getAllCampaigns: async () => {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  getActiveCampaigns: async () => {
    const response = await fetch(`${API_BASE_URL}/campaigns/active`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  getPendingCampaigns: async () => {
    const response = await fetch(`${API_BASE_URL}/campaigns/pending`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  getCampaignById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  getCampaignsByCategory: async (category: string) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/category/${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  createCampaign: async (campaignData: {
    creatorId: string;
    name: string;
    category: string;
    description: string;
    imageUrl?: string;
    documentUrl?: string;
    goalAmount: number;
    startDate: string;
    endDate: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    });
    return response.json();
  },

  updateCampaign: async (id: string, campaignData: any) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    });
    return response.json();
  },

  deleteCampaign: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  // Admin functions
  verifyCampaign: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/verify/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  rejectCampaign: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/campaigns/reject/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },
};