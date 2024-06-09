const Child = require('../models/childModel')

// create child
const createChild = async (req, res) => {
  try{
    await Child.add(req.body)

    res.status(200).json({ message: "Child Adedd Successfully!" })
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// read child

// update child

// delete child

module.exports = {createChild}