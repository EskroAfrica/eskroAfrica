import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../store/authSlice";
import { RootState } from "../store/store"; // Adjust the path accordingly

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:44350/api/v1/', // This is the backend URL
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
            // headers.set("Content-Type", `application/json`);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args:any, api:any, extraOptions:any) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // Send refresh token to get a new access token
        const refreshResult = await baseQuery('/Auth/GetRefreshToken', api, extraOptions); // Refresh endpoint

        if (refreshResult.data && refreshResult.data) {
            const newToken = (refreshResult.data as { token: string }).token;
            const user = (api.getState() as RootState).auth.user;
            // Store the new token
            api.dispatch(setCredentials({ accessToken: newToken, user: user ?? undefined}));
            // Retry the original query with the new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Dispatch logOut action if refresh fails
            api.dispatch(logOut());
            console.log("You've been logged out");
        }
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        // Define your endpoints here
    }),
});
