
const express = require("express");
const init = require('./models/Main');
const cors = require("cors");
const posts = require("./routes/posts");
const app = express();

app.use(cors({orign: true, credentials: true}))
app.use(express.json({extended:false}))

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.use('/api/posts', posts);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on porrt ${port}`))
