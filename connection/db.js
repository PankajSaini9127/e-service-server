const knex = require('knex')

const knexFile = require('../knexFile');

const env = 'development';

const options =knexFile[env];

module.exports =knex.knex(options);