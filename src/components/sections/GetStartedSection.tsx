import React from "react";
import MainButton from "../common/MainButton";

function GetStartedSection() {
  return (
    <section>
      <div className="hidden md:flex justify-start ml-[-12rem] mb-[-14rem]">
        <img src="/images/red_shape.png" alt="red shape" />
      </div>
      <div className="z-10 relative bg-black rounded-[8px] flex justify-between items-center">
        <div className="pl-4 md:pl-[77px] py-[24px]">
          <div className="relative inline-block">
            <p className="font-bold text-white text-[25px] md:text-[48px]  leading-tight md:leading-[3rem]">
              Ready To Get Started?
            </p>
          </div>

          <div>
            <p className="text-white pt-2 pb-4">
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
          </div>
          <div className="flex gap-[20px] md:gap-[40px] flex-col md:flex-row">
            <MainButton
              text="Download App"
              rightIconRoute="/images/apple.svg"
              rightIconClass="pl-[8px]"
              classes="font-bold bg-white text-black w-[208px]"
            />
          </div>

          <div className="hidden md:block absolute left-0 bottom-0 -z-10">
            <img src="/images/ring.png" alt="ring" />
          </div>
        </div>
        <div>
          <img src="/images/get_started.png" alt="group iphone mockup" />
        </div>
      </div>
    </section>
  );
}

export default GetStartedSection;
