const userDAO = require('../dao/user-dao');
const model = require('../model/user');

function findAll(){
	return userDAO.findAll().then(function(res){
		var users = [];
		for(var i = 0; i < res.length; i++){
			users.push(userBDToUser(res[i]));
		}
		return users;
	});
}

function findById(id){
	return userDAO.findById(id).then(function(userBD){
		return userBDToUser(userBD);
	});
}

function create(firstName, lastName, gender, address, city, province, postalCode, country, birthday){
	userDAO.create(firstName, lastName, gender, address, city, province, postalCode, country, birthday);
}

function userBDToUser(userBD){
	return new model.User(userBD.id, userBD.firstName, userBD.lastName, userBD.gender, 
		userBD.address, userBD.city, userBD.province, userBD.postal_code, userBD.country, userBD.birthday);
}

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;