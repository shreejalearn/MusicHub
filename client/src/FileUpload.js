import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post('/upload', formData)
        .then(response => {
          const filePath = response.data.filePath;
          axios.post('/api/saveFilePath', { filePath })
            .then(() => {
              console.log('File path saved to database');
            })
            .catch(error => {
              console.error('Error saving file path:', error);
            });
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
