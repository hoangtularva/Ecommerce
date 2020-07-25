import express from 'express';
import User from '../models/userModel';

const router = express.Router();

//Chức năng đăng ký
router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});

//Tạo tài khoản admin quản lý sp
router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: 'HoangTu',
      email: 'hoangtu@gmail.com',
      password: '1234',
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;
