const fs = require('fs');
const express = require('express');
const app = express();

// 미들웨어
// -- Request Data Process

// application/json
app.use(express.json({
    limit : '50mb'
}))

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}))

// Error
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).json({statusCode : res.statusCode,
                        errMessage : err.mesage});
});

// *라우트 핸들러(교재 p.120)
app.get('/defaultErr', (req, res) => {
    throw new Error('기본 핸들러 동작!');
})

app.get('/customErr', (req, res, next) => {
    next(new Error('Process Fail! Check Data!'));
})

// static
app.use(express.static('./files'));
app.use('/public', express.static('./files'));
// ===============================================================
// Data Loding
const jsonFile = fs.readFileSync('./db.json');
const jsonData = JSON.parse(jsonFile);

// *DB 접속 쿼리문(ID 확인)
const getData = (target, where) => {
    let data = jsonData[target];    // 객체[필드]
    if(Array.isArray(data)) {
        let list = data;
        for(let obj of list) {
            if(obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}

// 교재 p.116
// 서버 실행
app.listen(5000, () => {
    console.log('http://localhost:5000');
})

// GET
app.get('/', (req, res) => {
    res.send('Hello, Express.js World');
})

// 전체조회 - posts
app.get('/posts', (req, res) => {
    let data = getData('posts');
    res.json(data);
});

// 단건조회 - posts
app.get('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = getData('posts', postId);
    res.json(data);
});

// 전체조회 - comments
app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.json(data);
})

// 단건조회 - comments
app.get('/comments/:id', (req, res) => {
    let commentsId = req.params.id;
    let data = getData('comments', commentsId);
    res.json(data);
})

// 조회 - profile
app.get('/profile', (rea, res) => {
    let data = getData('profile');
    res.json(data);
})

// Talend API Tester 확장 프로그램 사용
// 등록
app.post('/posts', (req, res) => {
    let data = req.body;
    console.log('등록', data);
    res.json(data);
});

// 수정
app.put('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = req.body;
    console.log('수정', postId, data);
    res.json({id : postId, data});
})

// 삭제
app.delete('/posts/:id', (req, res) => {
    let postId = req.params.id;
    console.log('삭제', postId);
    res.sendStatus(203);
})

// 검색을 포함하는 경우 -> QueryString
app.get('/search', (req, res) => {
    let keywords = req.query;
    console.log('검색조건 구성', keywords);
    res.json(keywords);
})