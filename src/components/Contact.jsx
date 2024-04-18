import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrappper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className=" flex-[.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="my-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className=" text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className=" text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className=" text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sendding..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "between", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrappper(Contact, "contact");
