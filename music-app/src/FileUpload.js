import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('YOUR_UPLOAD_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ color: 'white' }} // Add this style
      />
      <button onClick={handleUpload}></button>
    </div>
  );
}

export default FileUpload;
