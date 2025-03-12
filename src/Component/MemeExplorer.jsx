import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { debounce } from "lodash";

const MemeExplorer = () => {
  const [memes, setMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("trending"); // Default category
  const [sortBy, setSortBy] = useState("likes"); // Default sorting

  useEffect(() => {
    fetchMemes();
  }, [filter, sortBy]);

  // Fetch memes function
  const fetchMemes = async () => {
    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      let data = response.data.data.memes;

      // Apply filtering
      if (filter === "classic") {
        data = data.filter((meme) => meme.height > meme.width); // Example: Classic memes are taller
      } else if (filter === "new") {
        data = data.reverse(); // Newest memes first (dummy logic)
      }

      // Apply sorting
      if (sortBy === "likes") {
        data = data.sort((a, b) => b.likes - a.likes); // Dummy likes sorting
      } else if (sortBy === "date") {
        data = data.sort((a, b) => b.created_at - a.created_at); // Assuming API has dates
      }

      setMemes(data.slice(0, page * 10)); // Pagination effect
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
  };

  // Load more memes when scrolled to the bottom
  const loadMoreMemes = () => {
    setPage((prevPage) => prevPage + 1);
    fetchMemes();
  };

  // Debounced Search Function
  const handleSearch = useCallback(
    debounce((searchTerm) => {
      setQuery(searchTerm);
      const filteredMemes = memes.filter((meme) =>
        meme.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMemes(filteredMemes);
    }, 500),
    [memes]
  );

  return (
    <div className="p-5 min-h-screen bg-gray-100 text-black w-full">
      <h2 className="text-3xl font-bold mb-4">Meme Explorer</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search memes..."
        className="p-2 border rounded w-full mb-4"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {["trending", "new", "classic", "random"].map((category) => (
          <button
            key={category}
            className={`p-2 rounded ${filter === category ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="likes">Likes</option>
          <option value="date">Date</option>
          <option value="comments">Comments</option>
        </select>
      </div>

      {/* Meme List with Infinite Scroll */}
      <InfiniteScroll
        dataLength={memes.length}
        next={loadMoreMemes}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {memes.map((meme) => (
            <div key={meme.id} className="bg-white p-3 rounded-lg shadow-lg">
              <img src={meme.url} alt={meme.name} className="rounded-md w-full" />
              <h3 className="text-center font-bold mt-2">{meme.name}</h3>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MemeExplorer;
