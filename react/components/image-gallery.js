import { useState } from "react";

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="space-y-4">
      <ImageGallerySelected image={selected} />
      <ImageGalleryControls
        images={images}
        onSelect={setSelected}
        selected={selected}
      />
    </div>
  );
}

function ImageGallerySelected({ image }) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

function ImageGalleryControls({ images, onSelect, selected }) {
  return (
    <div className="flex space-x-4">
      {images.map((image, index) => (
        <button
          className={`px-2 overflow-hidden rounded-lg shadow-sm focus:shadow-focus focus:outline-none ${
            image === selected
              ? "border-2 border-gray-700"
              : "border border-gray-200 hover:border-gray-400"
          }`}
          onClick={() => onSelect(image)}
          key={index}
        >
          <img src={image.src} alt={image.alt} />
        </button>
      ))}
    </div>
  );
}
