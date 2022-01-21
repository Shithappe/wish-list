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
    -- another_user_wish VARCHAR(255) DEFAULT NULL --if its not my wish - it save usermane, else = null
    -- or
    -- another_user_wish BOOLEAN DEFAULT 0
);

CREATE Table Share(
    id INT AUTO_INCREMENT PRIMARY KEY,
    accepted BOOLEAN DEFAULT 0,
    sender_id INT UNSIGNED,
    recipient_id INT UNSIGNED
);


select * from (
    select *
    SELECT * FROM WISHS WHERE user_id = 2
    UNION 
    select (SELECT  * from (select sender_id from share where recipient_id = 2) FROM WISHS WHERE user_id = 2 )
)
order by id;

--
SELECT * from wishs WHERE user_id = 2 -- my_id
UNION 
SELECT * from wishs WHERE user_id = (
    select sender_id from share WHERE recipient_id = 2 --my_id
);