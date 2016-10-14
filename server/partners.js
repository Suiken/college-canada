const postgresProperties = require('./postgres-properties');

function findAll(){
	return postgresProperties.executeQuery('select * from partners', []);
}

function findById(id){
	return postgresProperties.executeQuery('select * from partners where id = $1', [id]);
}

exports.findAll = findAll;
exports.findById = findById;