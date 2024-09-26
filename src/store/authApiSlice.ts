import { identityApiSlice } from './apiSlice';
import { setCredentials, logOut } from './authSlice';

export interface Credentials {
  grant_type: string;
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string, 
  expires_in: number, 
  token_type: string, 
  refresh_token: string, 
  scope: string
}

interface SignupPayload {
  email: string;
  isSeller: boolean;
}

interface CreatePasswordPayload {
  userId: string | undefined; 
  code: string | undefined; 
  password: string; 
  confirmPassword: string
}


// Extend the API service with authentication endpoints
export const authApiSlice = identityApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login : builder.mutation<LoginResponse, Credentials>({
      query: credentials => {
        const formData = new URLSearchParams();
        for (const [key, value] of Object.entries(credentials)) {
          formData.append(key, value);
        }
          return {
            url: 'connect/token',
            method: 'POST',
            body: formData.toString(),
            // Set the correct headers
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
      }
  }),

    signup: builder.mutation<void, SignupPayload>({
      query: (signupData) => ({
        url: 'api/users',
        method: 'POST',
        body: signupData,
      }),
    }),

    createPassword : builder.mutation<void, CreatePasswordPayload> ({
      query: (createPasswordData) => ({
        url: 'api/users/email/confirm',
        method: 'POST',
        body: createPasswordData,
      })
    }),

  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useCreatePasswordMutation,
} = authApiSlice;
