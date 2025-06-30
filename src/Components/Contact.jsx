import { useState, useRef } from "react";
import Button from "./Button";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
          {/* Left Card */}
          <div className="w-full md:w-1/2 bg-[#1e293b] rounded-2xl p-8 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Let's Talk</h3>
            <p className="mb-6 text-gray-400 text-sm leading-relaxed">
              Whether it's a new project, collaboration, or just a friendly chat — feel free to drop a message. I'm always happy to connect.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-500/20 p-2 rounded-full">
                  <LuMail className="text-indigo-400 text-xl" />
                </div>
                <span>anupkarki643@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-500/20 p-2 rounded-full">
                  <MdOutlinePhone className="text-indigo-400 text-xl" />
                </div>
                <span>+977 9808230759</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-500/20 p-2 rounded-full">
                  <CiLocationOn className="text-indigo-400 text-xl" />
                </div>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
            <div className="flex gap-5 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-500 transition" />
              </a>
              <a href="https://github.com/Anupkarki12" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-300 transition" />
              </a>
              <a href="https://wa.me/9808230759" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500 transition" />
              </a>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="w-full md:w-1/2 bg-[#1e293b] rounded-2xl p-8 shadow-lg backdrop-blur-md">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-indigo-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-400 outline-none text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-indigo-400">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-400 outline-none text-sm"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-indigo-400">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message..."
                  className="w-full mt-1 px-4 py-2 h-32 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-400 outline-none text-sm resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <Button type="submit" text="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
