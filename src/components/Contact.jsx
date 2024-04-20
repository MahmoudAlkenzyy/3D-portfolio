import { motion } from "framer-motion";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrappper } from "../hoc";
import { slideIn } from "../utils/motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "between", 0.2, 1)} className=" flex-[.75] bg-black-100 rounded-2xl p-8">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <ContactForm />
      </motion.div>
      <motion.div variants={slideIn("right", "between", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrappper(Contact, "contact");
