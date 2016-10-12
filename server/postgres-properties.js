const pg = require('pg');

const config = {
	user : 'postgres',
	database: 'college_canada',
	password: 'admin',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('error', function (err, client) {
  console.error('error fetching client from pool', err)
});

function executeQuery(query, datas, pool){
	pool.connect(function(err, client, done) {
		queryResult = client.query(query, datas, function(err, result) {
			//call `done()` to release the client back to the pool 
			done();

			if(err) {
			  return console.error('error running query', err);
			}
			console.log(result.rows[0].first_name);
			//output: 1 
		});
	});
}

exports.pool = pool;
exports.executeQuery = executeQuery;