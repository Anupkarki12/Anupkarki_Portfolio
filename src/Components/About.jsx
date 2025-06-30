import image from "../assets/hello.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Education from "../Education";

const About = () => {
  const popVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Observe image container
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const imgControls = useAnimation();

  // Observe text container
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const textControls = useAnimation();

  useEffect(() => {
    if (imgInView) {
      imgControls.start("visible");
    } else {
      imgControls.start("hidden");
    }
  }, [imgInView, imgControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textInView, textControls]);

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center pt-20 text-center text-gray-300"
    >
      <h1 className="mb-10 text-3xl font-semibold     text-indigo-400">About Me</h1>
      <div className="flex w-full flex-col items-center justify-center gap-10 text-justify md:text-center">

        <motion.p
          ref={textRef}
          variants={popVariants}
          initial="hidden"
          animate={textControls}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-justify text-sm leading-relaxed text-gray-400 md:text-lg"
        >
          I’m an enthusiastic frontend developer with a talent for building intuitive, attractive, and mobile-friendly web interfaces. My expertise lies in tools like React and Tailwind CSS, with a deep commitment to crafting smooth and engaging user experiences. I’m continuously driven to grow, embrace new challenges, and turn innovative ideas into functional, elegant solutions through clean code.
        </motion.p>

        <div className="flex w-full items-center justify-center gap-20">
          <motion.img
            ref={imgRef}
            src={image}
            alt="about"
            className="hidden h-[80vh] w-auto bg-transparent md:block"
            variants={popVariants}
            initial="hidden"
            animate={imgControls}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          />

          <motion.div
            ref={textRef}
            variants={popVariants}
            initial="hidden"
            animate={textControls}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col items-start justify-center gap-10 text-sm leading-relaxed text-gray-400 md:text-lg"
          >
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Name:</span>
              <span className="text-color2">Anup Karki</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Date Of birth:</span>
              <span className="text-color2">May 14, 2001</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Address:</span>
              <span className="text-color2">Thaha-3,Makwanpur</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Zip code:</span>
              <span className="text-color2">44110</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Email:</span>
              <span className="text-color2">anupkarki643@gmail.com</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Phone:</span>
              <span className="text-color2">9808230759</span>
            </div>
          </motion.div>
        </div>

        <Education />
      </div>
      <hr className="w-full border border-gray-500" />
    </section>
  );
};

export default About;
