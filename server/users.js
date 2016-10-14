const postgresProperties = require('./postgres-properties');

function findAll(){
	return postgresProperties.executeQuery('select * from users', []);
}

exports.findAll = findAll;