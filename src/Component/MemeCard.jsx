import React, { useState, useEffect } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const MemeCard = ({ meme }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  // Load Likes & Comments from Local Storage
  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes-${meme.id}`);
    const storedComments = localStorage.getItem(`comments-${meme.id}`);
    if (storedLikes) setLikes(JSON.parse(storedLikes));
    if (storedComments) setComments(JSON.parse(storedComments));
  }, [meme.id]);

  // Handle Like Button Click
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${meme.id}`, JSON.stringify(newLikes));
  };

  // Handle Adding Comment
  const handleComment = () => {
    const newComment = prompt("Enter your comment:");
    if (!newComment || !newComment.trim()) return; // Prevent empty comments

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${meme.id}`, JSON.stringify(updatedComments));
  };

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg text-white">
     
      {/* <img src={meme.image} alt={meme.title} className="w-full h-auto rounded-lg" />

      {/* Meme Title */}
      {/* <h3 className="mt-2 text-lg font-bold">{meme.title}</h3> */}

      {/* Like, Comment, Share Buttons */}
      <div className="flex justify-between mt-2 text-lg">
        <button onClick={handleLike} className="flex items-center gap-1">
          <FaHeart className="text-red-500" /> {likes}
        </button>
        <button onClick={handleComment} className="flex items-center gap-1">
          <FaComment className="text-blue-400" /> {comments.length}
        </button>
        <button onClick={() => alert("Share functionality coming soon!")} className="flex items-center gap-1">
          <FaShare className="text-green-400" />
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
