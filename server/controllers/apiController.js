const fs = require('fs')
var path = require('path');

// return file path
const getPath = async (req, res) => {
  try {
    res.status(200).json(req.file.path);

  } catch (err) {
    res.status(500).json(err);

  }
}

// return image
const getImage = async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(process.cwd(), 'uploads', filename);
  console.log(filePath);


  // Check if the file exists before attempting to send it
  await fs.promises.access(filePath);

  res.status(200).sendFile(filePath);
  try {

  } catch (err) {
    res.status(404).send('File not found');
  }
}


module.exports = {getImage, getPath}