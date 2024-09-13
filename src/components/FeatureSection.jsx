const FeatureSection = ({ feature, description, icon, borderColor }) => {
  return (
    <div
      className="text-veryDarkBlue shadow-custom relative flex h-[13.875rem] w-[19.438rem] flex-col rounded-lg border-t-[.222rem] bg-white stroke-[#979797] p-[1.75rem] font-poppins lg:h-[15.625rem] lg:w-[21.875rem] lg:p-8"
      style={{ borderColor: borderColor }}
    >
      <h2 className="text-xl font-semibold lg:pb-[6px]">{feature}</h2>
      <p className="pb-8 text-[.813rem] leading-[1.438rem] tracking-[.006rem] opacity-50 lg:pb-10">
        {description}
      </p>
      <img
        src={icon}
        alt="icon"
        className="size-[3.563rem] self-end justify-self-end lg:size-16"
      />
    </div>
  );
};

export default FeatureSection;

//  rows: 1 fr boxHeight 1fr
// columns: 1fr 1fr 1fr
