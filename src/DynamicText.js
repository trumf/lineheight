// DynamicText.js
import React, { useEffect, useState } from "react";
import "./App.css";

const DynamicText = ({ children, randomSize, sliderValue, getRandomFont }) => {
  const [fontWeight, setFontWeight] = useState(500);
  const [selectedFont, setSelectedFont] = useState("Inter, sans-serif");

  useEffect(() => {
    const font = getRandomFont();
    setFontWeight(font.fontWeight);
    setSelectedFont(font.fontFamily);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const textStyle = {
    lineHeight: `${sliderValue}px`, // Adjust line height based on the slider value
    fontSize: `${randomSize}px`,
    fontFamily: selectedFont,
    fontWeight: fontWeight,
    overflow: "hidden",
  };

  return (
    <div className="dynamicText">
      <span style={textStyle}>{children}</span>
    </div>
  );
};

export default DynamicText;
