import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Campaign } from '../types';

export const campaignService = {
  createCampaign: async (campaignData: Omit<Campaign, 'id'>) => {
    return await addDoc(collection(db, 'campaigns'), campaignData);
  },

  getAllCampaigns: async (): Promise<Campaign[]> => {
    const querySnapshot = await getDocs(collection(db, 'campaigns'));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Campaign[];
  },

  getUserCampaigns: async (userId: string): Promise<Campaign[]> => {
    const q = query(collection(db, 'campaigns'), where('createdBy', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    })) as Campaign[];
  },
};