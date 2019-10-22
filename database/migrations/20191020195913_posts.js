
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable()
        tbl.string('category').notNullable()
        tbl.string('description', 500).notNullable()
        tbl.string('imgURL', 128);
        tbl.string('username', 128);
        tbl.string('location', 128);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};
