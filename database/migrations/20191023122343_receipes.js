
exports.up = function(knex, Promise) {
    return knex.schema.createTable('receipes', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable();
        tbl.json('category').notNullable();
        tbl.text('description', 128).notNullable();
        tbl.string('imgURL', 128);
        tbl.string('username', 128);
        tbl.string('location', 128);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('receipes'); 
};
