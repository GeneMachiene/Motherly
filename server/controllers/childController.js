const Child = require('../models/childModel')

// create child
const createChild = async (req, res) => {
  try{
    await Child.add(req.body)

    res.status(200).json({ message: "Child Added Successfully!" })
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// read child
const getChildren = async (req, res) => {
  try {
    // Retrieve all documents from the Child collection
    const children = await Child.find();  

    res.status(200).json(children); // Send the retrieved documents as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve children.' });
  }
}

// update child

// delete child

module.exports = {createChild, getChildren}