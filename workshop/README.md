# Workshop with NodeJS project

## 1. Run project

Start development server
```
$npm run dev
```

Migrate database with Sequelize
```
$sequelize init
$npm run migrate
```

Reset database
```
$npm run migrate:reset
```

## 2. Working with Postgresql
```
$psql -U user -W workshop

list of database
>\l 

switch to database
>\c workshop

list of tables
>\dt
```

## 3. Run postman with [newman](https://www.npmjs.com/package/newman)
```
$cd postman
$newman run workshop.postman_collection.json
```
