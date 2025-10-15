import { Link, NavLink, useNavigate } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown.jsx";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile services dropdown
  const navigate = useNavigate();

  const links = [
    { label: "Home", to: "/" },
    { label: "Hubble Health Foundation", to: "/foundation" },
    { label: "Our Doctors", to: "/doctors" },
    { label: "FAQs", to: "/faqs" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white">
          <div className="w-9 h-9 rounded-lg bg-white/20 grid place-content-center font-extrabold">
            HD
          </div>
          <span className="font-bold text-lg">Hubble Diagnostics</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative font-medium hover:text-gray-200 transition ${
                  isActive
                    ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gray-200"
                    : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Services Dropdown */}
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
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-950 text-white px-4 py-4 border-t border-blue-800">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block font-medium hover:text-blue-300 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full text-left font-medium hover:text-blue-300 transition flex justify-between items-center"
              >
                Services ▾
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 ml-2 bg-blue-900 rounded-lg border border-blue-800">
                  <ServicesDropdown
                    onNavigate={(href) => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                      navigate(href);
                    }}
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
