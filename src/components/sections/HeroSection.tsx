import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex items-center justify-between flex-col gap-8 md:flex-row">
      <div>
        <div className="relative inline-block">
          <p className="font-bold text-[35px] md:text-[64px]  leading-tight md:leading-[4rem]">
            Make The best <br />
            Financial Decisions
          </p>

          <div className="hidden md:block absolute top-[-10rem] right-0 -z-10">
            <img src="/images/red_shape.png" alt="red shape" />
          </div>
        </div>

        <div>
          <p className="text-gray-500 py-[24px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="flex gap-[20px] md:gap-[40px] flex-col md:flex-row">
          <MainButton
            text="Get Started"
            rightIconRoute="/images/right_arrow_icon.svg"
            rightIconClass="pl-[8px]"
            classes="font-bold"
          />

          <div className="flex gap-[14px] items-center hover:cursor-pointer">
            <div>
              <img src="/images/play_icon.svg" alt="play icon" />
            </div>
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/hero.png" alt="hero" />
      </div>
    </section>
  );
}

export default HeroSection;
