// npm init     // *package.json 생성

// npm install express
// npm install mysql
// npm install dotenv

// npm install --save-dev nodemon
// package.json 파일 -> scripts 명령어 추가(dev)
// npm run dev

// 실행 순서
// 1. SQL문(customerSQL.js)
// 2. MySQL 실행요청(db.js)
// 3. app.js

// customerSql.js

let customerList =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers`;

let customerInfo =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ?`;
// 1) 배열인지 아닌지 : 물음표 갯수
// 2) ? 별로 객체타입인지 아닌지 : 어느 컬럼에 들어가는 값인지 구분 가능여부

let customerInsert =
`INSERT INTO customers
SET ?`; // 객체, 필드명 == 컬럼명

let customerUpdateAll =
`UPDATE customers
SET ?
WHERE id = ?`;  // 배열[객체, 단일값]

let customerUpdateInfo =
`UPDATE customers
SET email = ?, phone = ?, address = ?
WHERE id = ?`;  // 배열[단일값, 단일값, 단일값, 단일값 ]

// *삭제
let customerDelete =
`DELETE
FROM customers
WHERE id = ?`;

module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo,
    customerDelete
}