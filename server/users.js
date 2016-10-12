const postgresProperties = require('./postgres-properties');

function findAll(){
	postgresProperties.executeQuery('select * from users', [], postgresProperties.pool);
}

exports.findAll = findAll;