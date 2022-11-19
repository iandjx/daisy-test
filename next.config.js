const { i18n } = require("./next-i18next.config");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  // When started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev} - isProd:${isProd} - isStaging:${isStaging}`);

  return {
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    i18n,
  };
};

module.exports = nextConfig;
