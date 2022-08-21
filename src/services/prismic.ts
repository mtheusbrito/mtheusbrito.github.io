import * as prismic from '@prismicio/client'
const endPoint = prismic.getRepositoryEndpoint('mtheus');
export function getPrismicClient(){
  const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN;

  const client = prismic.createClient(endPoint, {
    accessToken
  });
  return client;
}