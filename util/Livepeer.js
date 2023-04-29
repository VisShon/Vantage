import {
    createReactClient,
    studioProvider
} from '@livepeer/react';

export const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: '8c6b6ea2-0d5d-4763-bb29-1fcd6d44de11',
    }),
});