var salt = "hewiuwrwhiufhsk";
var data = "Karis" + salt;
var crypto = require('crypto');
console.log(crypto.createHash('md5').update(data).digest('hex'));
