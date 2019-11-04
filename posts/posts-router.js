const router = require('express').Router();
const Posts = require('./posts-model');

const restricted = require('../auth/restricted-middleware');

//get all posts
router.get('/', (req, res) => {
    Posts.getPosts()
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
  let myPost = req.body;
  console.log('this is post', myPost)
  Posts.testPost(myPost)
    .then(info => {
      //   console.log(info)
      res.status(201).json({
        info
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// router.get("/logout", (req, res) => {
//   if (token) {
//     token.destroy(err => {
//       if (err) {
//         res.status(500).json({ message: "Logout failed" });
//       } else {
//         res.status(200).json({ message: "Bye, thanks for visiting" });
//       }
//     });
//   } else {
//     res.status(200).json({ message: "Bye, thanks for visiting" });
//   }
// });
//update a post
// /api/posts/update/id
router.put('/update/:id', restricted, (req, res) => {
    const id = req.params.id;
    const action = req.body;
  
    Posts.update(id, action)
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
  
    Posts.getByUsername(username)
      .then(post => {
        res.status(201).send(post);
      })
      .catch(err => {
        res.status(401).json({ error: 'User does not exist' });
      });
});

router.delete('/delete/:id', restricted, (req, res) => {
  const { id } = req.params;
  Posts.remove(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: 'Post deleted'});
      } else {
        res
          .status(404)
          .json({ error: 'A post with provided ID does not exist' });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: 'This post could not be removed'
      });
    });
});

module.exports = router;