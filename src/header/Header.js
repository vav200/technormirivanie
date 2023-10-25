import "./header.css";
import logofon from "./img/titleimage.jpg";
import { Link } from "react-router-dom";
import logotip from "./img/logo.png";
import { useEffect, useState } from "react";

function Header() {
  const [pozheader, setPozheader] = useState(0);
  const [headerstate, setHeaderstate] = useState(false);
  useEffect(() => {
    let poznow = pozheader;
    window.onscroll = () => {
      if (poznow < window.scrollY) setHeaderstate(true);
      else setHeaderstate(false);
      setPozheader(window.scrollY);
    };
  }, [pozheader]);

  return (
    <>
      <div className={`logo__box ${headerstate ? "logo__box_hide" : ""}`}>
        <div className="logo__wrap position-relative">
          <Link to="/">
            {/* <h1 className="text-left titlelocation">ТЕХНИЧЕСКОЕ <br /> НОРМИРОВАНИЕ</h1> */}
            <img src={logotip} alt="" className="text-left titlelocation" />
          </Link>
          {/* <img src={logofon} alt="Техническое нормирование" className="logo__img" /> */}
        </div>
      </div>
      <div className="header__dist"></div>
    </>
  );
}

export default Header;
