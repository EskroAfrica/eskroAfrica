import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store"; 

// Define the shape of the state
interface AuthState {
  user: string | null; 
  token: string | null;
  refreshToken: string|null
}

// Define the initial state using the AuthState type
const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
};

// Define the payload types for actions
export interface SetCredentialsPayload {
  user?: string; 
  accessToken: string;
  refreshToken: string
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    setCredentials: (state, action: PayloadAction<SetCredentialsPayload>) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user || state.user;
      state.token = accessToken;
      state.refreshToken = refreshToken;

       // Save tokens to localStorage
       try {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      } catch (error) {
        console.error('Error saving tokens to localStorage:', error);
      }
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

// Selector types
export const selectCurrentUser = (state: RootState): string | null => state.auth.user;
export const selectCurrentToken = (state: RootState): string | null => state.auth.token;
export const selectRefreshToken = (state:RootState): string| null => state.auth.refreshToken;