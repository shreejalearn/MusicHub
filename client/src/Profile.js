import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="bg-green-resonate min-h-screen flex flex-col relative overflow-x-hidden">
      <div className='overflow-x-hidden'>
        <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative overflow-x-hidden scroll-x-hidden">
          <h1 className="font-reborn text-5xl text-[#979D92] justify-center mt-[4%] z-20">Profile</h1>
          {userProfile && (
            <div>
              {/* Display user information */}
              <div className="flex items-center space-x-2 font-CG_Reg text-[#CD7417] overflow-x-hidden mt-[2.5%]">
                {isEditing && editingField === 'username' ? (
                  <>
                    <input
                      type="text"
                      value={newValue}
                      onChange={(e) => setNewValue(e.target.value)}
                    />
                    <button onClick={handleSubmitEdit}>Submit</button>
                  </>
                ) : (
                  <>
                    <label htmlFor="username" className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]">
                      Username: {userProfile.username} <button onClick={() => handleEdit('username')}>Edit</button>
                    </label>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-2 font-CG_Reg text-[#CD7417] overflow-x-hidden mt-[2.5%]">
                {isEditing && editingField === 'email' ? (
                  <>
                    <input
                      type="text"
                      value={newValue}
                      onChange={(e) => setNewValue(e.target.value)}
                    />
                    <button onClick={handleSubmitEdit}>Submit</button>
                  </>
                ) : (
                  <>
                    <label htmlFor="email" className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]">
                      Email: {userProfile.email} <button onClick={() => handleEdit('email')}>Edit</button>
                    </label>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-2 font-CG_Reg text-[#CD7417] overflow-x-hidden mt-[2.5%]">
                {isEditing && editingField === 'phone' ? (
                  <>
                    <input
                      type="text"
                      value={newValue}
                      onChange={(e) => setNewValue(e.target.value)}
                    />
                    <button onClick={handleSubmitEdit}>Submit</button>
                  </>
                ) : (
                  <>
                    <label htmlFor="phone" className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]">
                      Phone: {userProfile.phone} <button onClick={() => handleEdit('phone')}>Edit</button>
                    </label>
                  </>
                )}
              </div>
              <p>we can add more fields like insta or other social platforms later as methods of communication </p>
            </div>
          )}
          {/* ... Rest of the code ... */}
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
