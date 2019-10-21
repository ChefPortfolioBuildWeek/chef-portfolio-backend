const db = require('../database/dbConfig');

module.exports = {
    getPost,
    add,
    getBy,
    getByUsername,
    remove,
    update
};

function getPost() {
    return db('post');
}

function getByUsername(username) {
    return db('post').where({ username });
}
  
function getById(id) {
    return db('post').where({ id });
}
  
function getBy(filter) {
    return db('post')
      .where(filter)
      .first();
}
  
function add(post) {
    return db('post')
      .insert(post)
      .then(ids => {
        return getById(ids[0]);
    });
}
  
function remove(id) {
    return db('post')
      .where("id", id)
      .del();
}
  
function update(id, changes) {
    return db('post')
      .where({ id: id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
}