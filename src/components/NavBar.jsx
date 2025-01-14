import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 rounded w-12" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/itunu-raji" className="hover:scale-110 " target="blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/itunumide" className="hover:scale-110 " target="blank">
          <FaGithub />
        </a>

        <a href="https://x.com/ITUNUMIDE3" className="hover:scale-110 " target="blank">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/stunningitunu" className="hover:scale-110 " target="blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
