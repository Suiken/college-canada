const postgresProperties = require('./postgres-properties');

function findAll(){
	return postgresProperties.executeQuery('select * from partners', [], postgresProperties.Rows.many);
}

function findById(id){
	return postgresProperties.executeQuery('select * from partners where id = $1', [id], postgresProperties.Rows.one);
}

function create(name, address, city, province, postalCode, country){
	return postgresProperties.executeQuery(
		'insert into partners(name, address, city, province, postal_code, country) values($1, $2, $3, $4, $5, $6)', 
		[name, address, city, province, postalCode, country], 
		postgresProperties.Rows.none
	);
}

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;