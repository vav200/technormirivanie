import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Longturning from "./osnperehods/Longturning";
import Boring from "./osnperehods/Boring";
import External_pruning from "./osnperehods/External_pruning";
import Internal_pruning from "./osnperehods/Internal_pruning";
import External_grooving from "./osnperehods/External_grooving";
import Internal_grooving from "./osnperehods/Internal_grooving";
import Drilling from "./osnperehods/Drilling";
import Redrilling from "./osnperehods/Redrilling";
import Countersinking from "./osnperehods/Countersinking";
import Reaming from "./osnperehods/Reaming";
import Internal_thread_cutting from "./osnperehods/Internal_thread_cutting";
import External_thread_cutting from "./osnperehods/External_thread_cutting";

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

  function changetypetreatment(e, ind) {
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

    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typetreatment", e.target.value, ind],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typecentr", vspperhfromstate[1].typecentr, ind],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typelunet", vspperhfromstate[1].typelunet, ind],
    });
    dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
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
          case "external_grooving":
            return <External_grooving numpereh={props.numpereh} index={index} />;
          case "internal_grooving":
            return <Internal_grooving numpereh={props.numpereh} index={index} />;
          case "drilling":
            return <Drilling numpereh={props.numpereh} index={index} />;
          case "redrilling":
            return <Redrilling numpereh={props.numpereh} index={index} />;
          case "countersinking":
            return <Countersinking numpereh={props.numpereh} index={index} />;
          case "reaming":
            return <Reaming numpereh={props.numpereh} index={index} />;
          case "external_thread_cutting":
            return <External_thread_cutting numpereh={props.numpereh} index={index} />;
          case "internal_thread_cutting":
            return <Internal_thread_cutting numpereh={props.numpereh} index={index} />;
          default:
            return "";
        }
      }
    }
  }

  function gettypethread(index) {
    switch (statenow.perehods[props.numpereh][1][index].typethread) {
      case "metric":
        return "M";
      case "inch":
        return "G";
      case "trapezoidal":
        return "Tr";
      case "persistent":
        return "S";
    }
  }

  function gettextperehoda(index) {
    if (
      statenow.perehods[props.numpereh] &&
      statenow.perehods[props.numpereh][1] &&
      statenow.perehods[props.numpereh][1][index]
    ) {
      if (statenow.perehods[props.numpereh][1][index].typetreatment) {
        switch (statenow.perehods[props.numpereh][1][index].typetreatment) {
          case "longturning":
            return (
              <span>
                {"Точить" +
                  (statenow.perehods[props.numpereh][1][index].charactertreatment === "finish"
                    ? " в меру"
                    : statenow.perehods[props.numpereh][1][index].charactertreatment === "rough"
                    ? " грубо"
                    : "")}
                {statenow.perehods[props.numpereh][1][index].diameter && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "boring":
            return (
              <span>
                {"Расточить" +
                  (statenow.perehods[props.numpereh][1][index].charactertreatment === "finish"
                    ? " в меру"
                    : statenow.perehods[props.numpereh][1][index].charactertreatment === "rough"
                    ? " грубо"
                    : "")}
                {statenow.perehods[props.numpereh][1][index].diameter && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "external_pruning":
            return (
              <span>
                {"Подрезать торец" +
                  (statenow.perehods[props.numpereh][1][index].charactertreatment === "finish"
                    ? " в меру"
                    : statenow.perehods[props.numpereh][1][index].charactertreatment === "rough"
                    ? " грубо"
                    : "")}
                {statenow.perehods[props.numpereh][1][index].diameter1 && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter1}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].diameter2 && (
                  <>
                    <span className="ms-2">до &#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter2}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].controllength && (
                  <>
                    <span className="ms-2">контролируя L = </span>
                    {statenow.perehods[props.numpereh][1][index].controllength}
                  </>
                )}
              </span>
            );
          case "internal_pruning":
            return (
              <span>
                {"Подрезать торец" +
                  (statenow.perehods[props.numpereh][1][index].charactertreatment === "finish"
                    ? " в меру"
                    : statenow.perehods[props.numpereh][1][index].charactertreatment === "rough"
                    ? " грубо"
                    : "")}
                {statenow.perehods[props.numpereh][1][index].diameter1 && (
                  <>
                    <span className="ms-2">в отв. &#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter1}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].diameter2 && (
                  <>
                    <span className="ms-2">до &#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter2}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].controllength && (
                  <>
                    <span className="ms-2">контролируя L = </span>
                    {statenow.perehods[props.numpereh][1][index].controllength}
                  </>
                )}
              </span>
            );
          case "external_grooving":
            return (
              <span>
                {"Точить канавку"}
                {statenow.perehods[props.numpereh][1][index].diameter1 && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter1}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].diameter2 && (
                  <>
                    <span className="ms-2">до &#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter2}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].width && (
                  <>
                    <span className="ms-2">шириной b = </span>
                    {statenow.perehods[props.numpereh][1][index].width}
                  </>
                )}
              </span>
            );
          case "internal_grooving":
            return (
              <span>
                {"Расточить канавку"}
                {statenow.perehods[props.numpereh][1][index].diameter1 && (
                  <>
                    <span className="ms-2">в отв. &#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter1}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].diameter2 && (
                  <>
                    <span className="ms-2">до &#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter2}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].width && (
                  <>
                    <span className="ms-2">шириной b = </span>
                    {statenow.perehods[props.numpereh][1][index].width}
                  </>
                )}
              </span>
            );
          case "drilling":
            return (
              <span>
                {"Сверлить отв."}
                {statenow.perehods[props.numpereh][1][index].diameter && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "redrilling":
            return (
              <span>
                {"Рассверлить отв."}
                {statenow.perehods[props.numpereh][1][index].diameter && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "countersinking":
            return (
              <span>
                {"Зенкеровать отв."}
                {statenow.perehods[props.numpereh][1][index].diameter && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "reaming":
            return (
              <span>
                {"Развернуть отв."}
                {statenow.perehods[props.numpereh][1][index].diameter && (
                  <>
                    <span className="ms-2">&#x2300;</span>
                    {statenow.perehods[props.numpereh][1][index].diameter}
                  </>
                )}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "external_thread_cutting":
            return (
              <span>
                {"Нарезать резьбу"}
                {statenow.perehods[props.numpereh][1][index].typethread && (
                  <span className="ms-2">{gettypethread(index)}</span>
                )}

                {statenow.perehods[props.numpereh][1][index].typethread !== "inch"
                  ? statenow.perehods[props.numpereh][1][index].diameter &&
                    statenow.perehods[props.numpereh][1][index].diameter
                  : statenow.perehods[props.numpereh][1][index].inchdiameter &&
                    statenow.perehods[props.numpereh][1][index].inchdiameter.replace(/inch_?/, "")}

                {statenow.perehods[props.numpereh][1][index].typethread !== "inch"
                  ? statenow.perehods[props.numpereh][1][index].stepthread &&
                    "*" + statenow.perehods[props.numpereh][1][index].stepthread
                  : ""}

                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
          case "internal_thread_cutting":
            return (
              <span>
                {"Нарезать резьбу"}
                {statenow.perehods[props.numpereh][1][index].typethread && (
                  <span className="ms-2">{gettypethread(index)}</span>
                )}

                {statenow.perehods[props.numpereh][1][index].typethread !== "inch"
                  ? statenow.perehods[props.numpereh][1][index].diameter &&
                    statenow.perehods[props.numpereh][1][index].diameter
                  : statenow.perehods[props.numpereh][1][index].inchdiameter &&
                    statenow.perehods[props.numpereh][1][index].inchdiameter.replace(/inch_?/, "")}

                {statenow.perehods[props.numpereh][1][index].typethread !== "inch"
                  ? statenow.perehods[props.numpereh][1][index].stepthread &&
                    "*" + statenow.perehods[props.numpereh][1][index].stepthread
                  : ""}

                {statenow.perehods[props.numpereh][1][index].length && (
                  <>
                    <span className="ms-2">L = </span>
                    {statenow.perehods[props.numpereh][1][index].length}
                  </>
                )}
              </span>
            );
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
      statenow.perehods[props.numpereh][1][index].Otime !== undefined &&
      statenow.perehods[props.numpereh][1][index].Otime != 0
    ) {
      return " - " + Number(statenow.perehods[props.numpereh][1][index].Otime).toFixed(1) + " мин)";
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
            <div key={"per" + index}>
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
                {index + 1}. {gettextperehoda(index)}
                {statenow.perehods[props.numpereh][1][index].Otime &&
                statenow.perehods[props.numpereh][1][index].Otime !== "ошибки" ? (
                  <span className="ms-3">(норма </span>
                ) : (
                  ""
                )}
                {gettimestr(index)}
              </h6>

              <div className="infoblock__item">
                <div
                  className={`inpname ${
                    !statenow.perehods[props.numpereh][1][index] ||
                    !statenow.perehods[props.numpereh][1][index].typetreatment
                      ? ""
                      : "inpname__withData"
                  }`}
                >
                  Вид обработки:
                </div>
                <select
                  className="selectbox_long"
                  value={
                    statenow.perehods[props.numpereh][1][index].typetreatment
                      ? statenow.perehods[props.numpereh][1][index].typetreatment
                      : ""
                  }
                  onChange={(e) => {
                    changetypetreatment(e, index);
                  }}
                >
                  <option selected value=""></option>
                  <option value="longturning">наружное точение</option>
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
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
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
                    value="internal_pruning"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    внутренняя подрезка
                  </option>
                  <option value="external_grooving">наружные канавки и отрезка</option>
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
                    value="internal_grooving"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    внутренние канавки
                  </option>

                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
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
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
                    value="redrilling"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    рассверливание
                  </option>
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
                    value="countersinking"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    зенкерование
                  </option>
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
                    value="reaming"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    развертывание
                  </option>
                  <option value="external_thread_cutting">резьба наружная</option>
                  <option
                    className={
                      (vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                        vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                        vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet") &&
                      "d-none"
                    }
                    value="internal_thread_cutting"
                    disabled={
                      vspperhfromstate[1].installoption === "samocentrpatron_centr" ||
                      vspperhfromstate[1].installoption === "samocentrpatron_centr_lunet" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr" ||
                      vspperhfromstate[1].installoption === "chetirehkulachk_centr_lunet"
                    }
                  >
                    резьба внутренняя
                  </option>
                </select>
              </div>

              {gettypetreatment(index)}
            </div>
          ))
        : ""}

      <div className="d-flex flex-sm-row flex-column gap-2 btn-str">
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm w-100"
          onClick={addstrperehoda}
        >
          Добавить строку перехода
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm w-100"
          onClick={delstrperehoda}
        >
          Удалить строку перехода
        </button>
      </div>
    </>
  );
}

export default Osnperehod;
