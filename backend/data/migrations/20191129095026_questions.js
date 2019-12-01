
exports.up = function(knex) {
	return knex.schema.createTable('questions', tbl => {
		tbl.increments();
		tbl.string('question').notNullable();
		tbl.string('answer_a').notNullable();
		tbl.string('answer_b').notNullable();
		tbl.string('answer_c').notNullable();
		tbl.string('answer_d').notNullable();
		tbl.text('correct_answer');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('questions');
};
