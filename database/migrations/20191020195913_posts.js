
exports.up = function(knex) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable()
        tbl.string('category', 128).notNullable()
        tbl.string('description', 500).notNullable()
        tbl.string('imgURL', 128);
        tbl.string('username', 128);
        tbl.string('location', 128);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
};
