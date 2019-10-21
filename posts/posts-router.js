const router = require('express').Router();
const Posts = require('./posts-model');
const restricted = require('../auth/restricted-middleware');

//get all posts
router.get('/', (req, res) => {
    Posts.getPost()
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(500).json({message: 'An Error occured'})
    })
})

// create a post 
// /api/posts/create
router.post('/create', restricted, (req, res) => {
    let post = req.body;
    Posts.add(post)
      .then(info => {
        res.status(201).json({
          ...info
        });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;