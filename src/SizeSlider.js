// SizeSlider.js
import React, { useEffect, useState } from "react";
import "./App.css";

const sliderValues = [
  [-25, -20, -15, -10, -5],
  [100, 110, 120, 130, 140],
];

const getRandomSliderValues = (randomSize) => {
  console.log("randomsize", randomSize);
  const minValue =
    sliderValues[0][Math.floor(Math.random() * sliderValues[0].length)];
  let maxValue =
    sliderValues[1][Math.floor(Math.random() * sliderValues[1].length)];
  console.log(maxValue);
  if (randomSize > 54 && randomSize < 72) {
    console.log("big");
    maxValue = maxValue + 24;
  } else if (randomSize >= 72) {
    console.log("bigger");
    maxValue = maxValue + 40;
  }
  console.log(maxValue);

  return { maxValue: maxValue, minValue: minValue };
};

const SizeSlider = ({ randomSize, setSliderValue }) => {
  const [internalSliderValue, setInternalSliderValue] = useState(50);
  const [sliderRange, setSliderRange] = useState([-10, 100]);

  useEffect(() => {
    const slidersss = getRandomSliderValues(randomSize);
    setSliderRange(slidersss);

    setInternalSliderValue(
      Math.floor(
        Math.random() * (slidersss.maxValue - slidersss.minValue + 1)
      ) + slidersss.minValue
    );
  }, [randomSize]);

  const handleSliderChange = (e) => {
    e.stopPropagation();
    const value = parseInt(e.target.value, 10);
    setInternalSliderValue(value);
    setSliderValue(value);
  };

  return (
    <div className="vertical-wrapper">
      <input
        type="range"
        min={sliderRange.minValue}
        max={sliderRange.maxValue}
        step="1"
        orient="vertical"
        value={internalSliderValue}
        onChange={handleSliderChange}
        className="styledSlider"
      />
    </div>
  );
};

export default SizeSlider;
