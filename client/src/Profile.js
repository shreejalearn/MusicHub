import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import bgprofile from './assets/bgprofile.png';
// import profilebg2 from './assets/profilebg2.png';
import bg_profile2 from './assets/bg_profile2.png';
import profileheading from './assets/profileheading.png';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [newValue, setNewValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

return (
  <div className="bg-yellow2-resonate min-h-screen flex flex-col relative overflow-x-hidden">
    <div className="relative">
  <img src={bg_profile2} alt="Profile Background" className="w-full" />
  <img src={profileheading} alt="Profile Heading" className="absolute top-[12%] left-[17%] right-0 bottom-0 flex items-center w-[62rem] z-20" />
  {/* <h1 className='absolute top-[50%] left-[45%] right-0 bottom-0 flex items-center font-CG_Reg text-[#CD7417]'>--------------------------</h1> */}
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
    </div>
  </div>
);
};

export default Profile;
