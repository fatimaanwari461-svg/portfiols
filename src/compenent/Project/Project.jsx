
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Building a Responsive Website",
    category: "HTML & CSS",
    year: "2026",
    image: "/src/assets/Group3.png",
    url: "https://bootcomp2.vercel.app/",
  },
  {
    title: "Designing a Responsive Website",
    category: "HTML & CSS",
    year: "2026",
    image: "/src/assets/Group1(1).png",
    url: "https://web4-six-ivory.vercel.app/",
  },
  {
    title: "Creating a Modern Figma Design",
    category: "Figma",
    year: "2026",
    image: "/src/assets/Group1(7).png",
    url: "https://zohco-tau.vercel.app/",
  },
  {
    title: "Responsive Website Design",
    category: "HTML & CSS",
    year: "2026",
    image: "/src/assets/Group1.png",
    url: "https://designerup-eight.vercel.app/",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-8 sm:pt-24">
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
     
      >
       

       

       

        
      </motion.section>

      <section id="latest-work">
        <div className=" flex items-end justify-between">
          
          
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-3"
            >
              <div className="overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-5">
                <div>
                  <h3 className="font-bold sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {project.category} · {project.year}
                  </p>
                </div>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
