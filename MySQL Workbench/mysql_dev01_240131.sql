USE dev;

DESC customers;

SELECT id
		, name
        , email
        , phone
        , address
FROM customers;

CREATE TABLE `t_users`(
	`user_no` INT AUTO_INCREMENT,
    `user_id` VARCHAR(100) NOT NULL UNIQUE,
    `user_pwd` VARCHAR(100) NOT NULL,
    `user_name` VARCHAR(100) NOT NULL,
    `user_gender` CHAR(1) CHECK(user_gender IN ('M', 'F')),
    `user_age` INT,
    `join_date` DATE,
    PRIMARY KEY(`user_no`)
);

COMMIT;

INSERT INTO t_users
SET user_id = "user01", user_pwd = 1234, user_name = "홍길동";

SELECT *
FROM t_users;

DESC t_users;