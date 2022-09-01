
const model = require("../models/Posts")
const assert = require("assert")
mymodel = new model();

mymodel.getAllPosts()
    .then((result)=>console.log(result))
    .catch((err) => console.log(err))