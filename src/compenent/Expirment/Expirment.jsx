
import { motion } from "framer-motion";

const experiments = [
  { image: "/src/assets/OIP (2).webp", title: "" },
  { image: "/src/assets/1213png.png", title: "" },
  { image: "/src/assets/OIP (3).webp", title: "" },
  { image: "/src/assets/OIP (177).webp", title: "" },
  { image: "/src/assets/OIP (66).webp", title: "" },
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
