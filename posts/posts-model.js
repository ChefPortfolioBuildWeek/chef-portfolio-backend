const db = require('../database/dbConfig');

module.exports = {
    getPosts,
    addPost,
    testPost,
    getBy,
    getByUsername,
    remove,
    update,
    getById
};

function getPosts() {
    return db('posts');
}

function getByUsername(username) {
    return db('posts').where({ username });
}
  
function getById(id) {
    return db('posts').where({ id }).first();
}
  
function getBy(filter) {
    return db('posts')
      .where(filter)
      .first();
}
  
function addPost(newpost) {
    // console.log('from model', newpost)
    return db('receipes')
      .insert(newpost, 'id')
      .then(ids => {
        return getById(ids[0]);
    });
}
async function testPost(newpost) {
    const [id] = await db('posts').insert(newpost, 'id');

  return getById(id);
}
// async function add(post) {
//     const [id] = await db('posts').insert(post, 'id');
  
//     return db('posts');
//   }
  
function remove(id) {
    return db('posts')
      .where('id', id)
      .del();
}
  
function update(id, changes) {
    return db('posts')
      .where({ id: id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
}