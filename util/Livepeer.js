import {
    createReactClient,
    studioProvider
} from '@livepeer/react';

export const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: 'fc5005e6-0077-4ff3-9e42-ddd5869b6c35',
    }),
});