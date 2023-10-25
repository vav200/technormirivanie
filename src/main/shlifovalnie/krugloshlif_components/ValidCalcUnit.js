import React from "react";
import { useSelector } from "react-redux";

function ValidCalcUnit() {
  let statenow = useSelector((dat) => dat.krugloshlif);

  function calcVtime() {
    return statenow.perehods.reduce((acc, item) => {
      if (item[0] == "Вспомагательный переход" && item[1]) {
        if (item[1].hasOwnProperty("Vtime")) {
          if (isNaN(item[1].Vtime) || item[1].Vtime === "") return (acc = item[1].Vtime);
          else return Number(acc) + Number(item[1].Vtime);
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

  console.log("otime - ", calcOtime());
  console.log("vtime - ", calcVtime());

  return (
    <>
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
    </>
  );
}

export default ValidCalcUnit;
