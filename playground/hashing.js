const bcrypt = require('bcryptjs');


var password = '123abc!';


bcrypt.genSalt(10, (err, salt)=>{
  bcrypt.hash(password, salt, (err, hash)=>{
    console.log(hash);
  });
});
