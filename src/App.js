import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [activeDiv, setActiveDiv] = useState(null);
  const [randomSize, setRandomSize] = useState(0);

  useEffect(() => {
    // Function to generate a random font size between 8 and 100
    const generateRandomFontSize = () => {
      return Math.floor(Math.random() * (100 - 8 + 1)) + 8;
    };

    // Set the random font size when the component mounts
    setRandomSize(generateRandomFontSize());
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
          Urna adipiscing amet sit justo nisl. Fames viverra at id id.
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

  const handleSliderChange = (event) => {
    event.stopPropagation();

    setSliderValue(parseInt(event.target.value, 10));
  };

  const handleClick = () => {
    onClick(divId);
  };

  const textStyle = {
    lineHeight: `${sliderValue}%`, // Adjust line height based on the slider value
    fontSize: `${randomSize}px`,
  };

  return (
    <div className={`activeDiv ${isActive ? "active" : ""}`}>
      <div onClick={handleClick}>
        <span style={textStyle}>{children}</span>
      </div>
      {isActive && (
        <div className="vertical-wrapper">
          <input
            type="range"
            min="100"
            max="500"
            step="10"
            orient="vertical"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </div>

        // <div className="sliderContainer">
        //   <input
        //     type="range"
        //     min="100"
        //     max="500"
        //     step="10"
        //     value={sliderValue}
        //     onChange={handleSliderChange}
        //     style={{ width: "100%" }}
        //   />
        // </div>
      )}
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
