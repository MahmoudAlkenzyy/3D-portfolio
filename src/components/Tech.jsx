import { technologies } from "../constants";
import { SectionWrappper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tec) => (
          <div className=" w-28 h-28" key={tec.name}>
            <BallCanvas icon={tec.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrappper(Tech, "");
