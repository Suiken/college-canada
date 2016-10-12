create table users
(
	id serial PRIMARY KEY,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	gender character not null,
	address varchar(255) not null,
	city varchar(255) not null,
	province varchar(255) default null,
	postal_code varchar(255) not null,
	country varchar(255) not null
); 

create table partners
(
	id serial primary key,
	name varchar(255) not null,
	address varchar(255) not null,
	city varchar(255) not null,
	province varchar(255) default null,
	postal_code varchar(255) not null,
	country varchar(255) not null
);

create table diplomas
(
	id serial primary key,
	name varchar(255) not null,
	lvl varchar(255) not null,
	partner_id integer,
	foreign key(partner_id) references partners(id)
);

insert into users(first_name, last_name, gender, address, city, province, postal_code, country)
values('Kevin', 'Suy', 'M', '1607 - 777 Boulevard Robert Bourassa', 'Montréal', 'Québec', 'H3C 3Z7', 'Canada');