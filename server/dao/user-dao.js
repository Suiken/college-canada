const postgresProperties = require('../config/postgres-properties');

function findAll(){
	return postgresProperties.executeQuery('select * from users', [], postgresProperties.Rows.many);
}

function findById(id){
	return postgresProperties.executeQuery('select * from users where id = $1', [id], postgresProperties.Rows.one);
}

function create(firstName, lastName, gender, address, city, province, postalCode, country, birthday){
	return postgresProperties.executeQuery(
		'insert into users(first_name, last_name, gender, address, city, province, postal_code, country, birthday) values($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
		[firstName, lastName, gender, address, city, province, postalCode, country, birthday], 
		postgresProperties.Rows.none
	);
}

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;