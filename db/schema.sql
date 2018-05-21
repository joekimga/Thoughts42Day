CREATE DATABASE IF NOT EXISTS thoughts_db;
USE thoughts_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS thoughts;

# Create the thoughts table
CREATE TABLE thoughts (
id int NOT NULL AUTO_INCREMENT,
thoughts_name varchar(255) NOT NULL,
bloggeded BOOL DEFAULT false,
PRIMARY KEY (id)
);
