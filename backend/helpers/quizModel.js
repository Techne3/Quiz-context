const db = require('../data/dbConfig');


module.exports = {
    find,
    add,
    remove,
};

function find(id) {
	if (id) {
        return db('questions')
        .where({ id })
        .first();
	} else {
		return db('questions');
	}
}



function add(item) {
    return db("questions")
      .insert(item, "id")
      .then(ids => {
        const [id] = ids;
        return find(id);
      });
  }


  function remove(id) {
    return db("questions")
      .del()
      .where({ id });
  }
  