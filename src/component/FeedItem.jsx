


import React from "react";

const FeedItem = ({ title, excerpt, image, largeImage, setSelectedImage }) => {
  const handleImageClick = () => {
    setSelectedImage(largeImage); // Set the large image URL when clicked
  };

  return (
    <div style={{backgroundColor:"#00000"}} className="feed-item">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <img
        src={image}
        alt={title}
        onClick={handleImageClick} // Set the selected image on click
        loading="lazy"
      />
    </div>
  );
};

export default FeedItem;

