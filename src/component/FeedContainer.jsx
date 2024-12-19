
import React, { useState, useEffect, useRef } from "react";
import FeedItem from "./FeedItem";
import "../styles/Feed.css";

const FeedContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image for popup

  const page = useRef(1); // Track the current page for API request
  const apiKey = "6WFoD9VjGtRV8Cy6FGNNV8kSaHxmtcOVGyhVLWo3UhQHChEnmPSvIsGS"; // Replace with your Pexels API Key

  useEffect(() => {
    // Load initial posts when the component mounts
    loadMorePosts();
  }, []);

  const loadMorePosts = async () => {
    if (loading) return; // Avoid duplicate requests if already loading
    setLoading(true);
    setError(false);

    try {
      // Fetch data from Pexels API
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${page.current}&per_page=5`,
        {
          headers: {
            Authorization: apiKey, // Ensure the correct authorization header
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      console.log(data); // Debugging: Log the API response to see the structure

      const newPosts = data.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt,
        user: photo.photographer,
        image: photo.src.medium, // Use 'src.medium' for medium-sized images
        largeImage: photo.src.large, // Use 'src.large' for larger images
      }));

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      page.current += 1; // Increment page for the next load
    } catch (err) {
      console.error(err); // Log error for debugging
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{backgroundColor:"#B0B2C6"}} className="feed-container">
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          title={post.title}
          excerpt={post.user}
          image={post.image}
          largeImage={post.largeImage} // Pass the large image URL to FeedItem
          setSelectedImage={setSelectedImage}
        />
      ))}

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Failed to load posts. Try again!</div>}

      <button className="next-button" onClick={loadMorePosts}>
        Next
      </button>

      {selectedImage && (
        <div className="image-popup">
          <div className="popup-content">
            <img src={selectedImage} alt="Selected" />
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              ×
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedContainer;
