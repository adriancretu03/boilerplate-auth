import { apiSlice } from "../services/apiSlice";

interface User {
    first_name: string;
    last_name: string;
    email: string;
}

interface SocialAuthArgs {
    provider: string;
    state: string;
    code: string;
}

interface CreateUserResponse {
    success: boolean;
    user: User;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => "/users/me/",
    }),
    socialAuthenticate: builder.mutation<CreateUserResponse, SocialAuthArgs>({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}-oauth2/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    login: builder.mutation({
        query: ({email, password}) => ({
            url: '/jwt/create/',
            method: 'POST',
            body: {email, password}
        })
    }),
    register: builder.mutation({
        query: ({first_name, last_name, email, password, re_password}) => ({
            url: '/jwt/create/',
            method: 'POST',
            body: {first_name, last_name, email, password, re_password}
        })
    }),
    verify: builder.mutation({
        query: () => ({
            url: '/jwt/verify/',
            method: 'POST',

        })
    }),
    logout: builder.mutation({
        query: () => ({
            url: '/logout/',
            method: 'POST',
        })
    }),
    activation: builder.mutation({
        query: ({uid, token}) => ({
            url: '/user/activation/',
            method: 'POST',
            body: { uid, token},
        })
    }),
    resetPassword: builder.mutation({
        query: (email) => ({
            url: '/user/reset-password/',
            method: 'POST',
            body: { email },
        })
    }),
    resetPassword: builder.mutation({
        query: ({
            uid, token, new_password, re_new_password
        }) => ({
            url: '/user/reset-password-confirm/',
            method: 'POST',
            body: { uid, token, new_password, re_new_password },
        })
    })
  }),
});

export const { useRetrieveUserQuery, useSocialAuthenticateMutation, useLoginMutation, useRegisterMutation, useVerifyMutation, useLogoutMutation, , useResetPasswordConfirmMutation } =
  authApiSlice;