require "postgres"

psql

CREATE DATABASE moviesdb

\c moviesdb

 CREATE TABLE searched (
 	poster VARCHAR(255),
 	title VARCHAR(100),
 	released varchar(100),
 	description varchar (1000))