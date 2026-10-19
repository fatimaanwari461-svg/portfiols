
import { motion } from "framer-motion";

import img11 from "../../assets/OIP(2).webp"
import img22 from "../../assets/1213png.png"

import img33 from "../../assets/OIP(3).webp"
import img44 from "../../assets/OIP(177).webp"
import img55 from "../../assets/OIP(66).webp"


const experiments = [
  { image: img11, title: "" },
  { image:img22, title: "" },
  { image: img33, title: "" },
  { image: img44, title: "" },
  { image: img55, title: "" },
];

export default function Expirment() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-16 sm:px-8 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
       
      </motion.div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {experiments.map((item, index) => (
          <motion.figure
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
           
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-70 w-full rounded-2xl object-cover"
            />
            <figcaption className="px-3 py-4 text-sm font-semibold">
              {item.title}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </main>
  );
}
