var Rows = {
	any : 1,
	many : 2,
	one : 3,
	none : 4
}

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

function executeQuery(query, datas, rows){
	return db.task(t => {
		switch(rows){
			case Rows.any :
				return t.any(query, datas).then(data => {
					return data;
				});
				break;
			case Rows.many :
				return t.many(query, datas).then(data => {
					return data;
				});
				break;
			case Rows.one :
				return t.one(query, datas).then(data => {
					return data;
				});
				break;
			case Rows.none :
				return t.many(query, datas).then(data => {
					return data;
				});
				break;
		}
	});
}

exports.executeQuery = executeQuery;
exports.Rows = Rows;