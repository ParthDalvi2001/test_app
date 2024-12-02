import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

const CameraOrGallery = () => {
  const [image, setImage] = useState(null);
  const [isCameraMode, setIsCameraMode] = useState(false);
  const webcamRef = useRef(null);

  // Capture image from webcam
  const captureImage = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      setImage(capturedImage);
    }
  };

  // Handle image selection from gallery
  const handleGallerySelection = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Select from Gallery or Capture</h1>

      {/* Toggle Options */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setIsCameraMode(true)}>Capture via Camera</button>
        <button onClick={() => setIsCameraMode(false)}>Select from Gallery</button>
      </div>

      {/* Camera Mode */}
      {isCameraMode ? (
        <div>
          <Webcam
            videoConstraints={{ facingMode: "environment" }}
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            style={{
              width: "100%",
              maxHeight: "300px",
              border: "1px solid black",
            }}
          />
          <button onClick={captureImage} style={{ marginTop: "10px" }}>
            Capture Image
          </button>
        </div>
      ) : (
        // Gallery Mode
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleGallerySelection}
            style={{ marginBottom: "10px" }}
          />
        </div>
      )}

      {/* Display Selected or Captured Image */}
      {image && (
        <div>
          <h3>Selected/Captured Image:</h3>
          <img
            src={image}
            alt="Selected or Captured"
            style={{ width: "500px", maxHeight: "300px", border: "1px solid black" }}
          />
        </div>
      )}
    </div>
  );
};

export default CameraOrGallery;
