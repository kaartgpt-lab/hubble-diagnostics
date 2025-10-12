import { Link, NavLink, useNavigate } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown.jsx";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-blue-600 text-white">
      <div className="container mx-auto h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline text-white"
        >
          <div className="w-9 h-9 rounded-lg bg-white/20 grid place-content-center font-extrabold">
            HD
          </div>
          <span className="font-bold text-lg">Hubble Diagnostics</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative font-medium hover:text-gray-200 transition ${
                isActive
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
                  : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative font-medium hover:text-gray-200 transition ${
                isActive
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
                  : ""
              }`
            }
          >
            About
          </NavLink>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="font-medium hover:text-gray-200 transition"
            >
              Services ▾
            </button>

            {open && (
              <div
                onMouseLeave={() => setOpen(false)}
                className="absolute left-0 top-8 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 min-w-[260px] z-50"
              >
                <ServicesDropdown
                  onNavigate={(href) => {
                    setOpen(false);
                    navigate(href);
                  }}
                />
              </div>
            )}
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `relative font-medium hover:text-gray-200 transition ${
                isActive
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
                  : ""
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative font-medium hover:text-gray-200 transition ${
                isActive
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
                  : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Contact Button */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
