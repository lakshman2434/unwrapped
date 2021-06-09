const isDevEnv = process.env.NODE_ENV === 'development';

export default {
  // App Details
  appName: 'DiscoverUnwrapped',

  // Build Configuration - eg. Debug or Release?
  isDevEnv,

  // Date Format
  dateFormat: 'Do MMM YYYY',

  // API
  apiBaseUrl: isDevEnv
    ? 'https://digitalsupply.co/wp-json/wp'
    : 'https://digitalsupply.co/wp-json/wp',


};
