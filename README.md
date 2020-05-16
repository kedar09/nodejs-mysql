# NodeJs Mysql
Node.js CRUD application using Mysql

**Folder Structure**

```
nodejs-mysql
|
|
|____app
|    |____UserComponent
|         |____user.controller.js
|      	  |____user.model.js
|         |____user.utility.js
|         |____user.validator.js
|
|
|____bin
|    |____www
|
|
|____config
|    |____database.js
|
|
|____node_modules 
|
|
|____public
|    |____stylesheets
|    |    |__style.css
|    |
|    |____index.html
|
|
|____routes
|    |____index.js
|    |____users.js
|
|
|____app.js
|
|
|____package.json

```

Run this project by this command :

1. `npm install`
2. `npm start`
3. `localhost:3000`

**Creating database and table**

```
create database TEST;

use TEST;

create table userinfo(
    userInfoId int primary key auto_increment,
    name varchar(50),
    address varchar(50),
    dateOfBirth date,
    mobileNumber bigint
);
```
