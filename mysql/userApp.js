const express = require('express');
const app = express();
const mysql = require('./userDb.js');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.listen(5000, () => {
    console.log('Server Start, http://localhost:5000');
})

// 전체조회
app.get('/users', async(req, res) => {
    let list = await mysql.executeQuery('userList');
    res.json(list);
})

// 단건조회
app.get('/users/:no', async(req, res) => {
    let userNo = req.params.no;
    let info = (await mysql.executeQuery('userInfo', userNo))[0];
    res.json(info);
})

// 등록
app.post('/users', async(req, res) => {
    let data = req.body.param;
    let result = await mysql.executeQuery('userInsert', data);
    res.json(result);
})

// 수정
app.put('/users/:no', async(req, res) => {
    let result = await updateInfo(req);
    res.json(result);
})

// 수정(전체 컬럼)
async function updateAll(request) {
    let data = [selectedInfo(request.body.param)
                , request.params.no];
    let result = await mysql.executeQuery('userUpdateAll', data);
    return result;
}

function selectedInfo(obj) {
    let delDate = ["id"];
    let newObj = {};
    let isTargeted = null;
    for(let field in obj) {
        isTargeted = false;
        for(let target of delDate) {
            if(field == target) {
                isTargeted = true;
                break;
            }
        }
        if(!isTargeted) {
            newObj[field] = obj[field];
        }
    }
    return newObj;
};

// 수정(선택 컬럼)
async function updateInfo(request) {
    let data = [...getInfo(request.body.param), request.params.no];
    let result = await mysql.executeQuery('userUpdateInfo', data);
    return result;
}

function getInfo(obj) {
    let getData = ["user_pwd", "user_gender"];
    let newAry = [];
    for(let target of getData) {
        for(let field in obj) {
            if(field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
}

// 삭제
app.delete('/users/:no', async(req, res) => {
    let userNo = req.params.no;
    let del = await mysql.executeQuery('userDelete', userNo);
    res.json(del);
})