import React from "react";

function TestimonialSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black leading-tight font-medium uppercase">
          Testimonial
        </p>
        <p className="text-black text-[48px] font-bold leading-tight">
          What Our Users Say About Us?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/images/testimonial.png" alt="testimonial" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-[28px] uppercase">
              the best financial accounting app ever!
            </p>
          </div>

          <div className="text-gray-500 my-[24px]">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </div>

          <div>
            <img src="/images/reviewers.png" alt="reviewers" />
          </div>
          <p className="font-bold mt-[24px]">Nick Jones</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
