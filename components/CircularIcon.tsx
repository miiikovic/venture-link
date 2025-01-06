import React from "react";

interface CircularIconProps {
  imageUrl: string; // URL of the image to display
  size?: number; // Optional size of the icon, default is 50px
  altText?: string; // Optional alt text for accessibility
}

const CircularIcon: React.FC<CircularIconProps> = ({ imageUrl, size = 18, altText = "icon" }) => {
  return (
    <div
      className="rounded-full bg-contain bg-center border-solid border-2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${imageUrl})`
      }}
      role="img"
      aria-label={altText}
    ></div>
  );
};

export default CircularIcon;
