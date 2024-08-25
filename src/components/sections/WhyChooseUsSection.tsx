import React from "react";

function WhyChooseUsSection() {
  return (
    <section>
      {/* First Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div>
            <p className="text-primary leading-tight font-medium uppercase">
              Advantages
            </p>
            <p className="text-black text-[48px] font-bold leading-tight">
              Why Choose Uifry?
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-[32px]">
            <div className="flex gap-2 items-center">
              <div>
                <img src="/images/bell_icon.svg" alt="bell icon" />
              </div>
              <p className="font-semibold text-[28px]">Clever Notifications</p>
            </div>

            <div className="text-gray-500 my-[32px]">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </div>
          </div>
        </div>
        <div>
          <img src="/images/why_choose.png" alt="feature" />
        </div>
      </section>
      {/* Second  Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <img src="/images/customizable.png" alt="feature" />
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-[32px]">
            <div className="flex gap-2 items-center">
              <div>
                <img src="/images/star_circle.svg" alt="bell icon" />
              </div>
              <p className="font-semibold text-[28px]">Fully Customizable</p>
            </div>

            <div className="text-gray-500">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WhyChooseUsSection;
