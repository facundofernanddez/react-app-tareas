import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../styles/Banner.css";

export const Banner = () => {
  return (
    <>
      <p className="nombre">Alejandro Facundo Fernández</p>
      <div className="links">
        <BsLinkedin className="icono-linkedin" />
        <BsGithub className="icono-github" />
      </div>
    </>
  );
};
