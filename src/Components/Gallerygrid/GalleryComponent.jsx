import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

export function GalleryComponent({ url, alt, label }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <img
        className="h-[400px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
        src={url}
        alt={alt}
        onClick={handleImageClick}
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-60"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
          >
            <img
              src={url}
              alt={alt}
              className="w-full h-[600px] object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-4 py-2"
              onClick={handleCloseModal}
            >
              <CgClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
