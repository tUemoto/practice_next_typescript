const dev = process.env.NODE_ENV !== 'production'

const LOCAL_DOMAIN = 'http://localhost:3000'
const PRODUCTION_DOMAIN =
  'https://practice-next-typescript-e7lsrzvxu-tuemoto.vercel.app/'

export const server = dev ? LOCAL_DOMAIN : PRODUCTION_DOMAIN
