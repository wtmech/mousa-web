import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  // @ts-ignore - Type definitions are outdated
  bucketName: 'mousa-storage',
  // @ts-ignore - Type definitions are outdated
  permissions: (auth) => ({
    '/uploads/{userId}/{trackId}/*': {
      allow: auth.authenticated().to(['read', 'write']),
    },
    '/artists/{artistId}/{releaseId}/*': {
      allow: [
        auth.authenticated().to(['read']),
        auth.authenticated().groups(['artists']).to(['write']),
      ],
    },
    '/users/{userId}/*': {
      allow: auth.authenticated().to(['read', 'write']),
    },
    '/processing/{userId}/{trackId}/*': {
      allow: auth.authenticated().to(['read', 'write']),
    },
  }),
});