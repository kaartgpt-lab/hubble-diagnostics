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
    { label: "Hubble Education", to: "/foundation" },
    { label: "Our Doctors", to: "/ourdoctors" },
    // { label: "FAQs", to: "/faqs" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#2d69ff] text-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white">
          <img
            src="/logo.png"
            alt="Hubble Diagnostics Logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <div key={link.to} className="relative">
              <NavLink
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

              {/* Insert Services dropdown right after Foundation */}
              {link.label === "Hubble Education" && (
                <div className="inline-block ml-4 relative">
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
              )}
            </div>
          ))}
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
        <div className="md:hidden bg-[#2d69ff] text-white px-4 py-4 border-t border-[#4baa7d]">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block font-medium hover:text-[#e1f0ff] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full text-left font-medium hover:text-[#e1f0ff] transition flex justify-between items-center"
              >
                Services ▾
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 ml-2 bg-[#2d69ff] rounded-lg border border-[#4baa7d]">
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
