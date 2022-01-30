-- DROP DATABASE WishList;

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


UPDATE share SET accepted = 1 WHERE recipient_id = 3 AND sender_id = 5;


SELECT wishs.id, name, link, price, user_id, users.username, users.email from wishs join users on wishs.user_id = users.id WHERE user_id = 17
UNION
SELECT  wishs.id, name, link, price, user_id, username, email FROM wishs join share on wishs.user_id = share.sender_id join users on wishs.user_id = users.id WHERE recipient_id = 17 AND accepted = 1 ORDER BY user_id;
