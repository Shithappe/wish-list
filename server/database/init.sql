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
    SELECT * FROM WISHS WHERE user_id = 2
    UNION 
    select (SELECT  * from (select sender_id from share where recipient_id = 2) WHERE user_id = 2 )
)
order by id;

--
SELECT * from wishs WHERE user_id = 2 -- my_id
UNION 
SELECT * from wishs WHERE user_id = (
    select sender_id from share WHERE recipient_id = 2 --my_id
);


select u.id, username, email from users u join share s on (u.id=s.sender_id) where s.recipient_id = 2 and s.accepted = 0;

    UPDATE share SET accepted = 1 WHERE recipient_id = 3 AND sender_id = 5;

select w.* from wishs w join users u on (w.user_id = u.id) join share s on (s.sender_id=u.id) where s.accepted=1;


SELECT sender_id from share WHERE recipient_id = 3 AND accepted = 1;

SELECT distinct * FROM wishs join share on wishs.user_id = 7 OR wishs.user_id = share.sender_id WHERE recipient_id = 7 AND accepted = 1;

SELECT id, name, link, price from wishs WHERE user_id = 3
UNION
SELECT wishs.id, name, link, price FROM wishs join share on wishs.user_id = share.sender_id WHERE recipient_id = 3 AND accepted = 1;