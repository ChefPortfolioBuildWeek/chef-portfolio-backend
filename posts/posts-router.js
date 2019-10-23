const router = require('express').Router();
const db = require('./posts-model');

const restricted = require('../auth/restricted-middleware');

//get all posts
router.get('/', (req, res) => {
    db.getPosts()
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(500).json({message: 'An Error occured'})
    })
})

// create a post 
// /api/posts/create
router.post('/create', (req, res) => {
    let myPost = req.body;
    console.log('this is post', myPost)
    db.addPost(myPost)
      .then(info => {
        //   console.log(info)
        res.status(201).json({
          message: 'post added'
        });
      })
      .catch(err => {
        res.status(500).json(err);
      });
});

//update a post
// /api/posts/update/id
router.put('/update/:id', restricted, (req, res) => {
    const id = req.params.id;
    const action = req.body;
  
    db.update(id, action)
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(error => {
        res.status(500).json({
          error: 'The information could not be modified'
        });
    });
});

//get post by username
// /api/posts/username
router.get('/:username', restricted, (req, res) => {
    let username = req.params.username;
  
    db.getByUsername(username)
      .then(post => {
        res.status(201).send(post);
      })
      .catch(err => {
        res.status(401).json({ error: 'User does not exist' });
      });
});

//delete post
// /api/posts/delete/:id
router.delete('/delete/:id', restricted, (req, res) => {
    let id = req.params.id;
  
    db.remove(id)
      .then(post => {
        res.status(200).json({message: 'Post deleted'});
      })
      .catch(err => {
        res.status(500).json({
          error: 'Post cannot be deleted'
        });
    });
});
  

module.exports = router;