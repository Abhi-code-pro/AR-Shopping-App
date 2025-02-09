import "@google/model-viewer";
import React from "react";

function ModelViewer({ modelPaths = [], onClose }) {
  if (!Array.isArray(modelPaths) || modelPaths.length === 0) {
    return <p>No models available</p>;
  }

  return (
    <div className="model-viewer-container">

      {modelPaths.map((path, index) => (
        <model-viewer
          key={index}
          src={path}
          alt={`3D Model ${index + 1}`}
          ar
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "400px" }}
        />
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  );
}


export default ModelViewer;
