const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
  try{
    const user = await User.login(req.body)

    // create token
    const token = createToken(user._id)

    res.status(200).json({ email: user.email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup user
const signupUser = async (req, res) => {
  try{
    const user = await User.signup(req.body)

    // create token
    const token = createToken(user._id)

    res.status(200).json({ email: user.email, token})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {signupUser, loginUser}