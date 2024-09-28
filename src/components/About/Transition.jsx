import React from "react";
import TextTransition, { presets } from "react-text-transition";

const texts = [
  "“Os computadores são incrivelmente rápidos, precisos e estúpidos",
  "os humanos são incrivelmente lentos, imprecisos e brilhantes",
  "juntos eles são poderosos além da imaginação!”",
];

function Type() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="glowText">
      <TextTransition springConfig={presets.wobbly}>
        {texts[index % texts.length]}
      </TextTransition>
    </h1>
  );
}

export default Type;
