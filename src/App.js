import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (divId) => {
    setActiveDiv((prevActiveDiv) => (prevActiveDiv === divId ? null : divId));
  };

  return (
    <div className="App">
      <div className="content">
        <div className="texts">
          <ActiveDiv
            divId={1}
            isActive={activeDiv === 1}
            onClick={() => handleDivClick(1)}
          >
            <span className="headlineContent">
              Urna adipiscing amet sit justo nisl. Fames viverra at id id.{" "}
            </span>
          </ActiveDiv>
          <ActiveDiv
            divId={2}
            isActive={activeDiv === 2}
            onClick={() => handleDivClick(2)}
          >
            <span className="bodyContent">
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
            </span>
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
      </div>
    </div>
  );
}

const ActiveDiv = ({ children, divId, isActive, onClick }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    event.stopPropagation();

    setSliderValue(parseInt(event.target.value, 10));
  };

  const handleClick = () => {
    onClick(divId);
  };

  return (
    <div className={`activeDiv ${isActive ? "active" : ""}`}>
      <div onClick={handleClick}>{children}</div>
      {isActive && (
        <div className="sliderContainer">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
};
