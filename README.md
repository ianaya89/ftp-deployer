# ftp-deployer
node.js terminal app to deploy web sites through FTP

### Install
1. Clone or download the repo.
2. Open your terminal and locate the project root folder.
3. Run: `$ npm i`

### Set Up
1. Create a file called `.env` inside the project root directory (or rename de `example.env` file).
2. Set your configuration settings following this format:
  ```
  USERNAME=your_user_name
  PASSWORD=your_password
  HOST=your_host
  PORT=the_port_number
  PROJECT_ROOT='local_directory_to_deploy'
  REMOTE_ROOT='remote_directory'
  ```

  *Note that all those values can also be set as environment variables when you run the node app.*
  
### Run It
1. Open your terminal and locate the project root folder.
2. Run: `$ npm start`
