var pool = require('./bd');


async function getServicios() {
    try {
        var query = "select * from servicios";
        var rows = await pool.query(query);
        return rows;
    }
    catch (error) {
        console.log(error);
    }
}

async function insertServicios(obj) {
    try {
        var query = "insert into servicios set?";
        var rows = await pool.query(query, [obj])
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = { getServicios, insertServicios }

