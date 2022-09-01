
const mysql = require('mysql')

const connectDB = () => {
    const con = mysql.createConnection({
	//Db configuratrions
    });

    con.connect(function(err) {
        if(err) throw err;
    })

    return con;
}

module.exports = connectDB;