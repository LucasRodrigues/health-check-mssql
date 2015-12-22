# Health Check Mssql

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-mssql.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-mssql)

## Install

```
$ npm install health-check-mssql
```

## Usage

```js
var healthCheckMssql = require('health-check-mssql');

healthCheckMssql.do([
  {
    database: 'validDb',
    server: 'validServer.rds.amazonaws.com',
    userName: 'validUser',
    password: 'validPassword'
  },
  {
      database: 'invalidDb',
      server: 'invalidServer.rds.amazonaws.com',
      userName: 'invalidUser',
      password: 'invalidPassword'
    }])
  .then(function(result) {
    console.log(result);
    /* 
    { health: false,
      success: 1,
      error: 1,
      details: 
       [ { name: 'validServer.rds.amazonaws.com:validDb',
           health: true,
           message: '' },
         { name: 'invalidServer.rds.amazonaws.com:invalidDb',
           health: false,
           message: 'Login failed for user \'invalidUser\'.' } ] }

    */
  })
  .catch(function(error) {
    console.log(error);
  });
```
