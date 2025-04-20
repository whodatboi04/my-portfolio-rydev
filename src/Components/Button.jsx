import React from 'react';

export default function Button({ link }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-10 bg-mainColor m-auto w-52 p-2 rounded-full flex justify-center items-center text-tWhite"
    >
      Visit Site
    </button>
  );
}
