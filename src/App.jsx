import FeatureSection from "./components/FeatureSection";
import supervisor from "../src/assets/images/icon-supervisor.svg";
import teamBuilder from "../src/assets/images/icon-team-builder.svg";
import karma from "../src/assets/images/icon-karma.svg";
import calculator from "../src/assets/images/icon-calculator.svg";

const data = [
  {
    feature: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: supervisor,
    borderColor: "#44d3d2",
  },
  {
    feature: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: teamBuilder,
    borderColor: "#ea5454",
  },
  {
    feature: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: karma,
    borderColor: "#fcae4a",
  },
  {
    feature: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: calculator,
    borderColor: "#549ef2",
  },
];

function App() {
  return (
    <>
      <main className="bg-veryLightGray flex flex-col items-center justify-center gap-[4.75rem] px-[2rem] py-[4.875rem] lg:gap-16">
        <div className="text-veryDarkBlue flex h-[10.063rem] w-[19.438rem] flex-col items-center justify-center gap-4 font-poppins lg:h-[10.5rem] lg:w-[33.75rem]">
          <h1 className="text-2xl font-semibold tracking-[.011rem] lg:text-4xl lg:tracking-[.016rem]">
            <div className="pb-[.063rem] font-extralight lg:pb-4">
              Reliable, efficient delivery
            </div>
            <div>Powered by Technology</div>
          </h1>
          <p className="text-center text-[.938rem] leading-[1.563rem] tracking-[.006rem] opacity-50">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:h-[33.125rem] lg:w-[69.375rem] lg:flex-row">
          {/* {data.map((entry) => (
            <FeatureSection key={entry.feature} {...entry} />
          ))} */}
          <div className="flex flex-col justify-center">
            <FeatureSection key={data[0].feature} {...data[0]} />
          </div>
          <div className="flex flex-col gap-6">
            <FeatureSection key={data[1].feature} {...data[1]} />
            <FeatureSection key={data[2].feature} {...data[2]} />
          </div>
          <div className="flex flex-col justify-center">
            <FeatureSection key={data[3].feature} {...data[3]} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
