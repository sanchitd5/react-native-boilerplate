class Configurations {
  connection = {
    bypassBackend: true,
  };

  devDetails = {
    username: 'sanchit',
    password: 'password',
  };

  axiosOptions = {
    backendUrl: 'http://192.168.1.175:8000',
    timeout: 500000,
  };

  appDetails = {
    devBuild: false,
    appTitle: 'useronboarding',
    appVersion: '0.0.1',
    appCopyRight: 'Sanchit Dang 2020',
  };
}

const instace = new Configurations();
export default instace;
