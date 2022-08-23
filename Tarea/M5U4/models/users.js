var pool = require('./bd');
var md5 = require('md5');

async function getUserbyUsernameAndPassword(User, Password) {
    try {
        var query = "select * from usuarios where User = ? and Password = ? limit 1";
        var row = await pool.query(query, [User, md5(Password)]);
        return row[0];
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { getUserbyUsernameAndPassword }