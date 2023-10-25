import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Longturning from "./osnperehods/Longturning";
import Boring from "./osnperehods/Boring";
import External_pruning from "./osnperehods/External_pruning";
import Internal_pruning from "./osnperehods/Internal_pruning";

function Osnperehod(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  const [massivstrtodel, setMassivstrtodel] = useState([]);

  let vspperhfromstate = useSelector((dat) => {
    return dat.tokarnovintorezn.perehods.reduce((prev, next, ind) =>
      next[0] === "Вспомагательный переход" && ind < props.numpereh && prev ? (prev = next) : prev
    );
  });

  let numvspperhfromstate = useSelector((dat) => {
    return dat.tokarnovintorezn.perehods.reduce(
      (prev, next, ind) =>
        next[0] === "Вспомагательный переход" && ind < props.numpereh ? (prev = ind) : prev,
      0
    );
  });

  function changetypetreatment(e) {
    if (e.target.value === "boring") {
      dispatch({
        type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
        data: [numvspperhfromstate, "limit_installoption", "boring"],
      });
    } else {
      dispatch({
        type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
        data: [numvspperhfromstate, "limit_installoption", "nolimit"],
      });
    }
  }

  function gettypetreatment(index) {
    if (
      statenow.perehods[props.numpereh] &&
      statenow.perehods[props.numpereh][1] &&
      statenow.perehods[props.numpereh][1][index]
    ) {
      if (statenow.perehods[props.numpereh][1][index].typetreatment) {
        switch (statenow.perehods[props.numpereh][1][index].typetreatment) {
          case "longturning":
            return <Longturning numpereh={props.numpereh} index={index} />;
          case "boring":
            return <Boring numpereh={props.numpereh} index={index} />;
          case "external_pruning":
            return <External_pruning numpereh={props.numpereh} index={index} />;
          case "internal_pruning":
            return <Internal_pruning numpereh={props.numpereh} index={index} />;
          default:
            return "";
        }
      }
    }
  }

  function addstrperehoda() {
    dispatch({ type: "ADDSTRPEREHODA_TOKARNOVINTOREZN", data: [props.numpereh, {}] });
  }

  function delstrperehoda() {
    dispatch({ type: "DELSTRPEREHODA_TOKARNOVINTOREZN", data: [props.numpereh, massivstrtodel] });
    setMassivstrtodel(() => []);
  }

  function checkChangeStr(e) {
    if (massivstrtodel.includes(String(e.target.value))) {
      setMassivstrtodel(massivstrtodel.filter((item) => item != e.target.value));
    } else {
      setMassivstrtodel([...massivstrtodel, e.target.value]);
    }
  }

  function gettimestr(index) {
    if (
      statenow.perehods[props.numpereh][1][index].hasOwnProperty("Otime") &&
      !isNaN(statenow.perehods[props.numpereh][1][index].Otime) &&
      statenow.perehods[props.numpereh][1][index].Otime != 0
    ) {
      return " - " + Number(statenow.perehods[props.numpereh][1][index].Otime).toFixed(1) + " мин";
    } else return "";
  }

  useEffect(() => {
    if (statenow.perehods[props.numpereh][1]) {
      statenow.perehods[props.numpereh][1].map((item, strindex) => {
        dispatch({
          type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typecentr", vspperhfromstate[1].typecentr, strindex],
        });
        dispatch({
          type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typelunet", vspperhfromstate[1].typelunet, strindex],
        });
      });
    }
    dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
  }, [vspperhfromstate[1].typecentr, vspperhfromstate[1].typelunet]);

  return (
    <>
      {statenow.perehods[props.numpereh][1]
        ? statenow.perehods[props.numpereh][1].map((item, index) => (
            <>
              <div className="checkstrpereh">
                <input
                  type="checkbox"
                  value={index}
                  className="form-check-input"
                  onChange={checkChangeStr}
                  checked={massivstrtodel.includes(String(index)) ? true : false}
                />
              </div>
              <h6 className="namestrpereh">
                {index + 1}. Строка {gettimestr(index)}
              </h6>

              <div className="infoblock__item">
                <div className="inpname">Вид обработки:</div>
                <select
                  className="selectbox_long"
                  value={
                    statenow.perehods[props.numpereh][1][index].typetreatment
                      ? statenow.perehods[props.numpereh][1][index].typetreatment
                      : ""
                  }
                  onChange={(e) => {
                    changetypetreatment(e);
                    dispatch({
                      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                      data: [props.numpereh, "typetreatment", e.target.value, index],
                    });
                    dispatch({
                      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                      data: [props.numpereh, "typecentr", vspperhfromstate[1].typecentr, index],
                    });
                    dispatch({
                      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                      data: [props.numpereh, "typelunet", vspperhfromstate[1].typelunet, index],
                    });

                    dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                  }}
                >
                  <option selected value=""></option>
                  <option value="longturning">точение</option>
                  <option
                    value="boring"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    растачивание
                  </option>
                  <option value="external_pruning">наружная подрезка</option>
                  <option value="internal_pruning">внутренняя подрезка</option>
                  <option value="prorezka_otrezka">прорезка и отрезка</option>
                  <option
                    value="drilling"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    сверление
                  </option>
                </select>
              </div>

              {gettypetreatment(index)}
            </>
          ))
        : ""}

      <div className="d-flex flex-sm-row flex-column gap-2 btn-str">
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm w-100"
          onClick={addstrperehoda}
        >
          Добавить строку перехода
        </button>
        <button type="button" class="btn btn-outline-danger btn-sm w-100" onClick={delstrperehoda}>
          Удалить строку перехода
        </button>
      </div>
    </>
  );
}

export default Osnperehod;
