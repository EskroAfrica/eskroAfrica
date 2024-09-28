import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store/store"; 

interface UserDetailsState {
  email: string | null;
}

const initialState: UserDetailsState = {
  email: null,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
  },
});

export const { setUserDetails} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;

export const selectCurrentUser = (state: RootState): string | null => state.userDetails.email;
