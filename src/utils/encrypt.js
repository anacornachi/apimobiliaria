import bcrypt from 'bcrypt';

const saltRounds = 10;

export const encrypt = async (value) => {
  return await bcrypt.hash(value, saltRounds);
};

export const decrypt = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
