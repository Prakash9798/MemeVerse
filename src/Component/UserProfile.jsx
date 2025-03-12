import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Meme Lover!",
    profilePic: "https://cdn.pixabay.com/photo/2020/05/24/22/03/vendetta-5216423_640.jpg"
  });
  
  const [uploadedMemes, setUploadedMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);

  // Load data from local storage on mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) setProfile(savedProfile);

    const savedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    setUploadedMemes(savedMemes);

    const savedLikedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
    setLikedMemes(savedLikedMemes);
  }, []);

  // Handle profile update
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    const updatedProfile = { ...profile, [name]: value };
    setProfile(updatedProfile);
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
  };

  return (
    <div className="p-5">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img src={profile.profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
        <div>
          <input 
            type="text" 
            name="name"
            value={profile.name} 
            onChange={handleProfileChange} 
            className="text-xl font-bold border-b p-1"
          />
          <textarea 
            name="bio" 
            value={profile.bio} 
            onChange={handleProfileChange} 
            className="border p-1 mt-2 w-full"
          />
        </div>
      </div>

      {/* Uploaded Memes */}
      <h2 className="text-lg font-semibold mt-5">Uploaded Memes</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {uploadedMemes.length > 0 ? (
          uploadedMemes.map((meme, index) => (
            <img key={index} src={meme} alt="Uploaded Meme" className="rounded-lg w-full" />
          ))
        ) : (
          <p>No memes uploaded yet.</p>
        )}
      </div>

      {/* Liked Memes */}
      <h2 className="text-lg font-semibold mt-5">Liked Memes</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {likedMemes.length > 0 ? (
          likedMemes.map((meme, index) => (
            <img key={index} src={meme} alt="Liked Meme" className="rounded-lg w-full" />
          ))
        ) : (
          <p>No liked memes yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
