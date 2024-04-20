import { useFormik } from "formik";
import { useRef } from "react";
import emailJs from "@emailjs/browser";

import toast from "react-hot-toast";
import * as yup from "yup";

const ContactForm = () => {
  const formRef = useRef();

  const submitHandler = ({ val }) => {
    console.log(val);
    emailJs.send("service_pg6wmjc", "template_uhwd199", val, { publicKey: "L0dA03oBztBV32BoS" }).then(
      () => {
        toast.success("Thank you. I will get back to you as soon as possible.");
        setSubmitting(false);
        resetForm();
      },
      (err) => {
        toast.error("somthing went wrong");
        setSubmitting(false);
        console.error(err);
        resetForm();
      }
    );
  };
  const contactSchema = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    message: yup.string().required().min(12, "this message is too short"),
  });
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, isSubmitting, touched, setSubmitting, resetForm } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: (val) => submitHandler({ val }),
    });
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="my-12 flex flex-col gap-8">
      <label htmlFor="" className="flex flex-col">
        <span className=" text-white font-medium mb-4">Your Name</span>
        <input
          type="text"
          name="name"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="what's your name?"
          className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium"
        />
        {errors.name && <div className="py-2 px-2 bg-red-900 bg-opacity-30 rounded-b-xl">{errors.name}</div>}
      </label>
      <label htmlFor="" className="flex flex-col">
        <span className=" text-white font-medium mb-4">Your Email</span>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          placeholder="what's your email?"
          className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium"
        />
        {errors.email && touched.email && (
          <div className="py-2 px-2 bg-red-600 bg-opacity-30 rounded-b-xl">{errors.email}</div>
        )}
      </label>
      <label htmlFor="" className="flex flex-col">
        <span className=" text-white font-medium mb-4">Your message</span>
        <textarea
          rows="7"
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="what do you want to say?"
          className="bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium"
        />
        {errors.message && touched.message && (
          <div className="py-2 px-2 bg-red-600 bg-opacity-30 rounded-b-xl">{errors.message}</div>
        )}
      </label>
      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
      >
        {isSubmitting ? "Sending..." : "send"}
      </button>
    </form>
  );
};

export default ContactForm;
