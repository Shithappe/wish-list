CREATE DATABASE WishList;
USE WishList;

CREATE Table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(1024),
    email VARCHAR(255) UNIQUE
);

CREATE Table Wishs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    link TEXT,
    price VARCHAR(255),
    user_id INT UNSIGNED
    done BOOLEAN DEFAULT 0,
);

CREATE Table Share(
    id INT AUTO_INCREMENT PRIMARY KEY,
    accepted BOOLEAN DEFAULT 0,
    sender_id INT UNSIGNED,
    recipient_id INT UNSIGNED
);
