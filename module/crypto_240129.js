const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')   // 해쉬함수(SHA-512) 알고리즘
                    .update(data)
                    .digest('base64');  // 표시방법

console.log(data, encData);

encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('hex');

console.log(data, encData);

// salting 암호화
const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if(err) reject(err);
            resolve(buf.toString('base64'));
        })
    })
}

const createCryptoPassword = async(plainPassword) => {
    const salt = await createSalt();

    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if(err) reject(err);
            resolve({password : key.toString('base64'), salt});
        })
    })
};

// (택1) 함수실행 후 출력(비동기 -> 동기)
const cryptoPassword = async() => {
    encData = await createCryptoPassword(data);
    console.log(encData);
}

cryptoPassword();

// (택2) 함수실행 후 출력(비동기 -> 동기)
createCryptoPassword(data)
.then(result => console.log(result))
.catch(err => console.log(err));