# NodeJs Mysql
Node.js CRUD application using Mysql

Run this project by this command :

1. `npm install`
2. `npm start`
3. `localhost:3000`

**Creating database and table**

```
create database test;

use test;

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);
```
