-- 오라클 : 스키마(데이터베이스) -> 계정 -> 테이블
-- MySQL : 계정 -> 스키마(데이터베이스) -> 테이블

USE sakila;
SELECT * FROM sys_config;

USE sys;
SELECT * FROM sys_config;

-- 문자형
-- CHAR : 고정(1~255byte)
-- VARCHAR : 가변(1~16383byte)
-- TEXT

-- 숫자형
-- 정수 : INT(4byte), BIGINT
-- 실수 : FLOAT, DOUBLE

-- 날짜형
-- DATE(YYYY-MM-DD)    *오라클(YYYY/MM/DD)
-- TIME(HH:MM:SS)
-- DATETIME

-- 오라클 -> MySQL
-- NVL -> IFNUL(컬럼, 대체값)
-- LIKE('%'||'문자'||'%') -> CONCAT('%', '문자')    *CONCAT(CONCAT('%', '문자'), '%')
-- 형변환(TOCAHR, TONUMBER, TODATE) -> CAST(대상 AS 타입)    *DATE_FORMAT(값, 출력포맷)    *출력포맷(%Y%m%d)
-- SEQUENCE -> AUTO_INCREMENT(최대값 + 1)