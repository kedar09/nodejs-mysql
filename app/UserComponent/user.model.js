var conn = require('../../config/database');

var connection = conn.getConnection();

//connect to database
connection.connect();

exports.getAllUser = function (result) {
    let sqlQuery = 'select * from userinfo';
    connection.query(sqlQuery, function (error, resultOfQuery) {
            if (error) {
                result(error, null);
            } else {
                result(null, resultOfQuery);
            }
        });
};

exports.getUserById = function (userInfoId, result) {
    let sqlQuery = 'select * from userinfo where userInfoId = ' + userInfoId;
    connection.query(sqlQuery, function (error, resultOfQuery) {
            if (error) {
                result(error, null);
            } else {
                result(null, resultOfQuery);
            }
        });
};


exports.addUser = function (body, result) {
    connection.query('insert into userinfo set ?' , body,
        function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultAddUser = { message: 'UserInfo Inserted Successfully' };
                result(null, resultAddUser);
            }
        });
};

exports.updateUser = function (body, result) {
    let userInfoId = body.userInfoId;
    delete body.userInfoId;
    connection.query('update userinfo set ? where userInfoId = ?', [body, userInfoId] ,
        function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultUpdateUser = { message: 'UserInfo Updated Successfully' };
                result(null, resultUpdateUser);
            }
        });
};

exports.deleteUserById = function (userInfoId, result) {
    let sqlQuery = 'delete from userinfo where userInfoId = ' + userInfoId;
    connection.query(sqlQuery, function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultDeleteUserById = { message: 'UserInfo Deleted Successfully' };
                result(null, resultDeleteUserById);
            }
        });
};

