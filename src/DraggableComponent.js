import React, { useState, useRef, useEffect } from "react";

const DraggableComponent = () => {
  const [value, setValue] = useState(50); // Initial value
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const deltaY = e.clientY - containerRect.top;

        // Calculate new value based on mouse position
        const newValue = Math.round((deltaY / containerRect.height) * 100);

        // Ensure the value stays within 0 to 100 range
        setValue(Math.min(100, Math.max(0, newValue)));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "20px", // Set your desired width
        height: "200px", // Set your desired height
        background: "#ddd",
        position: "relative",
        cursor: "ns-resize", // Show resize cursor
        left: "10rem",
        top: "5rem",
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%", // Center the draggable element
          transform: "translateX(-50%)",
          width: "50px", // Set your desired width
          height: "10px", // Set your desired height
          background: "#3498db",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%", // Center the draggable element
          transform: "translateX(-50%)",
          width: "20px", // Set your desired width
          height: "20px", // Set your desired height
          borderRadius: "50%",
          background: "#2c3e50",
          cursor: "grab", // Show grab cursor
          border: "2px solid #fff",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%", // Center the draggable element
          transform: "translateX(-50%)",
          width: "10px", // Set your desired width
          height: "10px", // Set your desired height
          background: "#e74c3c",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%", // Center the draggable element
          transform: "translateX(-50%)",
          width: "5px", // Set your desired width
          height: "5px", // Set your desired height
          background: "#f39c12",
        }}
      />
      {/* You can add more elements or styles as needed */}
    </div>
  );
};

export default DraggableComponent;
