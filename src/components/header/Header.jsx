import { useRef, useEffect } from "react";
import { logo } from "../../assets";

const Header = ({ activeSection }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  return (
    <header className="w-full max-md:-ml-10 bg-white opacity-[97%] z-40 lg:pr-[20%]  h-[70px] leading-[80px] flex items-center fixed">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-[10px] cursor-pointer">
            <div className="w-[55px] h-auto rounded-full ">
              <img src={logo} alt="Logo" className="w-full h-auto" />
            </div>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallText font-[700]">Melese</h2>
              <p className="text-smallText text-[15px] font-[500]">Personel</p>
            </div>
          </div>

          {/* MENU */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  className={`nav-a ${
                    activeSection === "about" ? "active-link" : ""
                  }`}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={`nav-a ${
                    activeSection === "services" ? "active-link" : ""
                  }`}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className={`nav-a ${
                    activeSection === "portfolio" ? "active-link" : ""
                  }`}
                  href="#work"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className={`nav-a ${
                    activeSection === "contact" ? "active-link" : ""
                  }`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT MENU */}
          <div className="flex items-center gap-4">
            <a href="#contact">
              <button className="talk-btn">
                <i className="fas fa-paper-plane  text-[#8873ef] text-[20px] "></i>
                Let's Talk
              </button>
            </a>

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallText md:hidden cursor-pointer hover:text-smallTextBlur duration-500"
            >
              <i class="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
