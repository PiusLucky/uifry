import React from "react";

function FeatureSection() {
  const data = [
    {
      icon: "/images/star_icon.svg",
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: "/images/mesh_icon.svg",
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: "/images/cube_icon.svg",
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];
  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row items-center">
      <div>
        <img src="/images/feature.png" alt="feature" />
      </div>
      <div>
        <div>
          <p className="text-primary leading-tight font-medium uppercase">
            Features
          </p>
          <p className="text-black text-[48px] font-bold leading-tight">
            Uifry Premium
          </p>
        </div>
        <div className="flex flex-col gap-[32px] mt-[32px]">
          {data.map((feature, index) => (
            <div key={index}>
              <div className="flex gap-2">
                <div>
                  <img src={feature.icon} alt="feature icon" />
                </div>
                <p className="font-semibold">{feature.title}</p>
              </div>

              <div className="text-gray-500">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
