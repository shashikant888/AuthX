const UsersModel = require("../model/userModel");
const Users = UsersModel.Users;
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { username, firstName, middleName, lastName, email, password } =
      req.body;

    if (username) {
      var userExist = await Users.findOne({
        where: {
          username: username,
        },
      });
    } else if (email) {
      var userExist = await Users.findOne({
        where: {
          email: email,
        },
      });
    }
    if (userExist) {
      res.json({
        message: "user already exist!!",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await Users.create({
        username: username,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      });
      res.status(201).json({
        message: "New User created Successfully!!",
        newUser
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (username) {
      var userExist = await Users.findOne({
        where: {
          username: username,
        },
      });
    } else if (email) {
      var userExist = await Users.findOne({
        where: {
          email: email,
        },
      });
    }
    if (userExist) {
      const isPasswordValid = await bcrypt.compare(
        password,
        userExist.password
      );
      if (isPasswordValid) {
        res.json({ message: "login successfull!!" });
      } else {
        res.json({ message: "invalid password!!" });
      }
    } else {
      res.json({ message: "user does not exist!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, firstName, middleName, lastName, password } =
      req.body;

    //check valid username of email
    if (email) {
      var userExist = await Users.findOne({
        where: { email: email },
      });
    } else if (username) {
      var userExist = await Users.findOne({
        where: { username: username },
      });
    } else {
      res.json({ message: "invalid username of email !" });
    }

    // console.log("userExist: ", userExist);

    //check password
    if (userExist) {
      const isPasswordValid = await bcrypt.compare(
        password,
        userExist.password
      );
      if (isPasswordValid) {
        //update userData
        await Users.update(
          {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
          },
          {
            where: {
              username: username,
            },
          }
        );
        res.json({ message: "records updated successfully !!" });
      } else {
        res.json({ message: "Incorrect Password !" });
      }
    } else {
      res.json({ message: "user does not exist !" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
    registerUser,
    loginUser,
    updateUser,
};
