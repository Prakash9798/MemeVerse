import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const MemeDetails = () => {
  const { id } = useParams(); // Get meme ID from URL
  const [meme, setMeme] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch Meme Data (Mock Data for Now)
  useEffect(() => {
    const memeData = {
      id,
      title: "Funny Meme",
      image: "https://i.ytimg.com/vi/FuN9H-w7UMg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrfxrmoCSCb0h5zwWJTzixGcl9ow",
      description: "This is a meme description."
    };
    setMeme(memeData);

    // Load likes & comments from local storage
    setLikes(Number(localStorage.getItem(`likes-${id}`)) || 0);
    setComments(JSON.parse(localStorage.getItem(`comments-${id}`)) || []);
  }, [id]);

  // Like Button Handler
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes);
  };

  // Comment Submission Handler
  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setNewComment(""); // Clear input
  };

  if (!meme) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">{meme.title}</h1>
      <img src={meme.image} alt={meme.title} className="w-full max-w-md rounded-lg" />
      <p className="mt-2">{meme.description}</p>

      {/* Like Button */}
      <motion.button 
        onClick={handleLike} 
        className="mt-3 p-2 bg-blue-500 text-white rounded"
        whileTap={{ scale: 0.8 }}
      >
        👍 Like ({likes})
      </motion.button>

      {/* Comments Section */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Comments</h2>
        <ul className="mt-2">
          {comments.map((comment, index) => (
            <li key={index} className="border-b py-1">{comment}</li>
          ))}
        </ul>

       

        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="mt-2 p-2 border rounded w-full"
        />
        <button onClick={handleCommentSubmit} className="mt-2 p-2 bg-green-500 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default MemeDetails;