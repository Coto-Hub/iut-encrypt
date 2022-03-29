'use strict';

const crypto = require('crypto');
const Salt = '&-#Coto#-&'

exports.sha1 = function (password) {
    return crypto.createHmac('sha1', Salt)
        .update(password, 'binary')
        .digest('hex');
}

exports.compareSha1 = function (value, password) {
    return this.sha1(value) === password;
}
