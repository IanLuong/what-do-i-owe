const User = require("../models/userModel")

//login
const loginUser = async (req, res) => {
  res.json({ message: "login user" })
}

//signup
const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.signup(email, password)

    res.status(200).json({ email, user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { loginUser, signupUser }