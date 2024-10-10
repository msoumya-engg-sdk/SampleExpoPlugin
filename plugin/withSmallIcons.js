const { withDangerousMod } = require('@expo/config-plugins');
const { resolve, parse } = require('path');
const { existsSync, mkdirSync, writeFileSync } = require('fs');

const RESOURCE_ROOT_PATH = 'android/app/src/main/res/';

// Save some icon in drawable folder
const withSmallIcons = (config, _props) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      if(_props.smallIcon) {
        await saveIconAsync(_props.smallIcon, config.modRequest.projectRoot, "drawable");
      }
      return config;
    },
  ]);
};

async function saveIconAsync(icon, projectRoot, directory) {
    const name = parse(icon).name;
    const path = resolve(projectRoot, RESOURCE_ROOT_PATH, directory);
    if(!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }

    writeFileSync(resolve(path, name + '.png'), icon);
}

module.exports = withSmallIcons;