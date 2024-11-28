import React, { useState } from "react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      imageLink:
        "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/7526013/pexels-photo-7526013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/7615457/pexels-photo-7615457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-[400px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={imageLink}
              alt="gallery-photo"
              onClick={() => setSelectedImage(imageLink)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              className="rounded-lg max-w-full max-h-[80vh] object-contain"
              src={selectedImage}
              alt="Selected"
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
