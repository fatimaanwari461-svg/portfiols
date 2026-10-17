
import { Link } from "react-router-dom";

import profile from "../../assets/profile.png";

// نام این سه تصویر را مطابق نام واقعی فایل‌های خودت بنویس
import instagram from "../../assets/OIP.webp";
import linkedin from "../../assets/WhatsApp Image 2026-08-22 at 11.02.33 PM.jpeg";
import github from "../../assets/download.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-10 text-gray-900 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* Profile */}
        <div className="flex items-start gap-3">
          <img
            src={profile}
            alt="Fatima Anwari"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />

          <div>
            <h2 className="font-bold">Fatima Anwari</h2>

            <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
              Frontend developer focused on clean designs, smooth
              interactions, and meaningful details.
            </p>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-4 font-bold">Explore</h3>

          <div className="flex flex-col items-start gap-3 text-sm text-gray-500">
            <Link className="transition hover:text-orange-500" to="/">
              Projects
            </Link>

            <Link
              className="transition hover:text-orange-500"
              to="/experiments"
            >
              Experiments
            </Link>

            <Link className="transition hover:text-orange-500" to="/about">
              About
            </Link>

            <Link className="transition hover:text-orange-500" to="/resume">
              Resume
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-bold">Contact</h3>

          <a
            href="mailto:fatimaanwari461@gmail.com"
            className="break-all text-sm text-gray-500 transition hover:text-orange-500"
          >
            fatimaanwari461@gmail.com
          </a>

          <a
            href="https://t.me/taira_anwari"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-orange-500"
          >
            Let's chat <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Social media icons */}
        <div>
          <h3 className="mb-4 font-bold">Follow me</h3>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/fatima-anwari-335150428/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:scale-110"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-7 w-7 object-contain"
              />
            </a>

            <a
              href="https://github.com/fatimaanwari461-svg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:scale-110"
            >
              <img
                src={github}
                alt="GitHub"
                className="h-7 w-7 object-contain"
              />
            </a>

            <a
              href="https://www.instagram.com/korean_staaar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:scale-110"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="h-7 w-7 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-9 max-w-6xl border-t border-gray-100 pt-5 text-center text-xs text-gray-400">
        © 2026 Fatima Anwari. All rights reserved.
      </div>
    </footer>
  );
}
