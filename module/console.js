const fs = require('fs');
const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({stdout : output, strerr : errorOutput});

const msg = 'Log Writing';

logger.log('Result : %s', msg);   // stdout
logger.error(`Result : ${msg}`); // stderr
