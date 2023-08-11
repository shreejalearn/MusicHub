const path = require('path');

const upload = (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const uploadedFile = req.files.file;
    const uploadPath = path.join(__dirname, '../uploads', uploadedFile.name);

    uploadedFile.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error uploading file' });
      }

      const filePath = `/uploads/${uploadedFile.name}`;
      return res.status(200).json({ filePath });
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { upload };
