import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg_profile2 from './assets/bg_profile2.png';
import profileheading from './assets/profileheading.png';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [newValue, setNewValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

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
    console.log("file changed");
    console.log(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setShowConfirmPopup(true); // Show the confirm popup
    } else {
      console.error('No file selected');
    }
  };
  const updateUserProfilePicture = (filePath) => {
    // Update the profile picture in the user profile state
    setUserProfile((prevUserProfile) => ({
      ...prevUserProfile,
      pfp: filePath,
    }));
    const storedUsername = localStorage.getItem('username');
    const data = {
      username: storedUsername,
      newValue: filePath, // If this is the file data
    };
    // Send a request to update the profile picture in the database
    axios.post('http://localhost:5000/editprofilepicture', filePath, storedUsername)
    
    .then(() => {
      console.log('Profile picture updated successfully');
    })
    .catch((error) => {
      console.error('Error updating profile picture:', error);
    });
  };
  
  const confirmUpload = () => {
    const storedUsername = localStorage.getItem('username');


    const formData = new FormData();
    formData.append('file', file);
    const data = {
      username: storedUsername,
      newValue: formData, // If this is the file data
    };
    
    axios.post('http://localhost:5000/pfpupload', formData, storedUsername)


      .then(() => {
        // After successfully uploading the file, update the profile picture in the state and database
        const filePath = `/profilePictures/${file.filename}`;
        updateUserProfilePicture(filePath);
        setFile(null); // Clear the uploaded file
        setShowConfirmPopup(false); // Hide the confirm popup
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };
  

  const cancelUpload = () => {
    setFile(null);
    setShowConfirmPopup(false); // Hide the confirm popup
  };

  useEffect(() => {
    // Fetch the user profile again to get the latest profile picture
    const storedUsername = localStorage.getItem('username');
  
    axios.post('http://localhost:5000/profile', { username: storedUsername })
      .then((response) => {
        setUserProfile(response.data.user);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, [file]); // Trigger the effect whenever the file state changes
  

  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="relative">
          
      <div>
        <div>
          {/* <img src={bg_profile2} alt="Profile Background" className="w-full" />
          <img src={profileheading} alt="Profile Heading" className="absolute top-[12%] left-[17%] right-0 bottom-0 flex items-center w-[62rem] z-20" /> */}
          {userProfile && (
            <div className='mt-[-15%]'>
              {/* Display user information */}
              {Object.keys(userProfile).map((field) => (
                <div
                  key={field}
                  className="flex items-center space-x-1 font-CG_Reg text-[#CD7417] overflow-x-hidden justify-center"
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
                
              ))}
            </div>
            
          )}
          <div className="text-3xl text-[#679B89] hover:text-[#C2899E] transition-colors flex items-center space-x-1 font-CG_Reg overflow-x-hidden justify-center">
          <label>Profile Picture: </label>
          <input type="file" id="fileInput" onChange={handleFileChange} />
          </div>
          <div className="text-3xl text-[#679B89] hover:text-[#C2899E] transition-colors flex items-center space-x-1 font-CG_Reg overflow-x-hidden justify-center">
            {file ? (
              <div>
                <button
                  onClick={() => {
                    setFile(null);
                  }}
                  className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded mr-2"
                >Clear</button>

                <button
                  onClick={handleUpload}
                  className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded"
                >Upload</button>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>

      {/* Confirm/Cancel Popup */}
      {showConfirmPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl text-black-resonate mb-4">
              Are you sure you want to upload the file?
            </p>
            <div className="flex justify-end">
              <button
                onClick={confirmUpload}
                className="mr-4 text-[#9F9D81] hover:text-green-700 font-semibold"
              >
                Confirm
              </button>
              <button
                onClick={cancelUpload}
                className="text-red-700 hover:text-red-900 font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

        </div>
        
      </div>
    </div>
  );
};

export default Profile;
