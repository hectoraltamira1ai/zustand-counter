import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  role: 'basic', // Default role is basic
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, role: 'basic' }), // Reset role to basic on logout
  upgradeToPro: () => set({ role: 'pro' }), // Upgrade to pro
}));

export default useAuthStore;
