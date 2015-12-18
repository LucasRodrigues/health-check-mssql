import {Connection} from 'tedious';

export default class Repository {

  static test(configuration) {
    return new Promise(resolve => {
      const connection = new Connection({
        server: configuration.server,
        userName: configuration.userName,
        password: configuration.password,
        options: {
          database: configuration.database,
          encrypt: true,
          connectTimeout: 60000,
          requestTimeout: 600000
        }
      });

      const callbackConnect = error => {
        if (error) {
          resolve({
            configuration: configuration,
            error: error
          });
        } else {
          resolve({
            configuration: configuration,
            error: null
          });
        }
      };

      connection.on('connect', callbackConnect);
    });
  }
}
