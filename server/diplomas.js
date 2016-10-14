const postgresProperties = require('./postgres-properties');

function findAll(){
	return postgresProperties.executeQuery('select * from diplomas', []);
}

function findById(id){
	return postgresProperties.executeQuery('select * from diplomas where id = $1', [id]);
}

exports.findAll = findAll;
exports.findById = findById;