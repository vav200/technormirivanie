import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Longturning(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  const [stateallowence, setStateallowence] = useState("");
  let allow = React.createRef();

  let vspperhfromstate = useSelector((dat) => {
    return dat.tokarnovintorezn.perehods.reduce((prev, next, ind) =>
      next[0] === "Вспомагательный переход" && ind < props.numpereh && prev ? (prev = next) : prev
    );
  });

  let typecuttingmaterialfromstate = "";
  let maxDiameter = "";

  if (
    statenow.perehods[props.numpereh] &&
    statenow.perehods[props.numpereh][1] &&
    statenow.perehods[props.numpereh][1][props.index]
  ) {
    if (statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial) {
      typecuttingmaterialfromstate =
        statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial;
    }
  }

  switch (vspperhfromstate[1].installoption) {
    case "samocentrpatron":
    case "chetirehkulachk":
    case "samocentrpatron_lunet":
    case "chetirehkulachk_lunet":
      maxDiameter = statenow.maxDiameterPatron;
      break;

    case "samocentrpatron_centr":
    case "samocentrpatron_centr_lunet":
    case "chetirehkulachk_centr":
    case "chetirehkulachk_centr_lunet":
      maxDiameter = statenow.maxDiameterCentra;
      break;
  }

  function maxallowence(ind) {
    if (
      Object.keys(statenow.perehods[props.numpereh][1][ind]).includes("roghness") &&
      statenow.perehods[props.numpereh][1][ind].roghness
    ) {
      switch (statenow.perehods[props.numpereh][1][ind].roghness) {
        case "20":
          if (allow.current.value > 6) {
            setStateallowence("не более 6");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "не более 6", ind],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
          }
          break;
        case "10":
          if (allow.current.value > 4) {
            setStateallowence("не более 4");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "не более 4", ind],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
          }
          break;
        case "5":
          if (allow.current.value > 2) {
            setStateallowence("не более 2");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "не более 2", ind],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
          }
          break;
        case "2.5":
          if (allow.current.value > 1) {
            setStateallowence("не более 1");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "не более 1", ind],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
          }
          break;
        default:
          setStateallowence("");
          dispatch({
            type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "stateallowence", "", ind],
          });
          break;
      }
    } else setStateallowence("");
  }

  useEffect(() => {
    if (statenow.perehods[props.numpereh][1]) {
      statenow.perehods[props.numpereh][1].map((item, strindex) => {
        dispatch({
          type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typecuttingmaterial", "", strindex],
        });
        dispatch({
          type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "cuttingmaterial", "", strindex],
        });
      });
    }
  }, [statenow.partmaterial]);

  return (
    <>
      <div className="infoblock__item">
        <div className="inpname">Характер обработки:</div>
        <div className={`radiobox d-inline-block `}>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              черновая
              <input
                type="radio"
                name={"charactertreatment" + props.numpereh + props.index}
                className="form-check-input"
                value="rough"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "charactertreatment", e.target.value, props.index],
                  });
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "accuracy", "", props.index],
                  });
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "roghness", "", props.index],
                  });
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "allowance", "", props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              чистовая
              <input
                type="radio"
                name={"charactertreatment" + props.numpereh + props.index}
                className="form-check-input"
                value="finish"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "charactertreatment", e.target.value, props.index],
                  });
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "accuracy", "", props.index],
                  });
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "roghness", "", props.index],
                  });
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "allowance", "", props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].charactertreatment ||
          statenow.perehods[props.numpereh][1][props.index].charactertreatment !== "rough"
            ? "d-none"
            : ""
        }`}
      >
        <div className="inpname">Наличие корки:</div>
        <div className={`radiobox d-inline-block `}>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              есть
              <input
                type="radio"
                name={"crust" + props.numpereh + props.index}
                className="form-check-input"
                value="withcrust"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "crust", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              нет
              <input
                type="radio"
                name={"crust" + props.numpereh + props.index}
                className="form-check-input"
                value="withoutcrust"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "crust", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].charactertreatment ||
          statenow.perehods[props.numpereh][1][props.index].charactertreatment !== "rough"
            ? "d-none"
            : ""
        }`}
      >
        <div className="inpname">Обработка на удар:</div>
        <div className={`radiobox d-inline-block `}>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              есть
              <input
                type="radio"
                name={"impact_treatment" + props.numpereh + props.index}
                className="form-check-input"
                value="hit"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "impact_treatment", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              нет
              <input
                type="radio"
                name={"impact_treatment" + props.numpereh + props.index}
                className="form-check-input"
                value="nohit"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "impact_treatment", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Применеие СОЖ:</div>
        <div className={`radiobox d-inline-block `}>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              да
              <input
                type="radio"
                name={"availability_SOG" + props.numpereh + props.index}
                className="form-check-input"
                value="sog"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "availability_SOG", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              нет
              <input
                type="radio"
                name={"availability_SOG" + props.numpereh + props.index}
                className="form-check-input"
                value="nosog"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "availability_SOG", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Режущий инструмент:</div>
        <div className="toolname">проходной резец</div>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].charactertreatment ||
          statenow.perehods[props.numpereh][1][props.index].charactertreatment !== "finish"
            ? "d-none"
            : ""
        }`}
      >
        <div className="inpname">- радиус вершины, мм:</div>
        <div className={`radiobox d-inline-block `}>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              0,5
              <input
                type="radio"
                name={"vertex_radius" + props.numpereh + props.index}
                className="form-check-input"
                value="0.5"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "vertex_radius", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              1
              <input
                type="radio"
                name={"vertex_radius" + props.numpereh + props.index}
                className="form-check-input"
                value="1"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "vertex_radius", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              2
              <input
                type="radio"
                name={"vertex_radius" + props.numpereh + props.index}
                className="form-check-input"
                value="2"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "vertex_radius", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className={`form-check form-check-inline`}>
            <label className={`form-check-label`}>
              3
              <input
                type="radio"
                name={"vertex_radius" + props.numpereh + props.index}
                className="form-check-input"
                value="3"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "vertex_radius", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">- материал:</div>
        <div className={`radiobox d-inline-block `}>
          <div className="form-check">
            <label className={`form-check-label`}>
              твердый сплав
              <input
                type="radio"
                name={"typecuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="tvsplav"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "typecuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial ===
                  "tvsplav"
                }
              />
            </label>
          </div>
          <div className={`form-check ${statenow.partmaterial === "matK" ? "d-none" : ""}`}>
            <label className={`form-check-label`}>
              быстрорежущая сталь
              <input
                type="radio"
                name={"typecuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="bistrorez"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "typecuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial ===
                  "bistrorez"
                }
              />
            </label>
          </div>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial ? "d-none" : ""
        }`}
      >
        <div className="inpname">- марка материала:</div>
        <div className={`radiobox d-inline-block `}>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial !== "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-label`}>
              Т5К10
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="t5k10"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "t5k10"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial !== "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-labe`}>
              Т15К6
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="t15k6"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "t15k6"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" ||
              statenow.perehods[props.numpereh][1][props.index].charactertreatment === "rough" ||
              statenow.partmaterial !== "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-labe`}>
              Т30К4
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="t30k4"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "t30k4"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial !== "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-label`}>
              ТТ7К12
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="tt7k12"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "tt7k12"
                }
              />
            </label>
          </div>

          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial === "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-label`}>
              ВК8
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="vk8"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "vk8"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial === "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-label`}>
              ВК6
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="vk6"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "vk6"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial === "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-label`}>
              ВК3
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="vk3"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "vk3"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${
              typecuttingmaterialfromstate !== "tvsplav" || statenow.partmaterial === "matP"
                ? "d-none"
                : ""
            }`}
          >
            <label className={`form-check-label`}>
              ВК2
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="vk2"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "vk2"
                }
              />
            </label>
          </div>

          <div
            className={`form-check ${typecuttingmaterialfromstate !== "bistrorez" ? "d-none" : ""}`}
          >
            <label className={`form-check-label`}>
              Р18
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="r18"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "r18"
                }
              />
            </label>
          </div>
          <div
            className={`form-check ${typecuttingmaterialfromstate !== "bistrorez" ? "d-none" : ""}`}
          >
            <label className={`form-check-label`}>
              Р6М5
              <input
                type="radio"
                name={"cuttingmaterial" + props.numpereh + props.index}
                className="form-check-input"
                value="r6m5"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                checked={
                  statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "r6m5"
                }
              />
            </label>
          </div>
        </div>
      </div>

      <div className={`infoblock__item `}>
        <div className="inpname">- угол в плане:</div>
        <div className={`radiobox d-inline-block `}>
          <div className="form-check">
            <label className={`form-check-label`}>
              45 град.
              <input
                type="radio"
                name={"mainplanangle" + props.numpereh + props.index}
                className="form-check-input"
                value="45"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "mainplanangle", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className={`form-check-labe`}>
              60 град.
              <input
                type="radio"
                name={"mainplanangle" + props.numpereh + props.index}
                className="form-check-input"
                value="60"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "mainplanangle", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className={`form-check-label`}>
              90 град.
              <input
                type="radio"
                name={"mainplanangle" + props.numpereh + props.index}
                className="form-check-input"
                value="90"
                onChange={(e) => {
                  dispatch({
                    type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "mainplanangle", e.target.value, props.index],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Диаметр обработки, мм:</div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].diameter > maxDiameter
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].diameter
                ? statenow.perehods[props.numpereh][1][props.index].diameter
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "diameter", e.target.value, props.index],
              });
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "maxDiameter", maxDiameter, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].diameter > maxDiameter
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            больше допустимого
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Длина обработки, мм:</div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].length > statenow.maxLength
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].length
                ? statenow.perehods[props.numpereh][1][props.index].length
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "length", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].length > statenow.maxLength
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            больше допустимой
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Квалитет точности:</div>
        <select
          className="selectbox"
          value={
            statenow.perehods[props.numpereh][1][props.index].accuracy
              ? statenow.perehods[props.numpereh][1][props.index].accuracy
              : ""
          }
          onChange={(e) => {
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "accuracy", e.target.value, props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "roghness", "", props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", "", props.index],
            });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
        >
          <option selected value=""></option>
          <option
            value="0"
            disabled={
              statenow.perehods[props.numpereh][1][props.index].charactertreatment &&
              statenow.perehods[props.numpereh][1][props.index].charactertreatment === "finish"
                ? true
                : false
            }
          >
            без измерения
          </option>
          <option value="12_14">12-14</option>
          <option value="10_11">10-11</option>
          <option
            value="8_9"
            disabled={
              statenow.perehods[props.numpereh][1][props.index].charactertreatment &&
              statenow.perehods[props.numpereh][1][props.index].charactertreatment === "rough"
                ? true
                : false
            }
          >
            8-9
          </option>
          <option
            value="6_7"
            disabled={
              statenow.perehods[props.numpereh][1][props.index].charactertreatment &&
              statenow.perehods[props.numpereh][1][props.index].charactertreatment === "rough"
                ? true
                : false
            }
          >
            6-7
          </option>
        </select>
      </div>

      <div
        className={`infoblock__item ${
          statenow.perehods[props.numpereh][1][props.index].charactertreatment &&
          statenow.perehods[props.numpereh][1][props.index].charactertreatment !== "finish"
            ? "d-none"
            : ""
        }`}
      >
        <div className="inpname">Шероховатость Ra, мм:</div>
        <select
          className="selectbox"
          value={
            statenow.perehods[props.numpereh][1][props.index].roghness
              ? statenow.perehods[props.numpereh][1][props.index].roghness
              : ""
          }
          onChange={(e) => {
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "roghness", e.target.value, props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", "", props.index],
            });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            setStateallowence("");
          }}
        >
          <option selected></option>
          <option
            value="10"
            disabled={
              statenow.perehods[props.numpereh][1][props.index].accuracy &&
              statenow.perehods[props.numpereh][1][props.index].accuracy === "6_7"
                ? true
                : false
            }
          >
            Ra10
          </option>
          <option value="5">Ra5</option>
          <option value="2.5">Ra2.5</option>
        </select>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Припуск на сторону, мм:</div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${stateallowence ? "selectbox_error" : "selectbox"}`}
            value={
              statenow.perehods[props.numpereh][1][props.index].allowance
                ? statenow.perehods[props.numpereh][1][props.index].allowance
                : ""
            }
            onChange={(e) => {
              maxallowence(props.index);
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "allowance", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
            ref={allow}
          />
          <div
            className={`selectbox__errormessage ${
              stateallowence ? "selectbox__errormessage_active" : ""
            }`}
          >
            {stateallowence}
          </div>
        </div>
      </div>
      <div
        className={`modeblock ${
          statenow.perehods[props.numpereh][1][props.index].hasOwnProperty("Otime") &&
          !isNaN(statenow.perehods[props.numpereh][1][props.index].Otime) &&
          statenow.perehods[props.numpereh][1][props.index].Otime != 0
            ? ""
            : "d-none"
        }`}
      >
        <h5 className="modeblock__title">Режимы обработки:</h5>
        <ul className="modeblock__list">
          <li className="modeblock__item">
            скорость резания - {statenow.perehods[props.numpereh][1][props.index].cuttingspeed}{" "}
            м/мин
          </li>
          <li className="modeblock__item">
            частота вращения - {statenow.perehods[props.numpereh][1][props.index].rpm} об/мин
          </li>
          <li className="modeblock__item">
            подача - {statenow.perehods[props.numpereh][1][props.index].feed} мм/об
          </li>
          <li className="modeblock__item">
            число проходов - {statenow.perehods[props.numpereh][1][props.index].numprohod}
          </li>
          <li className="modeblock__item">
            глубина резания - {statenow.perehods[props.numpereh][1][props.index].cutdepth} мм
          </li>
          <li className="modeblock__item">
            машинное время - {statenow.perehods[props.numpereh][1][props.index].machintime} мин
          </li>
          <li className="modeblock__item">
            вспомагательное время -{" "}
            {statenow.perehods[props.numpereh][1][props.index].trasitiontime} мин
          </li>
        </ul>
      </div>
    </>
  );
}

export default Longturning;
