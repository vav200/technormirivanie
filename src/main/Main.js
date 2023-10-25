import "./main.css";
import tokvint from "./img/tokvint.jpg";
import tokkarus from "./img/tokkarus.jpg";
import krshlif from "./img/krshlif.jpg";
import vnshlif from "./img/vnshlif.jpg";
import plshlif from "./img/plshlif.jpg";
import vfrez from "./img/vfrez.jpg";
import gfrez from "./img/gfrez.jpg";
import prfrez from "./img/prfrez.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  let dispatch = useDispatch();

  return (
    <main className="main">
      <div className="machinegroupe__wrap">
        <h2 className="machinegroupe__name mt-5">Токарная группа станков</h2>
        <div className="machinegroupe__box">
          <div className="machinegroupe__item">
            <figure className="machinegroupe__img-wrap">
              <Link to="/main/tokarnie/Tokarno-vintoreznie">
                <img
                  src={tokvint}
                  alt="Токарно-винторезный станок"
                  className="machinegroupe__img"
                />
              </Link>
              <figcaption className="machinegroupe__sub">Токарно-винторезные</figcaption>
            </figure>
            <figure className="machinegroupe__img-wrap">
              <img src={tokkarus} alt="Токарно-карусельный станок" className="machinegroupe__img" />
              <figcaption className="machinegroupe__sub">Токарно-карусельные</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="machinegroupe__wrap">
        <h2 className="machinegroupe__name">Фрезерная группа станков</h2>
        <div className="machinegroupe__box">
          <div className="machinegroupe__item">
            <figure className="machinegroupe__img-wrap">
              <img src={vfrez} alt="Вертикально-фрезерный станок" className="machinegroupe__img" />
              <figcaption className="machinegroupe__sub">Вертикально-фрезерные</figcaption>
            </figure>
            <figure className="machinegroupe__img-wrap">
              <img
                src={gfrez}
                alt="Горизонтально-фрезерный станок"
                className="machinegroupe__img"
              />
              <figcaption className="machinegroupe__sub">Горизонтально-фрезерные</figcaption>
            </figure>
            <figure className="machinegroupe__img-wrap">
              <img src={prfrez} alt="Продольно-фрезерный станок" className="machinegroupe__img" />
              <figcaption className="machinegroupe__sub">Продольно-фрезерные</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="machinegroupe__wrap">
        <h2 className="machinegroupe__name">Шлифовальная группа станков</h2>
        <div className="machinegroupe__box">
          <div className="machinegroupe__item">
            <figure className="machinegroupe__img-wrap">
              <Link to="/main/shlifovalnie/Krugloshlif">
                <img
                  src={krshlif}
                  alt="Кругло-шлифовальный станок"
                  className="machinegroupe__img"
                />
              </Link>
              <figcaption className="machinegroupe__sub">Кругло-шлифовальные</figcaption>
            </figure>

            <figure className="machinegroupe__img-wrap">
              <Link to="/main/shlifovalnie/Vnutrishlif">
                <img
                  src={vnshlif}
                  alt="Внутри-шлифовальный станок"
                  className="machinegroupe__img"
                />
              </Link>
              <figcaption className="machinegroupe__sub">Внутри-шлифовальные</figcaption>
            </figure>

            <figure className="machinegroupe__img-wrap">
              <Link to="/main/shlifovalnie/Ploskoshlif">
                <img
                  src={plshlif}
                  alt="Плоско-шлифовальный станок"
                  className="machinegroupe__img"
                />
              </Link>
              <figcaption className="machinegroupe__sub">Плоско-шлифовальные</figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* <div className="accordion accordion-flush" id="mainmenu">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed fs-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Токарная группа
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#mainmenu"
          >
            <div className="accordion-body">
              <ul className="menu__box">
                <li className="menu__item">
                  <div className="menu__img-wrap">
                    <img src={tokvint} alt="Токарно-винторезный станок" className="menu__img" />
                  </div>
                  <p className="menu__sub  fs-5">Токарно-винторезные</p>
                </li>
                <li className="menu__item">
                  <div className="menu__img-wrap">
                    <img src={tokkarus} alt="Токарно-карусельный станок" className="menu__img" />
                  </div>
                  <p className="menu__sub  fs-5">Токарно-карусельные</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed fs-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Фрезерная группа
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#mainmenu"
          >
            <div className="accordion-body">
              <ul className="menu__box">
                <li className="menu__item">
                  <div className="menu__img-wrap">
                    <img src={vfrez} alt="Вертикально-фрезерный станок" className="menu__img" />
                  </div>
                  <p className="menu__sub  fs-5">Вертикально-фрезерные</p>
                </li>
                <li className="menu__item">
                  <div className="menu__img-wrap">
                    <img src={gfrez} alt="Горизонтально-фрезерный станок" className="menu__img" />
                  </div>
                  <p className="menu__sub  fs-5">Горизонтально-фрезерные</p>
                </li>
                <li className="menu__item">
                  <div className="menu__img-wrap">
                    <img src={prfrez} alt="Продольно-фрезерный станок" className="menu__img" />
                  </div>
                  <p className="menu__sub  fs-5">Продольно-фрезерные</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed fs-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Шлифовальная группа
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#mainmenu"
          >
            <div className="accordion-body">
              <ul className="menu__box">
                <li className="menu__item">
                  <Link to="/main/shlifovalnie/Krugloshlif">
                    <div className="menu__img-wrap">
                      <img src={krshlif} alt="Кругло-шлифовальный станок" className="menu__img" />
                    </div>
                    <p className="menu__sub  fs-5">Кругло-шлифовальные</p>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/main/shlifovalnie/Vnutrishlif">
                    <div className="menu__img-wrap">
                      <img src={vnshlif} alt="Внутри-шлифовальный станок" className="menu__img" />
                    </div>
                    <p className="menu__sub  fs-5">Внутри-шлифовальные</p>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/main/shlifovalnie/Ploskoshlif"
                    onClick={() => dispatch({ type: "TYPEOPERATION", data: "ploskoshlif" })}
                  >
                    <div className="menu__img-wrap">
                      <img src={plshlif} alt="Плоско-шлифовальный станок" className="menu__img" />
                    </div>
                    <p className="menu__sub  fs-5">Плоско-шлифовальные</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default Main;
