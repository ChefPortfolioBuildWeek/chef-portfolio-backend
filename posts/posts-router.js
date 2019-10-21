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

//update a post
// /api/posts/update/id
router.put("/update/:id", restricted, (req, res) => {
    const id = req.params.id;
    const action = req.body;
  
    Posts.update(id, action)
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(error => {
        res.status(500).json({
          error: "The information could not be modified"
        });
    });
});

module.exports = router;