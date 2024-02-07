let userList =
`SELECT user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , join_date
FROM t_users`;
// DATE_FORMAT(join_date, '%Y-%m-%d') join_date

let userInfo =
`SELECT user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , join_date
FROM t_users
WHERE user_id = ?`;

// SET : 오라클 사용 불가
let userInsert =
`INSERT INTO t_users
SET ?`;

let userUpdateAll =
`UPDATE t_users
SET ?
WHERE user_id = ?`;

let userUpdateInfo =
`UPDATE t_users
SET user_pwd = ?, user_gender = ?
WHERE user_id = ?`;

let userDelete =
`DELETE FROM t_users
WHERE user_id = ?`;

module.exports = {
    userList,   // 변수명 == 필드명, 변수가 가지고 있는 값이 필드의 값
    userInfo,
    userInsert,
    userUpdateAll,
    userUpdateInfo,
    userDelete
}