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

async function delateServicios(ID) {
    try {
        var query = "delete from servicios where ID = ?";
        var row = await pool.query(query, [ID]);
        return row;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

async function getServiciosbyID(ID) {
    try {
        var query = "select * from servicios where ID = ?";
        var rows = await pool.query(query, [ID]);
        return rows;
    }
    catch (error) {
        console.log(error);
    }
}

async function editServiciosbyID(obj, ID) {
    try {
        var query = "update servicios set ? where ID=?";
        var rows = await pool.query(query, [obj, ID])
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getServicios, insertServicios, delateServicios, getServiciosbyID, editServiciosbyID }

