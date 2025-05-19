import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Meet Merai',
    email: 'meet@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Raj Patel',
    email: 'Raj@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
