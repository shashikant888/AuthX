const authModels = require("../model/authModels");
const Op = require("sequelize");
const { use } = require("../routes/authRoutes");
const Auth = authModels.Auth;

exports.registerUser = async (req, res) => {
  try {
    const { username, firstName, middleName, lastName, email, password } =
      req.body;

    const newUser = await Auth.create({
      username,
      firstName,
      middleName,
      lastName,
      email,
      password,
    });
    res.status(201).json({
      message: "User created Successfully!!",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userData = await Auth.findAll({
      where: {
        [Op.or]: [
          { username:username },
          { email:email },
          { password:password },
        ],
      },
    });
    if (userData.length > 0) {
      res.status(200).json({ message: "Login Successful!" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
    res.send({ message: "login Successfully!!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
