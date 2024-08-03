// store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  currentAudio: null,
  transcription: [],
  keywords: {},
  recommender: [],
  setCurrentAudio: (audio) => set({ currentAudio: audio }),
  addTranscription: (text) => set((state) => ({ transcription: [...state.transcription, text] })),
  setKeywords: (keywords) => set({ keywords }),
  setRecommender: (recommender) => set({ recommender }),
  reset: () => set({ transcription: [], keywords: {}, recommender: [] }),
}));

export default useStore;
