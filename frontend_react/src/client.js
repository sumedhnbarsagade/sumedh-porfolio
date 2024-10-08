import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_ID,
    dataset: 'production',
    apiVersion: '2024-10-02',
    useCdn: 'true',
    token: process.env.REACT_APP_SANITY_TOKEN,
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)