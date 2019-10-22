const db = require('../database/dbConfig');

module.exports = {
    getPosts,
    add,
    getBy,
    getByUsername,
    remove,
    update
};

function getPosts() {
    return db('posts');
}

function getByUsername(username) {
    return db('posts').where({ username });
}
  
function getById(id) {
    return db('posts').where({ id });
}
  
function getBy(filter) {
    return db('posts')
      .where(filter)
      .first();
}
  
function add(post) {
    return db('posts')
      .insert(post, 'id')
      .then(ids => {
        return getById(ids[0]);
    });
}
// async function add(posts) {
//     const [id] = await db('posts').insert(posts, 'id');
  
//     return findById(id);
//   }
  
function remove(id) {
    return db('posts')
      .where("id", id)
      .del();
}
  
function update(id, changes) {
    return db('posts')
      .where({ id: id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
}