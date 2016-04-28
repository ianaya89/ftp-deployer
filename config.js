require('dotenv').config();
var path = require('path');

module.exports = {
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  host: process.env.HOST || '',
  port: process.env.PORT || '',
  localRoot: path.join(__dirname, process.env.PROJECT_ROOT),
  remoteRoot: process.env.REMOTE_ROOT || '',
  exclude: ['.git', '.gitignore']
};
