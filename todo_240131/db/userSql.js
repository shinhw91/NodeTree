let userList =
`SELECT user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , join_date
FROM t_users`;

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
    userList,
    userInfo,
    userInsert,
    userUpdateAll,
    userUpdateInfo,
    userDelete
}