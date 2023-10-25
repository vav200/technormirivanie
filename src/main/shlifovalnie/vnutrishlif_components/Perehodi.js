import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Osnperehod from "./Osnperehod";
import Vspomperehod from "./Vspomperehod";

function Perehodi() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.vnutrishlif);
  const [massivperehtodel, setMassivperehtodel] = useState([]);

  function vspperhfromstate() {
    let vsppereh = statenow.perehods.filter((item) => item[0] === "Вспомагательный переход");
    let vspperehfilled = [];
    vspperehfilled = vsppereh.filter(
      (item) => item.length > 1 && Object.keys(item[1]).includes("Vtime")
    );
    if (vsppereh.length != vspperehfilled.length) return true;
    else return false;
  }

  function addosnperehod() {
    dispatch({ type: "ADDPEREHOD_VNUTRISHLIF", data: ["Основной переход"] });
  }
  function addvspperehod() {
    dispatch({ type: "ADDPEREHOD_VNUTRISHLIF", data: ["Вспомагательный переход"] });
  }
  function delnperehod() {
    dispatch({ type: "DELPEREHOD_VNUTRISHLIF", data: massivperehtodel });
    setMassivperehtodel(() => []);
  }
  function checkChange(e) {
    if (massivperehtodel.includes(String(e.target.value))) {
      setMassivperehtodel(massivperehtodel.filter((item, ind) => item != e.target.value));
    } else {
      setMassivperehtodel([...massivperehtodel, e.target.value]);
    }
  }

  function calcTimePer(item, index) {
    if (statenow.perehods.length > 0) {
      if (item[0] == "Вспомагательный переход") {
        if (
          statenow.perehods[index][1] &&
          statenow.perehods[index][1].hasOwnProperty("Vtime") &&
          statenow.perehods[index][1].Vtime &&
          !isNaN(statenow.perehods[index][1].Vtime)
        ) {
          return " - " + Number(statenow.perehods[index][1].Vtime).toFixed(1) + " мин";
        } else return "";
      } else {
        if (
          statenow.perehods[index][1] &&
          statenow.perehods[index][1].filter(
            (item) => item.Otime === "ошибки" || item.Otime === "" || item.Otime === 0
          ).length == 0 &&
          statenow.perehods[index][1].filter((item) => !item.hasOwnProperty("Otime")).length == 0
        ) {
          return (
            " - " +
            statenow.perehods[index][1]
              .reduce((acc, item) => acc + Number(item.Otime), 0)
              .toFixed(1) +
            " мин"
          );
        } else return "";
      }
    } else return "";
  }

  return (
    <div className="infoblock">
      <div className="accordion accordion-flush" id="mainmenu">
        {statenow.perehods.map((item, index) => (
          <div key={"p" + index}>
            <div className="accordion-item relativ">
              <div className="checkperehod">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value={index}
                  onChange={checkChange}
                  checked={massivperehtodel.includes(String(index)) ? true : false}
                />
              </div>
              <div className="accordion-header" id={`flush-heading${index}`}>
                <button
                  className="colorhead accordion-button collapsed p-2 "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}
                >
                  <span className="dist"> </span>
                  <h5 className="m-0">
                    {index + 1}. {item[0]}
                    {calcTimePer(item, index)}
                  </h5>
                </button>
              </div>
              <div
                id={`flush-collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${index}`}
              >
                <div className="accordion-body">
                  {item[0] == "Основной переход" ? (
                    <Osnperehod numpereh={index} />
                  ) : (
                    <Vspomperehod numpereh={index} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />

      <div className="d-flex flex-lg-row flex-column gap-2">
        <button type="button" class="btn btn-outline-secondary w-100" onClick={addvspperehod}>
          Добавить вспомагательный переход
        </button>

        <button
          type="button"
          className={`btn btn-outline-secondary w-100 ${
            statenow.perehods.length === 0 || vspperhfromstate() ? "disabled" : ""
          }`}
          onClick={addosnperehod}
        >
          Добавить основной переход
        </button>

        <button
          type="button"
          className={`btn btn-outline-danger w-100 ${
            statenow.perehods.length < 2 ? "disabled" : ""
          }`}
          onClick={delnperehod}
        >
          Удалить переход
        </button>
      </div>
    </div>
  );
}

export default Perehodi;
