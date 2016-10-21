create table users
(
	id serial primary key,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	gender character not null,
	address varchar(255) not null,
	city varchar(255) not null,
	province varchar(255) default null,
	postal_code varchar(255) not null,
	country varchar(255) not null
); 

create table visits(
	partner_id integer not null,
	user_id integer not null,

	primary key(partner_id, user_id),

	foreign key(partner_id) references partners(id),
	foreign key(user_id) references users(id)
)

create table partners
(
	id serial primary key,
	name varchar(255) not null,
	address varchar(255) not null,
	city varchar(255) not null,
	province varchar(255) default null,
	postal_code varchar(255) not null,
	country varchar(255) not null,
	logo varchar(255) not null,
	website varchar(255) not null
);

insert into users(first_name, last_name, gender, address, city, province, postal_code, country)
values('Kevin', 'Suy', 'M', '1607 - 777 Boulevard Robert Bourassa', 'Montréal', 'Québec', 'H3C 3Z7', 'Canada');

insert into partners(name, address, city, province, postal_code, country, logo, website)
values('UQÀM', '632 Chemin Sydenham', 'Chicoutimi', 'Québec', 'G7H 2G5', 'Canada', 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/6a/Logo_UQAM.svg/1024px-Logo_UQAM.svg.png', 'http://www.uqam.ca');

insert into visit(partner_id, user_id)
values(1, 1);