const { ConfigPlugin } = require('@expo/config-plugins');

const withSmallIcons = require('./withSmallIcons');
const withUpdateMainApplication = require('./withUpdateMainApplication');

const withDemoPlugin = (config, _props) => {
  config = withSmallIcons(config, _props)
  config = withUpdateMainApplication(config, _props)
  return config
};

module.exports = withDemoPlugin;