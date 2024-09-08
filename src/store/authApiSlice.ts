import { apiSlice } from './apiSlice';
import { setCredentials, logOut } from './authSlice';

interface Credentials {
  username: string;
  password: string;
}

interface SignupPayload {
  username: string;
  password: string;
  email: string;
}

interface RefreshTokenResponse {
  accessToken: string;
}

interface UserResponse {
  fullName: string;
}

// Extend the API service with authentication endpoints
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, Credentials>({
      query: (credentials) => ({
        url: '/Auth/Login',
        method: 'POST',
        body: credentials,
      }),
    }),

    signup: builder.mutation<void, SignupPayload>({
      query: (signupData) => ({
        url: '/Auth/Signup',
        method: 'POST',
        body: signupData,
      }),
    }),

    refresh: builder.mutation<RefreshTokenResponse, void>({
      query: () => ({
        url: '/Auth/GetRefreshToken',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ accessToken: data.accessToken }));
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      },
    }),


    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/Auth/Logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
        } catch (error) {
          console.error('Error logging out:', error);
        }
      },
    }),

  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useRefreshMutation,
  useLogoutMutation,
} = authApiSlice;
