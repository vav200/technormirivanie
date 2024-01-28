import React from "react";
import { useSelector } from "react-redux";

function ValidCalcUnit() {
  let statenow = useSelector((dat) => dat.ploskoshlif);

  function calcAllTime() {
    let allVtime = 0;
    let allOtime = 0;
    let numperV = 0;
    let numperO = 0;
    if (statenow.perehods.length > 1) {
      allVtime = statenow.perehods.reduce((acc, item) => {
        if (item[0] === "Вспомагательный переход" && item.length === 2) {
          if (item[1].hasOwnProperty("Vtime") && (item[1].Vtime !== "ошибки" || !item[1].Vtime)) {
            numperV++;
            return acc + item[1].Vtime;
          }
        }
        return acc;
      }, 0);
      allOtime = statenow.perehods.reduce((acc, item) => {
        if (item[0] == "Основной переход" && item.length === 2) {
          if (
            item[1].every(
              (obj) => obj.hasOwnProperty("Otime") && obj.Otime && obj.Otime !== "ошибки"
            )
          ) {
            numperO++;
            return acc + item[1].reduce((prev, current) => prev + current.Otime, 0);
          }
        }
        return acc;
      }, 0);
    }
    console.log("allVtime", allVtime);
    console.log("allOtime", allOtime);
    return { allTime: Math.round((allVtime + allOtime) * 10) / 10, numper: numperV + numperO };
  }

  return (
    <>
      <div className={`infoblock out ${calcAllTime().numper > 1 ? "" : "d-none"}`}>
        <h3 className="rezultoperation">Пронормировано переходов - {calcAllTime().numper}</h3>
        <h3 className="rezultoperation">Норма времени на операцию - {calcAllTime().allTime} мин</h3>
      </div>
    </>
  );
}

export default ValidCalcUnit;
