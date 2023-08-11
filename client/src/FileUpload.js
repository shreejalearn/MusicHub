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

      axios.post('/api/upload', formData)
        .then(response => {
          console.log(response.data.message);
          // Handle success or show a success message
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          // Handle error or show an error message
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
