
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 65 },
  { name: "Figma", percent: 75 },
];

const projects = [
  {
    number: "01",
    name: "Portfolio Website",
    description: "Responsive personal portfolio built with HTML and CSS.",
  },
  {
    number: "02",
    name: "Real Estate Website",
    description: "Modern property website with responsive cards and layouts.",
  },
  {
    number: "03",
    name: "Figma Design",
    description: "Modern website interface designed using Figma.",
  },
];

const animation = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ children }) {
  return (
    <h2 className="relative mb-6 mt-2 border-b-2 border-[#dedee0] pb-3 text-[20px] font-bold text-[#171d2b] after:absolute after:bottom-[-2px] after:left-0 after:h-[3px] after:w-[46px] after:bg-[#19191b]">
      {children}
    </h2>
  );
}

export default function Resume() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(225,174,255,0.35),transparent_45%),radial-gradient(ellipse_at_95%_25%,rgba(166,206,255,0.25),transparent_35%),white] px-3 pb-6 pt-6 font-['DM_Sans',sans-serif] sm:px-5 lg:px-8">

      {/* RESUME CONTAINER */}
      <motion.main
        id="resume"
        variants={animation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="mx-auto my-4 w-full max-w-[1100px] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_55px_rgba(25,25,27,0.08)]"
      >

        {/* HEADER */}
        <header className="flex min-h-[185px] flex-col items-start gap-4 bg-[#191a1c] px-6 py-6 text-white sm:flex-row sm:items-center sm:gap-5 sm:px-8 md:px-10">

          <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#3b3c40] bg-white text-[31px] font-bold text-[#191a1c]">
            FA
          </div>

          <div className="mt-2 mb-2 sm:ml-1">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-[34px]">
              Fatima Anwari
            </h1>

            <h3 className="mt-2 mb-2 text-lg font-semibold text-[#c3c3c5]">
              Frontend Developer
            </h3>

            <p className="mt-3 mb-2 max-w-[700px] text-sm leading-6 text-[#bdbdc0] sm:text-[15px]">
              Creative frontend developer passionate about building clean,
              responsive and modern websites.
            </p>
          </div>
        </header>

        {/* CONTACT BAR */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-[#e5e5e5] bg-white px-6 py-5 sm:px-8 md:px-10">

          <span className="text-xs text-[#858585] sm:text-[13px]">
            📧 fatima@example.com
          </span>

          <span className="text-xs text-[#858585] sm:text-[13px]">
            📱 +93 700 000 000
          </span>

          <span className="text-xs text-[#858585] sm:text-[13px]">
            📍 Afghanistan
          </span>

          <span className="text-xs text-[#858585] sm:text-[13px]">
            🌐 www.example.com
          </span>
        </div>

        {/* TWO COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr]">

          {/* LEFT COLUMN */}
          <div className="px-6 py-6 sm:px-8 md:px-9 md:py-8">

            {/* ABOUT */}
            <motion.section
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-2 mb-8"
            >
              <SectionTitle>About Me</SectionTitle>

              <p className="mt-4 mb-4 text-[14px] leading-7 text-[#73747b] sm:text-[15px]">
                I am a motivated Frontend Developer interested in creating
                beautiful and user-friendly websites. I enjoy learning new
                technologies and turning creative ideas into responsive web
                experiences.
              </p>
            </motion.section>

            {/* EXPERIENCE */}
            <motion.section
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 mb-8"
            >
              <SectionTitle>Experience</SectionTitle>

              <div className="mt-5 mb-6 grid grid-cols-1 gap-3 sm:grid-cols-[110px_1fr] sm:gap-5">

                <div className="mt-1 mb-1 text-[13px] font-bold text-[#808188]">
                  2025 - Present
                </div>

                <div className="mt-1 mb-2">
                  <h3 className="mb-2 text-base font-bold text-[#171d2b]">
                    Frontend Developer
                  </h3>

                  <h4 className="mt-2 mb-2 text-[13px] font-semibold text-[#85858b]">
                    Web Development Training
                  </h4>

                  <p className="mt-2 mb-2 text-[13px] leading-7 text-[#73747b]">
                    Developed responsive websites using HTML and CSS and
                    practiced JavaScript, UI design and responsive layouts.
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-4 grid grid-cols-1 gap-3 sm:grid-cols-[110px_1fr] sm:gap-5">

                <div className="mt-1 mb-1 text-[13px] font-bold text-[#808188]">
                  2024 - 2025
                </div>

                <div className="mt-1 mb-2">
                  <h3 className="mb-2 text-base font-bold text-[#171d2b]">
                    Web Design Student
                  </h3>

                  <h4 className="mt-2 mb-2 text-[13px] font-semibold text-[#85858b]">
                    Personal Projects
                  </h4>

                  <p className="mt-2 mb-2 text-[13px] leading-7 text-[#73747b]">
                    Created different website layouts, portfolio designs and
                    user interfaces using HTML, CSS and Figma.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* EDUCATION */}
            <motion.section
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 mb-4"
            >
              <SectionTitle>Education</SectionTitle>

              <div className="mt-5 mb-5">
                <h3 className="mb-2 text-base font-bold text-[#171d2b]">
                  Frontend Development
                </h3>

                <p className="mt-2 mb-2 text-[13px] font-semibold text-[#85858b]">
                  Netlinks / UNICEF
                </p>

                <p className="mt-2 mb-2 text-[13px] leading-7 text-[#73747b]">
                  Studying frontend development, web design, HTML, CSS and
                  JavaScript.
                </p>
              </div>

              <div className="mt-5 mb-3">
                <h3 className="mb-2 text-base font-bold text-[#171d2b]">
                  High School
                </h3>

                <p className="mt-2 mb-2 text-[13px] font-semibold text-[#85858b]">
                  Your School Name
                </p>

                <p className="mt-2 mb-2 text-[13px] leading-7 text-[#73747b]">
                  Completed secondary education with an interest in technology
                  and computer science.
                </p>
              </div>
            </motion.section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="mt-0 border-t border-[#e2e2e2] bg-[#f4f4f5] px-6 py-6 sm:px-8 md:px-7 md:py-8 lg:border-l lg:border-t-0">

            {/* SKILLS */}
            <motion.section
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-2 mb-7"
            >
              <SectionTitle>My Skills</SectionTitle>

              {skills.map((skill) => (
                <div key={skill.name} className="mt-5 mb-5">
                  <div className="mb-2 flex justify-between text-[13px] font-semibold text-[#858585]">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>

                  <div className="h-[7px] overflow-hidden rounded-full bg-[#dedee0]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#19191b]"
                    />
                  </div>
                </div>
              ))}
            </motion.section>

            {/* PROJECTS */}
            <motion.section
              id="projects"
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 mb-7"
            >
              <SectionTitle>Projects</SectionTitle>

              {projects.map((project) => (
                <div
                  key={project.number}
                  className="mt-5 mb-6 flex gap-3"
                >
                  <span className="mt-1 text-[13px] font-bold text-[#8b8b90]">
                    {project.number}
                  </span>

                  <div className="ml-1">
                    <h3 className="mb-2 text-sm font-bold text-[#171d2b]">
                      {project.name}
                    </h3>

                    <p className="mt-1 mb-2 text-[13px] leading-6 text-[#77787f]">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.section>

            {/* LANGUAGES */}
            <motion.section
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 mb-7"
            >
              <SectionTitle>Languages</SectionTitle>

              <div className="mt-5 mb-5 flex justify-between text-[13px] text-[#77787f]">
                <span>English</span>
                <b>80%</b>
              </div>

              <div className="mt-5 mb-5 flex justify-between text-[13px] text-[#77787f]">
                <span>Dari</span>
                <b>95%</b>
              </div>
            </motion.section>

            {/* INTERESTS */}
            <motion.section
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 mb-3"
            >
              <SectionTitle>Interests</SectionTitle>

              <div className="mt-5 mb-4 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "UI Design",
                  "Technology",
                  "Learning",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dcdcdf] bg-white px-3 py-2 text-xs text-[#5e5f66]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.section>

          </aside>
        </div>
      </motion.main>
    </div>
  );
}
