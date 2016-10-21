const partnerDAO = require('../dao/partner-dao');
const model = require('../model/partner');

function findAll(){
	return partnerDAO.findAll().then(function(res){
		var partners = [];
		for(var i = 0; i < res.length; i++){
			partners.push(partnerBDToPartner(res[i]));
		}
		return partners;
	}).catch(err => {
		console.log(err);
	});
}

function findById(id){
	return partnerDAO.findById(id).then(partnerBD => {
		return partnerBDToPartner(partnerBD);
	}).catch(err => {
		console.log(err);
	});
}

function create(name, address, city, province, postalCode, country){
	partnerDAO.create(name, address, city, province, postalCode, country);
}

function partnerBDToPartner(partnerBD){
	return new model.Partner(partnerBD.id, partnerBD.name, partnerBD.address, 
		partnerBD.city, partnerBD.province, partnerBD.postal_code, partnerBD.country);
}

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;