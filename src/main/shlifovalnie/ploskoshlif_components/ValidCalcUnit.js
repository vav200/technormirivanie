import React from "react";
import { useSelector } from "react-redux";

function ValidCalcUnit() {
  let statenow = useSelector((dat) => dat.ploskoshlif);

  function calcVtime() {
    return statenow.perehods.reduce((acc, item) => {
      if (item[0] == "Вспомагательный переход" && item[1]) {
        if (item[1].hasOwnProperty("Vtime")) {
          if (isNaN(item[1].Vtime) || item[1].Vtime === "") return (acc = item[1].Vtime);
          return Number(acc) + Number(item[1].Vtime);
        } else return acc;
      } else return acc;
    }, "");
  }

  function calcOtime() {
    return statenow.perehods.reduce((acc, item) => {
      if (item[0] == "Основной переход" && item[1] && item[1][0]) {
        if (item[1][0].hasOwnProperty("Otime")) {
          let sumstr = item[1].reduce((prev, current) => {
            if (current.hasOwnProperty("Otime")) {
              if (current.Otime === "ошибки" || current.Otime === "") return (prev = current.Otime);
              else return Number(prev) + Number(current.Otime);
            } else return prev;
          }, "");
          if (sumstr === "ошибки" || sumstr === "") return (acc = sumstr);
          else return Number(acc) + Number(sumstr.toFixed(1));
        } else return acc;
      } else return acc;
    }, "");
  }

  return (
    <>
      {/* <button
        className="btn btn-primary w-100 mb-4 btn-lg"
        data-bs-target="#errorModal"
        data-bs-toggle={buttonstate}
        onClick={() => dispatch({ type: "CALCULATIONTIME" })}
      >
        Рассчитать
      </button> */}

      {/* <div className="rezult">
        <h5>Вспомагательное время операции Тв = {calcVtime()}</h5>
        <h5>Основное время операции То = {calcOtime()}</h5>
      </div> */}

      <div
        className={`truerezult ${
          calcVtime() === "ошибки" || calcOtime() === "ошибки" || statenow.perehods.length == 0
            ? "d-none"
            : ""
        }`}
      >
        <h5
          className={
            statenow.perehods.filter((item) => item[0] === "Вспомагательный переход").length > 0
              ? ""
              : "d-none"
          }
        >
          Вспомагательное время операции:
          {calcVtime() === "" ? calcVtime() : " Тв = " + calcVtime() + " мин"}
        </h5>
        <h5
          className={
            statenow.perehods.filter((item) => item[0] === "Основной переход").length > 0
              ? ""
              : "d-none"
          }
        >
          Основное время операции:
          {calcOtime() === "" ? calcOtime() : " То = " + calcOtime() + " мин"}
        </h5>
      </div>

      <div
        className={`falserezult ${
          statenow.perehods.length != 0
            ? calcOtime() === "ошибки" || calcVtime() === "ошибки"
              ? ""
              : "d-none"
            : "d-none"
        }`}
      >
        <h5 className="text-danger">Расчет невозможен, исправьте ошибки!</h5>
      </div>

      {/* <div
        className="modal fade"
        id="errorModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Обнаружены ошибки:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">
              <ol>
                {errormes.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ValidCalcUnit;
