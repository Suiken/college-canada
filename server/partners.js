const postgresProperties = require('./postgres-properties');

function findAll(){
	return postgresProperties.executeQuery('select * from partners', []);
}

exports.findAll = findAll;