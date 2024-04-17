import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrappper } from "./../hoc";

import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRightStyle: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {/* <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60% ]"
        /> */}
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px]"> {experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold"> </p>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 spac gap-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`exoerience-point-&=${index}`}
          className=" text-white-100 text-[14px] pl-1 tracking-wider "
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far </p>
        <h2 className={styles.sectionHeadText}>certifications</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((expe, index) => (
            <ExperienceCard key={index} experience={expe} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrappper(Experience, "work");
