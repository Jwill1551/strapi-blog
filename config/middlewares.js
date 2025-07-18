module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://next-blog-app-nine-lake.vercel.app/'], // Add your frontend URL here
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    },
  },
];
