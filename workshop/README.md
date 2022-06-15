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

## Working with Postgresql
```
$psql -U user -W workshop

list of database
>\l 

switch to database
>\c workshop

list of tables
>\dt
```