const bcrypt = require('bcrypt');

const saltRounds = 10;

const encrypt = async (value) => {
  return await bcrypt.hash(value, saltRounds);
};

const decrypt = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  encrypt,
  decrypt,
};
