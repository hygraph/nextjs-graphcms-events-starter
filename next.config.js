const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const withCSS = require('@zeit/next-css');

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const env = {
    URL: (() => {
      if (isDev) return 'http://localhost:3000';
      if (isProd) {
        return 'https://nextjs-graphcms-events-starter.now.sh/';
      }
      if (isStaging) return 'http://localhost:11639';
    })(),
  };

  return withCSS({
    env,
  });
};
