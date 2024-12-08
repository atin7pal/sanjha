import React, { useEffect, useState } from "react";

export const Popup = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1090] h-full w-full">
      <div className="bg-white absolute top-[10%] rounded-lg shadow-lg w-[50%] h-[80vh] max-sm:w-full">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-gray-900 bg-black p-4 rounded-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};