import React, { useState, useEffect } from "react";
import "./App.css";
import {
  extraShortTexts,
  shortTexts,
  mediumTexts,
  longTexts,
} from "./ExampleTexts";
import DynamicText from "./DynamicText";
import SizeSlider from "./SizeSlider";

const getRandomListItem = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

const fontData = [
  ["Bitter, sans-serif", [100, 500, 900]],
  ["Bodoni Moda, serif", [400, 500, 900]],
  ["Chivo Mono, monospace", [100, 500, 900]],
  ["Dancing Script, cursive", [500]],
  ["Dosis, sans-serif", [200, 500, 800]],
  ["Hepta Slab, serif", [100, 500, 900]],
  ["IBM Plex Mono, monospace", [100, 500, 700]],
  ["Imbue, sans-serif", [100, 500, 900]],
  ["Inter Tight, sans-serif", [100, 500, 900]],
  ["Josefin Sans, sans-serif", [100, 400, 700]],
  ["Josefin Slab, serif", [100, 400, 700]],
  ["Montserrat, sans-serif", [100, 400, 900]],
  ["Oswald, sans-serif", [200, 400, 700]],
  ["Shantell Sans, sans-serif", [300, 500, 800]],
];

const TopTitle = ({ randomSize, sliderValue }) => {
  const heightRatio = Math.round((sliderValue / randomSize) * 100 * 10) / 10;

  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "/lineheightlogo.png"} alt="logo" />
      <h1>
        lineHeight:<span> {heightRatio}%</span>
      </h1>
    </div>
  );
};

const getRandomFont = () => {
  const randomFont = fontData[Math.floor(Math.random() * fontData.length)];
  const selectedFont = randomFont[0];
  const availableWeights = randomFont[1];
  const randomWeight =
    availableWeights[Math.floor(Math.random() * availableWeights.length)];

  return { fontFamily: selectedFont, fontWeight: randomWeight };
};

export default function App() {
  const [randomSize, setRandomSize] = useState(0);
  const [exampleText, setExampleText] = useState("");
  const [sliderValue, setSliderValue] = useState();

  const handleNextButtonClick = () => {
    // Reload the page
    window.location.reload();
  };

  useEffect(() => {
    // Function to generate a random font size between 8 and 100
    const generateRandomFontSize = () => {
      return Math.floor(Math.random() * (120 - 8 + 1)) + 8;
    };

    // Set the random font size when the component mounts
    setRandomSize(generateRandomFontSize());
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    if (randomSize < 18) {
      setExampleText(getRandomListItem(longTexts));
    } else if (randomSize >= 18 && randomSize < 40) {
      setExampleText(getRandomListItem(mediumTexts));
    } else if (randomSize >= 40 && randomSize < 72) {
      setExampleText(getRandomListItem(shortTexts));
    } else {
      setExampleText(getRandomListItem(extraShortTexts));
    }
  }, [randomSize]);

  return (
    <div className="App">
      <TopTitle randomSize={randomSize} sliderValue={sliderValue} />
      <div className="content">
        <DynamicText
          randomSize={randomSize}
          getRandomFont={getRandomFont}
          sliderValue={sliderValue}
        >
          {exampleText}
        </DynamicText>
      </div>
      <SizeSlider randomSize={randomSize} setSliderValue={setSliderValue} />
      <div className="nextDiv">
        <button className="styledButton" onClick={handleNextButtonClick}>
          Another one
        </button>
      </div>
    </div>
  );
}

// const ActiveDiv = ({ children, divId, onClick, randomSize }) => {
//   const [sliderValue, setSliderValue] = useState(50);
//   const [fontWeight, setFontWeight] = useState(500);
//   const [selectedFont, setSelectedFont] = useState("Inter, sans-serif");
//   const [sliderRange, setSliderRange] = useState([-10, 100]);

//   useEffect(() => {
//     const font = getRandomFont();
//     setFontWeight(font.fontWeight);
//     setSelectedFont(font.fontFamily);
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   useEffect(() => {
//     const slidersss = getRandomSliderValues(randomSize);
//     setSliderRange(slidersss);

//     setSliderValue(
//       Math.floor(
//         Math.random() * (slidersss.maxValue - slidersss.minValue + 1)
//       ) + slidersss.minValue
//     );
//   }, [randomSize]);

//   const handleSliderChange = (event) => {
//     event.stopPropagation();

//     setSliderValue(parseInt(event.target.value, 10));
//   };

//   const handleClick = () => {
//     onClick(divId);
//   };

//   const textStyle = {
//     lineHeight: `${sliderValue}px`, // Adjust line height based on the slider value
//     fontSize: `${randomSize}px`,
//     fontFamily: selectedFont,
//     fontWeight: fontWeight,
//   };

//   return (
//     <div className="activeDiv">
//       <div onClick={handleClick}>
//         <span style={textStyle}>{children}</span>
//       </div>

//       <div className="vertical-wrapper">
//         <input
//           type="range"
//           min={sliderRange.minValue}
//           max={sliderRange.maxValue}
//           step="1"
//           orient="vertical"
//           value={sliderValue}
//           onChange={handleSliderChange}
//           className="styledSlider"
//         />
//       </div>
//     </div>
//   );
// };

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
