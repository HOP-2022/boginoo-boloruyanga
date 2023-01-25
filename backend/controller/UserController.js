const { req, res } = require("express");
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "placeholder_secret";
const bcrypt = require("bcrypt");

// exports.getLinks = async (req, res, next) => {
//   const links = await Link.find();
//   res.status(200).json({
//     success: true,
//     data: link,
//   });
// };

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    console.log(password);
    const user = await User.create({ email, password });
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(200).json({
      success: false,
      data: e.message.toString(),
    });
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const existingUser = await User.findOne({
      email,
    });
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "email esvel nuuts ud buruu baina" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res
        .status(404)
        .json({ message: "email esvel nuuts ug buruu baina" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ymar negen zuil buruu baina" });
  }
};

/*
1. data model butets
password hash
jwt -> token
password -> check
2. controller -> CRUD: {
    data yaj
}
3. router
2,4. middleware
5. index
*/
