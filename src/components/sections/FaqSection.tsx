import React from "react";
import FaqCard from "../cards/FaqCard";

function FaqSection() {
  const data: IFaqCardProps[] = [
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      type: "white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      type: "black",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      type: "black",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      type: "white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      type: "white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      type: "black",
    },
  ];
  return (
    <section>
      <div className="mb-[40px]">
        <div className="">
          <p className="text-primary leading-tight font-medium uppercase">
            FAQ
          </p>
          <p className="text-black text-[48px] font-bold leading-tight">
            Frequently Asked Questions
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
