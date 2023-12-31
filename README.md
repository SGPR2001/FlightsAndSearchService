/
  -src/
    index.js //server
    models/
    controllers/
    middlewares/
    services/
    utils/
    config/
    repository/
  -tests/[later]

  # Welcome to Flights Seervice

  ## Project Setup
  -clone the project on your local
  -Execute `npm install `on the same path as of your root directory of the downloaded project
  -Create a `.env` file in the root directory and add the following environment variable
  -`PORT=3000`
  -Inside the `src/config` folder create a new file `config.json` and then add the foolowing piece of json

  ```
  
  {
  "development": {
    "username": <your db login name>,
    "password": <your db password>,
    "database": "Flights_Search-DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
}

  
  
  ```


