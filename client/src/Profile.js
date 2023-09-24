import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg_profile2 from './assets/bg_profile2.png';
import profileheading from './assets/profileheading.png';
import profilePictures from './profilePictures/profilePictures'; // Import the profilePictures object

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [newValue, setNewValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Get the username from localStorage
    const storedUsername = localStorage.getItem('username');

    // Fetch user profile based on the username
    axios.post('http://localhost:5000/profile', { username: storedUsername })
      .then(response => {
        setUserProfile(response.data.user);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  const handleEdit = (field) => {
    setEditingField(field);
    setNewValue('');
    setShowModal(true);
    setIsEditing(true);
  };

  const handleSubmitEdit = () => {
    if (!newValue) {
      return;
    }

    const endpoint = `/edit${editingField}`;
    const data = {
      username: userProfile.username,
      newValue
    };

    axios.post(`http://localhost:5000${endpoint}`, data)
      .then(response => {
        // Update user profile after successful edit
        setUserProfile(prevUserProfile => ({
          ...prevUserProfile,
          [editingField]: newValue
        }));

        // Close the modal and deactivate editing mode
        setShowModal(false);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error editing field:', error);
      });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const storedUsername = localStorage.getItem('username');
      const formData = new FormData();
      formData.append('file', file);
      formData.append('username', storedUsername);

      // Upload the profile picture to the server
      axios
        .post('http://localhost:5000/pfpupload', formData)
        .then((response) => {
          // Update the profile picture in the user profile state
          const filePath = response.data.filePath;
          setUserProfile((prevUserProfile) => ({
            ...prevUserProfile,
            pfp: filePath,
          }));
        })
        .catch((error) => {
          console.error('Error uploading profile picture:', error);
        });
    } else {
      console.error('No file selected');
    }
  };

  return (
    
    <div className="bg-yellow-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center flex-col mt-[14%]">
      <div>
          
          <div classname="mt-[-15%]">
            <img src={bg_profile2} alt="Profile Background" className="w-full" />
            <img src={profileheading} alt="Profile Heading" className="absolute top-[12%] left-[17%] right-0 bottom-0 flex items-center w-[62rem] z-20" />
            <div>{userProfile && (
              <img
                src={profilePictures[userProfile.pfp]}
                alt="Profile"
                className="mt-4 rounded-full w-40 h-40 items-center"
              />
            )}
            </div>
        
            
            {userProfile && (
  <div className='mt-[-15%]'>
    {/* Display user information */}
    {Object.keys(userProfile).map((field) => {
      // Skip the 'pfp' field
      if (field === 'pfp') {
        return null; // Skip rendering 'pfp'
      }

      return (
        <div
          key={field}
          className="flex items-center space-x-1 font-CG_Reg text-[#CD7417] overflow-x-hidden justify-center"
          style={{ overflowWrap: 'break-word' }}
        >
          {isEditing && editingField === field ? (
            <>
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <button
                onClick={handleSubmitEdit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <label
                htmlFor={field}
                className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}: {userProfile[field]}{' '}
                <button
                  onClick={() => handleEdit(field)}
                  className="text-[#679B89] hover:text-[#C2899E] transition-colors"
                >
                  Edit
                </button>
              </label>
            </>
          )}
        </div>
      );
    })}
  </div>
)}


            

            <div className="justify-center items-center space-x-1 mt-[5%] bg-[#D6C1C1] rounded-lg shadow-lg p-8 w-full max-w-md">
              <h1 className="text-3xl font-semibold mb-6 text-white">Upload Profile Picture</h1>
              <input type="file" id="fileInput" onChange={handleFileChange} />
              <button
                onClick={handleUpload}
                className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
