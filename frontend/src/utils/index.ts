import continueWithSocialAuth from "./continue-with-social-auth";

export const continueWithGoogle = () =>
  continueWithSocialAuth("google-oauth2", "google");
export const continueWithFacebook = () =>
  continueWithSocialAuth("facebook", "facebook");
export const continueWithGithub = () =>
  continueWithSocialAuth("github", "github");
