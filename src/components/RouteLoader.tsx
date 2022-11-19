import { keyframes } from "@stitches/react";
import tw, { styled } from "twin.macro";

const loadingAnimation = keyframes({
  "0%": { rotate: "0deg", transform: "scale(0)" },
  "100%": { rotate: "360deg", transform: "scale(1)" },
});

const Dot = styled("div", {
  ...tw`w-6 h-6 bg-base-300 text-secondary rounded`,
  filter: "drop-shadow(0 0 0.25rem currentColor)",
  animation: `${loadingAnimation} infinite both alternate`,
  animationDuration: "2s",
});

export const RouteLoader = () => {
  const numberOfDots = 4;
  const dots = Array.apply(null, Array(numberOfDots)).map((_, idx) => idx);

  return (
    <div tw="h-full w-full flex justify-center items-center">
      <div tw="grid grid-cols-2 gap-4 rotate-45">
        {[...dots].map((idx) => (
          <Dot
            key={idx}
            css={{
              // height: 1 * idx + "rem",
              // width: 1 * idx + "rem",
              animationDelay: 0.5 * idx + "s",
            }}
          />
        ))}
      </div>
    </div>
  );
};
