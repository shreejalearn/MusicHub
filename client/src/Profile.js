import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bgProfile3 from './assets/bgProfile3.png';
import profileheading from './assets/profileheading.png';
import profilePictures from './profilePictures/profilePictures'; // Import the profilePictures object
import lineDesign from './assets/linedesign.png';

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
    <div className="bg-yellow-resonate min-h-screen flex flex-col items-center relative" style={{ backgroundImage: `url(${bgProfile3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex items-center flex-col mt-[14%]">
        <div className='ml-[30%]'>
          <div className="mt-[-18%] items-center">
            <img src={profileheading} alt="Profile Heading" className="flex items-center w-[300rem] mt-[-15%] ml-[-25%]" />
            <img src={lineDesign} alt="Line Design" className="flex items-center w-[500rem] ml-[-20%] mt-[-40%]" />
            <div className="mt-[-25%] ml-[7%]">
              {userProfile && (
                <img
                  src={profilePictures[userProfile.pfp]}
                  alt="Profile"
                  className="rounded-full h-40 items-center ml-[12%]"
                />
              )}
            </div>
          </div>

          {userProfile && (
            <div className='mt-5 w-[400px] text-center ml-[7%]'>
              {/* Display user information */}
              {Object.keys(userProfile).map((field) => {
                // Skip the 'pfp' field
                if (field === 'pfp') {
                  return null; // Skip rendering 'pfp'
                }

                return (
                  <div
                    key={field}
                    className="flex items-center space-x-1 font-CG_Reg text-[#CD7417] overflow-x-hidden justify-center my-[3%]" // Added 'my-3' for vertical spacing
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
{/*  */}
          <div className="justify-center items-center space-x-1 mt-5 bg-[#D6C1C1] rounded-lg shadow-lg p-8 w-full max-w-md ml-[5%] mb-[10%]">
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
  );

};

export default Profile;
