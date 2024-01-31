USE dev;

CREATE TABLE `dev`.`customers` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,
    `address` VARCHAR(100) NULL,
    PRIMARY KEY (`id`)
);

SELECT id
		, name
        , email
        , phone
        , address
FROM customers;

DESC customers;

INSERT INTO customers
			(
            id
            , name
            , email
            , phone
            , address
            )
			VALUES
            (
            1
            , 'John Doe'
            , 'john@mail.com'
            , '010-000-000'
            , ''
            );
            
COMMIT;

CREATE USER 'dev01'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '1234';	-- 비밀번호 암호화 비적용
GRANT ALL PRIVILEGES ON dev.* to'dev01'@'%' WITH GRANT OPTION;	-- 모든 권한부여
flush privileges;	 -- 설정 반영

USE sakila;

SELECT *
FROM customer;
