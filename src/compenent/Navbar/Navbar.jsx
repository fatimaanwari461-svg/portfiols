
import { NavLink } from "react-router-dom";
import img77 from "../../assets/profile.png"
export default function Navbar() {
  const links = [
    { name: "Projects", path: "/" },
    { name: "Experiments", path: "/Expirment" },
    { name: "About", path: "/About" },
    { name: "Resume", path: "/Resume" },
  ];

  return (
    <div className="w-full px-4 pt-8 sm:px-8">

      {/* Navbar */}
      <div className="flex items-start gap-4">

        <NavLink
          to="/"
          className="shrink-0 md:ml-[56px] md:mt-[10px]"
        >
          <img
            src={img77}
            alt="Profile"
            className="h-[70px] w-[70px] rounded-[20px] object-cover"
          />
        </NavLink>

        <nav className="mx-auto mt-2 flex h-[50px] w-fit max-w-full items-center rounded-full border border-[#e7e0e0a6] bg-[rgba(190,181,181,0.35)] shadow-[0_8px_30px_rgba(80,70,120,0.12),inset_0_1px_1px_rgba(200,193,193,0.8)] backdrop-blur-xl md:mr-0 md:ml-[calc(50%-256px)] md:mt-[10px]">
          <div className="flex items-center gap-1 px-2 sm:gap-2 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-2 py-2 text-xs transition-all duration-500 sm:px-4 sm:text-base ${
                    isActive
                      ? "bg-white text-[#585757]"
                      : "text-[#585757] hover:bg-white hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
      <section className="sm:ml-8 md:ml-[56px] md:mt-8">

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Fatima Anwari
        </h1>

        <p className="text-base leading-6 text-gray-600 sm:text-lg">
          Frontend developer focused on clean designs,
          <br className="hidden sm:block" />
          smooth interactions, and meaningful details.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#latest-work"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-200 hover:text-emerald-950"
          >
            My latest work
          </a>

          <a
            href="https://t.me/taira_anwari"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-white"
          >
            Let's chat
          </a>
        </div>

      </section>
    </div>
  );
}
