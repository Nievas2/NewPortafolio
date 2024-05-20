import { SetStateAction, useState } from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import ArrowRight from "@/assets/svgs/arrowRight.svg";
import ArrowLeft from "@/assets/svgs/arrowLeft.svg";
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
    <main className="relative" style={{ width: "175px", height: "350px" }}>
      <div
      /* className="absolute z-10 text-white top-36 flex flex-row w-full" */
      >
        <div
          style={{ position: "absolute", top: "40%", left: "0%", zIndex: 10 }}
        >
          <button
            onClick={handleBack}
            style={{ backgroundColor: "transparent" }}
          >
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                fill="#0F0F0F"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ position: "absolute", top: "40%", right: "0%", zIndex: 10 }}
        >
          <button
            onClick={handleNext}
            style={{ backgroundColor: "transparent" }}
          >
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                fill="#0F0F0F"
              />
            </svg>
          </button>
        </div>
        <div style={{ position: "absolute", bottom: "0%", left: "30%", zIndex: 10, }}>
            <div style={{borderRadius:"50%", backgroundColor:activeStep == 0 ? "#fff" : "#888", height:"15px", width:"15px", display:"inline-block", marginInline:"5px"}}/>
            <div style={{borderRadius:"50%", backgroundColor:activeStep == 1 ? "#fff" : "#888", height:"15px", width:"15px", display:"inline-block", marginInline:"5px"}}/>
            <div style={{borderRadius:"50%", backgroundColor:activeStep == 2 ? "#fff" : "#888", height:"15px", width:"15px", display:"inline-block", marginInline:"5px"}}/>
        </div>
      </div>
      <div>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{
            width: "175px",
            height: "350px",
          }}
        >
          {slides.map(
            (imageMap: { src: string | undefined }, index: number) => (
              <div
                key={crypto.randomUUID()}
                style={{
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "175px",
                  height: "350px",
                }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    src={imageMap.src}
                    style={{
                      height: "100%",
                      width: "100%",
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
            )
          )}
        </SwipeableViews>
      </div>
    </main>
  );
}
