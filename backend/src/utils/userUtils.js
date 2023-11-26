const removePasswordFromUser = (user) => {
  const userSafe = { ...user.toObject() };
  delete userSafe.senha;
  return userSafe;
};

const transformUserResponse = (data) => {
  if (Array.isArray(data)) {
    return data.map(removePasswordFromUser);
  } else {
    return removePasswordFromUser(data);
  }
};

module.exports = {
  transformUserResponse,
};
