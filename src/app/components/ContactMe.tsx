"use client"
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState("");
  const formRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7i46r9", // Replace with your actual Service ID from EmailJS
        "template_gn99efb", // Replace with your actual Template ID from EmailJS
        e.target,
        "oGKC8MrSZU9AH2NnH" // Replace with your actual User ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setThankYou("Thank you! Your message has been sent.",);
          setTimeout(() => setThankYou(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setThankYou("Oops! Something went wrong.");
          setTimeout(() => setThankYou(""), 5000);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className=" w-auto  lg:mx-[500px] mx-5  rounded-lg shadow-lg mt-[-20px] lg:mb-32 mb-44"
    >
      <h2 className="lg:text-4xl text-2xl font-bold text-center mb-6">Contact Me</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <div className="flex gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        </div>
       
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 lg:h-40 h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black text-xl  py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </form>
      {thankYou && (
        <p className={`mt-6 text-center text-xl ${thankYou.startsWith("Oops!") ? 'text-red-600' : 'text-green-600'}`}>
          {thankYou}
        </p>
      )}
    </motion.div>
  );
};

export default ContactMe;
