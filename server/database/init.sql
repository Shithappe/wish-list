-- DROP DATABASE WishList;

CREATE DATABASE WishList;
USE WishList;

CREATE Table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    email VARCHAR(255)
);

CREATE Table Wishs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    link TEXT,
    price VARCHAR(255),
    done BOOLEAN
);

INSERT INTO Wishs (name, link, price)
VALUES ("awd", "https://www.w3schools.com/sql/sql_insert.asp", "123$");