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
  -Once you have added your db config as listed above,go to the src folder from your terminal and execute`npx sequelize db:create`
  and then execute
  To create a model we use 
    ` npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`
    and then we use
  `npx sequelize db:migrate`
  to undo the actions we can use
  `npx sequelize db:migrate:undo`
  
  ```


## DB Design
   -Airplane Table
   -Flight Table
   -Airport Table
   -City Table

   -A flight belongs to an airplane but one airplane can be  used in multiple flights
   -A city has many airports but one airport belongs to a city
   -One airport can have many flights,but a flight belongs to one airport



   ##Tables

   ## City ->id,name,created_at,updated_at
   ## Airport ->id,name,address,city_id,created_at,updated-at
   Relationship ->City has many airports and Airport belongs to a city(one to many)