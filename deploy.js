var FtpDeploy = require('ftp-deploy');
var ftp = new FtpDeploy();

module.exports = (config, fn) => {
  ftp.deploy(config, function(err, a) {
    if (err) {
      console.log(err);
    }
    else if (fn) {
      fn();
    } 
  });
}