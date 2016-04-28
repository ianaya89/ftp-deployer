var config = require ('./config');
var ftpDeploy = new require('ftp-deploy').FtpDeploy();
  
ftpDeploy.deploy(config, function(err, a) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('finished', a);
  } 
});