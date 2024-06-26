import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { vercel, github } from "../assets";
import { SectionWrappper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.75, 0.75)}>
      <Tilt
        options={{
          scale: 1,
          max: 35,

          speed: 450,
        }}
        className="bg-tertiary p-5  rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_cover">
            <div
              onClick={() => {
                window.open(source_code_link, "blank");
              }}
              className=" rounded-full flex justify-center items-center cursor-pointer black-gradient w-10 h-10 "
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(deploy_url, "blank");
              }}
              className=" rounded-full flex justify-center items-center cursor-pointer green-pink-gradient mx-2 w-10 h-10 "
            >
              <img
                src={vercel}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-14px ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex contain-stric flex-wrap gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={`project-${idx}`} index={idx} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrappper(Works, "");
