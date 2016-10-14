const pgp = require('pg-promise')();

const config = {
	user : 'postgres',
	database: 'college_canada',
	password: 'admin',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
	host: 'localhost'
};

const db = pgp(config);

function executeQuery(query, datas){
	return db.task(t => {
		return t.many(query, datas).then(data => {
			return data;
		});
	});
}

exports.executeQuery = executeQuery;