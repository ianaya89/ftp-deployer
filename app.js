var prompt = require('prompt');

var Spinner = require('cli-spinner').Spinner;
var spinner = new Spinner('deploying.. %s');
 
var config = require ('./config');
var ftpDeploy = require('./deploy');

prompt.colors = true;
prompt.message = 'Deploy Guru';

var promtpSettings = {
  properties: {
    confirm: {
      pattern: /^(yes|no|y|n)$/gi,
      description: `Do you want to deploy to '${config.host}/${config.remoteRoot}' the files located at '${config.localRoot}'?`,
      message: 'Type yes/no',
      required: true,
      default: 'yes'
    }
  }
}

prompt.start();

prompt.get(promtpSettings , (err, result) => {
  var c = result.confirm.toLowerCase();
  if (c !== 'y' && c !== 'yes') {
    console.log('deploy aborted.');
    return process.exit();
  }

  spinner.setSpinnerString('|/-\\');
  spinner.start();
  ftpDeploy(config, () => {
    spinner.stop();
    console.log('deploy finished.')
  });
});


