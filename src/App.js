import React, { useState, useEffect } from "react";
import "./App.css";
import DraggableComponent from "./DraggableComponent";

const extraShortTexts = ["extra short text"];

const shortTexts = [
  "Everyone has the right to life, liberty and security of person.",
  "No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.",
  "Everyone has the right to recognition everywhere as a person before the law.",
  "No one shall be subjected to arbitrary arrest, detention or exile.",
  "Everyone has the right to freedom of movement and residence within the borders of each state.",
  "Everyone has the right to seek and to enjoy in other countries asylum from persecution.",
  "Everyone, without any dis-crimination, has the right to equal pay for equal work.",
  "Everyone has the right to form and to join trade unions for the protection of his interests.",
];
const mediumTexts = [
  "All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
  "Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.",
  "No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.",
  "Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment.",
  "Everyone has duties to the community in which alone the free and full development of his personality is possible.",
  "Everyone has the right to the protection of the moral and material interests resulting from any scientific, literary or artistic production of which he is the author.",
];
const longTexts = [
  "Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.",

  "Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.",
  "The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secret vote or by equivalent free voting procedures.",
  "Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms. It shall promote understanding, tolerance and friendship among all nations, racial or religious groups, and shall further the activities of the United Nations for the maintenance of peace.",
  "Be exactly who you want to be, do what you want to do I am he and she is she but you're the only you No one else has got your eyes, can see the things you see Its up to you to change your life and my lifes up to me The problems that you suffer from are problems that you make The shit we have to climb through is the shit we choose to take If you dont like the life you live, change it now it's yours Nothing has effects if you don't recognize the cause",
];

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

const sliderValues = [
  [-25, -20, -15, -10, -5],
  [100, 110, 120, 130, 140],
];

const getRandomFont = () => {
  const randomFont = fontData[Math.floor(Math.random() * fontData.length)];
  const selectedFont = randomFont[0];
  const availableWeights = randomFont[1];
  const randomWeight =
    availableWeights[Math.floor(Math.random() * availableWeights.length)];

  return { fontFamily: selectedFont, fontWeight: randomWeight };
};

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

export default function App() {
  const [activeDiv, setActiveDiv] = useState(null);
  const [randomSize, setRandomSize] = useState(0);
  const [exampleText, setExampleText] = useState("");

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
          Another one
        </button>
      </div>
    </div>
  );
}

const ActiveDiv = ({ children, divId, isActive, onClick, randomSize }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [fontWeight, setFontWeight] = useState(500);
  const [selectedFont, setSelectedFont] = useState("Inter, sans-serif");
  const [sliderRange, setSliderRange] = useState([-10, 100]);

  useEffect(() => {
    const font = getRandomFont();
    setFontWeight(font.fontWeight);
    setSelectedFont(font.fontFamily);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    const slidersss = getRandomSliderValues(randomSize);
    setSliderRange(slidersss);

    setSliderValue(
      Math.floor(
        Math.random() * (slidersss.maxValue - slidersss.minValue + 1)
      ) + slidersss.minValue
    );
  }, [randomSize]);

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
    fontFamily: selectedFont,
    fontWeight: fontWeight,
  };

  return (
    <div className="activeDiv">
      <div onClick={handleClick}>
        <span style={textStyle}>{children}</span>
      </div>

      <div className="vertical-wrapper">
        <input
          type="range"
          min={sliderRange.minValue}
          max={sliderRange.maxValue}
          step="1"
          orient="vertical"
          value={sliderValue}
          onChange={handleSliderChange}
          className="styledSlider"
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
