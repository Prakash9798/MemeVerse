import React, { useState } from "react";

const MemeUpload = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  // Handle Caption Input
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  // Handle Meme Submission
  const handleSubmit = () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }
    console.log("Meme Uploaded:", { image, caption });
    alert("Meme Uploaded Successfully!");
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen w-full">
      <h2 className="text-2xl font-bold mb-4">Upload Your Meme</h2>

      {/* File Input */}
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

      {/* Caption Input */}
      <textarea
        placeholder="Enter your funny caption..."
        value={caption}
        onChange={handleCaptionChange}
        className="p-2 border rounded-md w-80 h-20 mb-4"
      ></textarea>

      {/* Meme Preview */}
      {image && (
        <div className="relative mb-4">
          <img src={image} alt="Meme Preview" className="w-80 rounded-lg shadow-lg" />
          <p className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 text-xl">
            {caption}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload Meme
      </button>
    </div>
  );
};

export default MemeUpload;
