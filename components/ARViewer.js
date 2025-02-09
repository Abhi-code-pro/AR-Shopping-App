// src/components/ARViewer.js
import React from "react";
// Add the code for your ARViewer here

const ARViewer = ({ modelPath }) => {
  return (
    <div>
      <model-viewer
    src="body.glb"
    alt="A realistic female 3D model"
    ar
    ar-modes="webxr scene-viewer quick-look"  
    environment-image="neutral"
    camera-controls
    auto-rotate
    camera-orbit="0deg 75deg 2.5m"
    field-of-view="45deg">
</model-viewer>

    </div>
  );
};

export default ARViewer;
