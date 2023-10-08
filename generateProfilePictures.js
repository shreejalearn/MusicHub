// generateProfilePictures.js

const fs = require('fs');
const path = require('path');

// Define the directory where your profile pictures are located
const profilePicturesDir = './client/src/profilePictures';

// Read the files in the directory
const files = fs.readdirSync(profilePicturesDir);

// Filter files with allowed extensions (e.g., png, jpg, jpeg, gif, svg)
const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
const imageFiles = files.filter((file) =>
  allowedExtensions.includes(path.extname(file).toLowerCase())
);

// Generate the export statements dynamically
const exportStatements = imageFiles
  .map((file) => {
    const filenameWithoutExtension = path.basename(file, path.extname(file));
    return `${filenameWithoutExtension}: require('./${file}'),`;
  })
  .join('\n');

// Write the export statements to profilePictures.js
const profilePicturesFile = path.join(__dirname, './client/src/profilePictures/profilePictures.js');
fs.writeFileSync(profilePicturesFile, ('const profilePictures = {'+exportStatements+'}; \nexport default profilePictures;'));

console.log('profilePictures.js generated successfully.');
