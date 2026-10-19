
import { motion } from "framer-motion";
import img66 from "../../assets/about.png"
export default function About() {
  return (
    <main className="mx-auto min-h-[60vh] w-[92%] max-w-6xl">
      <section className="mt-10 grid items-center gap-9 sm:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/80 bg-white/40 p-2 shadow-lg shadow-purple-100/40"
        >
          <img
            src={img66}
            alt="Fatima Anwari"
            className="max-h-[460px] w-full rounded-2xl object-cover object-fill"
          />
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
      

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Hi, I am Fatima.
            <span className="mt-2 block text-gray-500">
              Frontend Developer
            </span>
          </h1>

          <p className="mt-6 text-sm leading-8 text-gray-600 sm:text-base">
            I'm a passionate Frontend Developer who enjoys turning
            creative ideas into clean, modern, and responsive websites.
            I work with HTML and CSS to build user-friendly interfaces
            and bring designs to life.
          </p>

          <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
            I also enjoy creating UI designs in Figma and exploring
            new tools like ChatGPT and Gemini to improve my ideas
            and workflow. I'm always learning, practicing, and
            developing my skills to become a better developer.
            My goal is to create beautiful, accessible, and
            meaningful digital experiences.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Figma"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/90 bg-white/60 px-4 py-2 text-sm text-gray-700 shadow-sm "
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <br /><br /><br />
        </motion.div>
      </section>
    </main>
  );
}
