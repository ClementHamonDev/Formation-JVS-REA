import { createSlice } from '@reduxjs/toolkit';

// État initial du profil
const initialState = {
  name: '',
  email: '',
  bio: '',
};

// Création du slice
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Action pour mettre à jour le nom
    updateName: (state, action) => {
      state.name = action.payload;
    },
    // Action pour mettre à jour l'email
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    // Action pour mettre à jour la bio
    updateBio: (state, action) => {
      state.bio = action.payload;
    },
    // Action pour réinitialiser le profil
    resetProfile: (state) => {
      state.name = '';
      state.email = '';
      state.bio = '';
    },
  },
});

// Export des actions générées par createSlice
export const { updateName, updateEmail, updateBio, resetProfile } = profileSlice.actions;

// Export du reducer pour l'ajouter au store
export default profileSlice;
