const connectDB = require("../config/db");
const db = require("../config/db")

class Post {
    constructor() {
        this.con = connectDB;
    }

    getAllPosts() {
        const con = this.con();
        return new Promise(function(resolve,reject) {
            con.query("SELECT * FROM Posts", function(err,rows) {
                if(rows===undefined) {
                    reject(new Error("Error rows is undefined"))
                } else {
                    resolve(rows)
                }
            })    
        })
    }
    getPostById(id) {
        const con = this.con();
        return new Promise(function(resolve,reject) {
            con.query(`SELECT * FROM Posts WHERE id=${id}`,function(err,rows) {
                if(rows === undefined) {
                    reject(new Error("Error rows is undefined"))
                } else {
                    resolve(rows)
                }
            })
        })
    }
    createNewPost(title,author,content,meta_data) {
        var query = `INSERT INTO Posts(title,author_id,content,meta_data)values(${title},${author},${content},${meta_data})`;
        const con = this.con();
        return new Promise(function(resolve,reject) {
            con.query(query,function(err,rows) {
                if(rows === undefined) {
                    reject(new Error("Error rows undefined"))
                } else {
                    resolve(rows)
                }
            })
        })
    }
    updatePostContent(id,content) {
        var query = `UPDATE Posts SET content=${content} WHERE id=${id}`
        const con = this.con();

        return new Promise(function(resolve,reject) {
            con.query(query,function(err,rows) {
                if(rows === undefined) {
                    reject(new Error("Error rows undefined"))
                } else {
                    resolve(rows)
                }
            })
        })
    }
    updatePostTitle(id, newTitle) {
        var query = `UPDATE Posts SET title=${newTitle} WHERE id=${id}`;
        const con = this.con()
        return new Promise(function(resolve,reject) {
            con.query(query,function(err,rows) {
                if(rows === undefined) {
                    reject(new Error("Errow rows undefined"))
                } else{
                    resolve(rows)
                }
            })
        })
    }
    deletePost(id) {
        var query = `DELETE FROM Posts WHERE id=${id}`;
        const con = this.con();

        return new Promise(function(resove,reject) {
            con.query(query,function(err,rows) {
                if(rows === undefined) {
                    reject(new Error("Erro rows undefined"))
                } else {
                    resolve(rows)
                }
            })
        })
    }
}

module.exports = Post;