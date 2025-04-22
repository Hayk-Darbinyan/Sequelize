## Setup instructions

git clone https://github.com/Hayk-DarbinyanSequelizegit
cd Sequelize
npm install

## .env format

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=simply_cars

## Run server

npm run start

## Run migrations

npx sequelize-cli db:migrate

## Get all dealerships

curl -X GET http://localhost:3000/api/dealerships

## Get dealership details

curl -X GET http://localhost:3000/api/dealership/1


