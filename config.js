var projectRoot = process.env.PROJECT_ROOT || 'public-site/'

module.exports = {
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  host: process.env.HOST || '',
  port: process.env.PORT || '',
  localRoot: '../' + __dirname + projectRoot,
  remoteRoot: process.env.REMOTE_ROOT || '',
  exclude: ['.git', '.gitignore']
};