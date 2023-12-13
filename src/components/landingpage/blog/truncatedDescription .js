import React, { useState } from 'react';

const TruncatedDescription = ({ description, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

//   const truncatedText = isExpanded ? description : description.slice(0, maxLength);
  const truncatedText = isExpanded ? description : `${description.slice(0, maxLength)}${description.length > maxLength ? '...' : ''}`;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{truncatedText}</p>
      {description.length > maxLength && (
        <span className="show-more-btn" onClick={toggleExpansion}>
          <button className="border-0 fw-bold bg-white">
            {isExpanded ? 'Read Less ←' : 'Read More →'}
          </button>
        </span>
      )}
    </div>
  );
};

export default TruncatedDescription;
