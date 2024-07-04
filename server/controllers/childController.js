const Child = require('../models/childModel')
const User = require('../models/userModel')

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

// read child where
const getChildrenWhereID = async (req, res) => {
  const user = await User.findOne({email: req.params.email});
  if(!user){

    res.status(500).json({ error: `User ${req.params.id} does not exist.` });

  } else {
    try{
      const children = await Child.find({user_id: user._id});

      res.status(200).json(children); // Send the retrieved documents as JSON response
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve children.' });
    }
  }  
}

// delete child

module.exports = {createChild, getChildren, getChildrenWhereID}