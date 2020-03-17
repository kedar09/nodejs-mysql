# NodeJs Mysql
Node.js CRUD application using Mysql

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
