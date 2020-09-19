CREATE SCHEMA test AUTHORIZATION {YOUR_USER};

CREATE TABLE test.perftest (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar(50) NULL,
	price float4 NULL,
	category varchar(50) NULL,
	description varchar(200) NULL,
	CONSTRAINT perftest_pk PRIMARY KEY (id)
);