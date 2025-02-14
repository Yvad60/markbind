const fs = require('fs-extra');
const path = require('path');

const { Site } = require('@markbind/core');

const logger = require('../util/logger');

function init(root, options) {
  const rootFolder = path.resolve(root || process.cwd());

  if (options.convert) {
    if (fs.existsSync(path.resolve(rootFolder, 'site.json'))) {
      logger.error('Cannot convert an existing MarkBind website!');
      return;
    }
  }

  Site.initSite(rootFolder, options.template)
    .then(() => {
      logger.info('Initialization success.');
    })
    .then(() => {
      if (options.convert) {
        logger.info('Converting to MarkBind website.');
        const outputRoot = path.join(rootFolder, '_site');
        new Site(rootFolder, outputRoot).convert()
          .then(() => {
            logger.info('Conversion success.');
          })
          .catch((error) => {
            logger.error(error.message);
            process.exitCode = 1;
          });
      }
    })
    .catch((error) => {
      logger.error(error.message);
      process.exitCode = 1;
    });
}

module.exports = {
  init,
};
