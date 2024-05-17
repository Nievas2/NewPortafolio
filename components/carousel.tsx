import { SetStateAction, useState } from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
export default function Carousel({ slides }: { slides: any }) {
  const [activeStep, setActiveStep] = useState(0);
  const [extendInfo, setExtendInfo] = useState(false);
  let maxSteps = slides.length;

  const handleStepChange = (step: SetStateAction<number>) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    if (activeStep + 1 < maxSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep(activeStep - 1);
    }
  };
  return (
    <main className="relative">
      <div
        /* className="absolute z-10 text-white top-36 flex flex-row w-full" */
      >
        <div
          style={{ position: "absolute", top: "40%", left: "0%", zIndex: 10 }}
        >
          <button
            onClick={handleBack}
            style={{ backgroundColor: "transparent", marginLeft: 15 }}
          >
            <h1
              className="text-black text-2xl"
              style={{ textShadow: "#fff 0 0 1px" }}
            >
              {"<"}
            </h1>
          </button>
        </div>
        <div
          style={{ position: "absolute", top: "40%", right: "5%", zIndex: 10 }} 
        >
          <button
            onClick={handleNext}
            style={{ backgroundColor: "transparent", marginRight: 15 }}
          >
            <h1
              className="text-black text-2xl"
              style={{ textShadow: "#fff 0px 0 " }}
            >
              {">"}
            </h1>
          </button>
        </div>
      </div>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((imageMap: { src: string | undefined }, index: number) => (
          <div
            key={crypto.randomUUID()}
            style={{
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                src={imageMap.src}
                style={{
                  height: "100%",
                  width: "100%",
                  /* height: imageMap.height,
                      width:imageMap.width, */
                  display: "block",
                  overflow: "hidden",

                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                }}
              ></img>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
    </main>
  );
}
