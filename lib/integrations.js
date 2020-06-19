/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'google-tag-manager': require('@segment/analytics.js-integration-google-tag-manager'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'doubleclick-floodlight': require('@segment/analytics.js-integration-doubleclick-floodlight'),
  'bing-ads': require('@segment/analytics.js-integration-bing-ads'),
  'segmentio': require('@segment/analytics.js-integration-segmentio')
};
