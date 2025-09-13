import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/Firebase';

export const authService = {
  login: async (email: string, password: string) => {
    return await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  },

  register: async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
  },

  logout: async () => {
    return await signOut(FIREBASE_AUTH);
  },

  getCurrentUser: () => {
    return FIREBASE_AUTH.currentUser;
  },
};