import React, { useState, useEffect } from "react";
import "./App.css";

const shortTexts = ["Lorem ipsum dolor sit amet consectetur"];
const mediumTexts = [
  "Lorem ipsum dolor sit amet consectetur. Imperdiet tellus etiam velit integer tristique sed viverra nunc vel. Dictumst sollicitudin orci arcu fames tortor faucibus. Platea tincidunt at hendrerit imperdiet scelerisque. Senectus suscipit elementum blandit euismod.",
];
const longTexts = [
  "Lorem ipsum dolor sit amet consectetur. Ornare magna fermentum turpis aliquam sed sed. Euismod purus sem lacus auctor nibh hendrerit volutpat lacus. Tincidunt sed vel ultricies cras eu rhoncus. Lectus ornare ultricies faucibus consequat risus neque ultrices vestibulum sociis. Vitae id mattis quis sit a lacus hendrerit. Senectus sem hac et risus facilisis leo. Scelerisque praesent egestas faucibus neque morbi pharetra semper eu. Libero arcu sem vel cursus in lobortis egestas. Mi quis semper donec parturient vulputate ipsum senectus egestas. Risus purus lectus fringilla euismod.",
];

const getRandomListItem = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

export default function App() {
  const [activeDiv, setActiveDiv] = useState(null);
  const [randomSize, setRandomSize] = useState(0);
  const [exampleText, setExampleText] = useState(
    "Lorem ipsum dolor sit amet consectetur"
  );

  useEffect(() => {
    // Function to generate a random font size between 8 and 100
    const generateRandomFontSize = () => {
      return Math.floor(Math.random() * (100 - 8 + 1)) + 8;
    };

    // Set the random font size when the component mounts
    setRandomSize(generateRandomFontSize());
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    if (randomSize < 20) {
      setExampleText(getRandomListItem(longTexts));
    } else if (randomSize >= 20 && randomSize < 48) {
      setExampleText(getRandomListItem(mediumTexts));
    } else {
      setExampleText(getRandomListItem(shortTexts));
    }
  }, [randomSize]);

  const handleDivClick = (divId) => {
    setActiveDiv((prevActiveDiv) => (prevActiveDiv === divId ? null : divId));
  };
  const handleNextButtonClick = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="content">
        <ActiveDiv
          divId={1}
          isActive={activeDiv === 1}
          onClick={() => handleDivClick(1)}
          randomSize={randomSize}
        >
          {exampleText}
        </ActiveDiv>
      </div>
      <div className="nextDiv">
        <button className="styledButton" onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
}

const ActiveDiv = ({ children, divId, isActive, onClick, randomSize }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [fontWeight, setFontWeight] = useState(500);

  const fontWeights = [100, 500, 900];

  useEffect(() => {
    setFontWeight(getRandomListItem(fontWeights));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSliderChange = (event) => {
    event.stopPropagation();

    setSliderValue(parseInt(event.target.value, 10));
  };

  const handleClick = () => {
    onClick(divId);
  };

  const textStyle = {
    lineHeight: `${sliderValue}px`, // Adjust line height based on the slider value
    fontSize: `${randomSize}px`,
    fontWeight: `${fontWeight}`,
  };

  return (
    <div className="activeDiv">
      <div onClick={handleClick}>
        <span style={textStyle}>{children}</span>
      </div>

      <div>
        <input
          type="range"
          min="-10"
          max="100"
          step="1"
          orient="vertical"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

{
  /* 
/*
<ActiveDiv
            divId={2}
            isActive={activeDiv === 2}
            onClick={() => handleDivClick(2)}
          >
            Aliquet arcu sollicitudin bibendum gravida orci dolor sed nibh
            sagittis. Lobortis integer pulvinar scelerisque proin. Enim varius
            convallis duis enim eros arcu. Arcu hac arcu urna lectus gravida.
            Erat sagittis pharetra feugiat nulla. Egestas non pretium egestas
            fermentum. Bibendum pellentesque dictum nibh pellentesque sed cras
            diam. Libero erat magna massa eget eget auctor in. Sapien sed a
            pharetra nunc. Ut neque gravida sagittis felis nulla egestas eu
            commodo. Vitae platea nisl eu at eget imperdiet ante quam. Mauris
            ornare mattis egestas faucibus feugiat sed malesuada. Tellus arcu
            cras est aliquet faucibus id id pharetra.
          </ActiveDiv>
        </div>
        <div className="texts">
          <h3 className="headlineContent">
            Lorem ipsum dolor sit amet consectetur. Posuere purus nisi aliquet
            aliquam.{" "}
          </h3>
          <p className="bodyContent">
            Amet urna lorem nisi amet tellus euismod id fames. Mus tellus
            pellentesque sed cursus feugiat mauris nulla. Viverra nulla est duis
            faucibus dui scelerisque. At elit vel nec elit etiam. Eu ac tellus
            auctor elit sem molestie in nunc. Sed vestibulum nec eleifend
            facilisis dolor sagittis proin. Duis commodo sit orci erat eget.
            Amet euismod mauris et fermentum scelerisque in. Nibh mattis justo
            at risus. Enim velit egestas elementum viverra nisl nisl velit. Nunc
            viverra sed dis tellus ullamcorper lectus adipiscing. Sit dignissim
            faucibus malesuada platea volutpat leo. Posuere maecenas cursus
            morbi tellus elementum bibendum lectus rutrum.
          </p>
        </div>
      </div> */
}
