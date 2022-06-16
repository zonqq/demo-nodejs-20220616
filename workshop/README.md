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
Start database server
```
$cd postgresql
$docker compose up -d
$docker compose ps
```

Access to database
```
$psql -U user -W workshop

list of database
>\l 

switch to database
>\c workshop

list of tables
>\dt

select data from Posts table
>select * from "Posts";
```

## 3. Run postman with [newman](https://www.npmjs.com/package/newman)
```
$cd postman
$newman run workshop.postman_collection.json
```
