import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode";

const Leaderboard = () => {
  const [memes, setMemes] = useState([]);
  console.log(memes)


  useEffect(() => {
    let storedMemes = [];
    //  console.log(Object.keys(localStorage))

    // Retrieve all keys from localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("likes-")) {
        const memeId = key.replace("likes-", ""); // Extract meme ID
        const likes = JSON.parse(localStorage.getItem(key)) || 0;
        const comments = JSON.parse(localStorage.getItem(`comments-${memeId}`)) || [];

        storedMemes.push({
          id: memeId,
          name: `Meme ${memeId}`, // Placeholder (Replace with actual meme title if stored)
          likes: likes,
          comments: comments.length,
        });
      }
    });

    // Sort by likes in descending order & keep top 10
    const sortedMemes = storedMemes.sort((a, b) => b.likes - a.likes).slice(0, 10);

    setMemes(sortedMemes);
  }, []);

  return (
    <div className="p-4 text-white">
        <DarkMode/>
      <h2 className="text-3xl font-bold mb-4">🏆 Leaderboard</h2>

      {memes.length === 0 ? (
        <p>No memes found!</p>
      ) : (
        memes.map((meme, index) => (
          <div key={meme.id} className={`p-3 mb-2 rounded-lg ${index < 3 ? "bg-red-900" : "bg-gray-800"}`}>
            <span className="font-bold text-lg">
              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏆"} {meme.name}
            </span>
            <p>{meme.likes} likes • {meme.comments} comments</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Leaderboard;
