function generateRandomEmail() {
  const random = Math.floor(Math.random() * 100000);
  return `joao.silva${random}@example.com`;
}

function generateRandomPassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!';
  let password = '';
  for (let i = 0; i < 10; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

const randomEmail = generateRandomEmail();
const randomPassword = generateRandomPassword();

module.exports = {
  validUser: {
    firstName: "João",
    lastName: "Silva 356",
    email: randomEmail,
    password: randomPassword,
    confirmation: randomPassword
  },
  invalidUser: {
    firstName: "João",
    lastName: "Silva 3",
    email: "joao.silva36677@example",
    password: "Senha123#",
    confirmation: "Senha123#"
  },

  invalidPsw: {
    firstName: "João",
    lastName: "Silva 3",
    email: randomEmail,
    password: "invalidpassword",
    confirmation: "invalidpassword"
  },

  invalidEmail: {
    firstName: "João",
    lastName: "Silva 3",
    email: "joao.silva36677@example",
    password: randomPassword,
    confirmation: randomPassword
  }
};