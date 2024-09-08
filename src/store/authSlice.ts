import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store"; // Adjust the import path as needed

// Define the shape of the state
interface AuthState {
  user: string | null; // Adjust the type based on the user object structure
  token: string | null;
}

// Define the initial state using the AuthState type
const initialState: AuthState = {
  user: null,
  token: null,
};

// Define the payload types for actions
interface SetCredentialsPayload {
  user?: string; // Adjust based on user object structure
  accessToken: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SetCredentialsPayload>) => {
      const { user, accessToken } = action.payload;
      state.user = user || state.user;
      state.token = accessToken;
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
