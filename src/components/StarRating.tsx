import React from 'react';

interface StarRatingProps {
  rating: number; // Rating should be between 0 and 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Array of 5 elements, representing the stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;
    return (
      <div key={index} className="relative w-4 h-4">
        <div className="absolute inset-0 text-gray-300">
          {/* Empty star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 2l2.834 7.596h7.983L16.666 14.8l2.834 7.596L12 17.204l-7.5 5.192L7.334 14.8.183 9.596h7.983z" />
          </svg>
        </div>
        <div
          className="absolute inset-0 text-secondary overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          {/* Filled star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 2l2.834 7.596h7.983L16.666 14.8l2.834 7.596L12 17.204l-7.5 5.192L7.334 14.8.183 9.596h7.983z" />
          </svg>
        </div>
      </div>
    );
  });

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;
