const { join } = require('path')
function resolve(path) {
  return join(__dirname, path)
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  productName: 'Task Plan Manger',
  directories: {
    output: resolve('dist'),
  },
  electronDownload: {
    mirror: 'https://npmmirror.com/mirrors/electron/',
  },
  files: [
    resolve('packages/backend/package.json'),
    {
      from: resolve('packages/backend/dist'),
      to: 'backend',
    },
    {
      from: resolve('packages/frontend/dist'),
      to: 'frontend',
    },
  ],
  extraFiles: [
    {
      from: resolve('packages/backend/db'),
      to: 'backend/db',
    }
  ],
  nsis: {
    "oneClick": false,
    "allowToChangeInstallationDirectory": true,
    "perMachine": true
  },
}

module.exports = config
