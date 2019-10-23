
exports.up = function(knex) {
    return knex.schema.createTable('receipes', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable();
        tbl.string('category', 128).notNullable();
        tbl.text('description').notNullable();
        tbl.string('imgURL');
        tbl.string('username');
        tbl.string('location');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('receipes'); 
};
