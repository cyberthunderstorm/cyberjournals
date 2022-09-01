
const express = require('express');
const Post = require('../models/Posts');
const router = express.Router();

const postModel = new Post();
router.get('/test',(req,res)=>res.send('Post route route testing'));

router.get('/', (req,res) => {
    postModel.getAllPosts()
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound:"No posts found"}))
})

router.get('/:id',(req,res) => {
    postModel.getPostById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({nopostfound:"Check provided post id"}))
})

router.put('/:id/title',(req,res) => {
    postModel.updatePostTitle(req.params.id,req.body.title)
        .then(result => res.json({msg: "Post Title Updated Successfully"}))
        .catch(err => res.status(404).json({unabletoupdatetitle:"Unable to update post title"}))
})

router.put('/:id/content', (req,res) => {
    postModel.updatePostTitle(req.params.id,req.body.content)
        .then(result => res.json({msg: "Post Content Updated Successfully"}))
        .catch(err => res.status(404).json({unabletoupdatetitle:"Unable to update post content"}))
})

router.post('/new', (req,res) => {
    postModel.createNewPost(req.body.title,req.body.author_id,req.body.content,req.body.meta_data)
        .then(post => res.json({msg:"Post Added Successfully"}))
        .catch(err => res.status(404).json({msg:"Unable to add this post"}))
})

router.delete('/:id',(req,res) => {
    postModel.deletePost(req.params.id)
        .then(result => res.json({msg:"Post deleted successfully"}))
        .catch(err => res.status(404).json({msg:"Error deleting post"}))
})

module.exports = router;