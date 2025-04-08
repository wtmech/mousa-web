import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    username: true,
  },
  userAttributes: {
    // Add any additional user attributes here
    givenName: {
      required: false,
      mutable: true,
    },
    familyName: {
      required: false,
      mutable: true,
    },
  },
  // @ts-ignore - Type definitions are outdated
  userPoolGroups: ['artists', 'listeners', 'admins'],
});