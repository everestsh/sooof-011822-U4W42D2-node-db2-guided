const knex = require('knex')
const db = require('../../data/db-config');

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

function getAll() {
  return db('fruits');
}

function getById(id) {
  return db('fruits').where('id', id).first();
}

async function create(fruit) {
  const [id] = await db('fruits').insert(fruit);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};
