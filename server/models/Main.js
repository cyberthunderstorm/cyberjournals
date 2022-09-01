const db = require("../config/db")

const createTableAll = () => {
    const userQuery = "CREATE TABLE IF NOT EXISTS Users(\
        user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        username TEXT NOT NULL,\
        bio TEXT NULL,\
        profile_pic TEXT NULL,\
        date_joined TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP)";
    const postQuery = "CREATE TABLE IF NOT EXISTS Posts(\
        id INT NOT NULL AUTO_INCREMENT,\
        title TEXT NOT NULL,\
        author_id INT NOT NULL,\
        content TEXT NOT NULL,\
        meta_data VARCHAR(250) NOT NULL,\
        created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (id),\
        FOREIGN KEY (author_id) REFERENCES Users(user_id) ON DELETE CASCADE)";
    db().query(userQuery, function(err, result) {
        if(err) throw err;
        console.log("Table created")
    })
    db().query(postQuery, function(err, result) {
        if(err) throw err;
        console.log("Table created")
    })
}

module.exports = createTableAll;