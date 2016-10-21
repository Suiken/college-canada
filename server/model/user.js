class User{
	constructor(id, firstName, lastName, gender, address, city, province, postalCode, country, birthday){
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.province = province;
		this.postalCode = postalCode;
		this.country = country;
		this.birthday = birthday;
	}
}

exports.User = User;