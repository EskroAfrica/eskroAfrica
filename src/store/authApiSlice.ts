import { apiSlice } from './apiSlice';
import { setCredentials, logOut } from './authSlice';

interface Credentials {
  username: string;
  password: string;
}

interface SignupPayload {
  email: string;
  isSeller: boolean;
}

interface CreatePasswordPayload {
  userId: string; 
  code: string; 
  password: string; 
  confirmPassword: string
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
        url: '/users',
        method: 'POST',
        body: signupData,
      }),
    }),

    createPassword : builder.mutation<void, CreatePasswordPayload> ({
      query: (createPasswordData) => ({
        url: '/users/email/confirm',
        method: 'POST',
        body: createPasswordData,
      })
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
  useLogoutMutation,
  useCreatePasswordMutation,
} = authApiSlice;
