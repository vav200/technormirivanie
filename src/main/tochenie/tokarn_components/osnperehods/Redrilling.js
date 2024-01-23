import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Redrilling(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  let typecuttingmaterialfromstate = "";
  let maxDiameter = "";

  let vspperhfromstate = useSelector((dat) => {
    return dat.tokarnovintorezn.perehods.reduce((prev, next, ind) =>
      next[0] === "Вспомагательный переход" && ind < props.numpereh && prev ? (prev = next) : prev
    );
  });

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

  useEffect(() => {
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "diameter", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "length", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "availability_SOG", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "Otime", 0, props.index],
    });
  }, []);

  return (
    <>
      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].availability_SOG
              ? ""
              : "inpname__withData"
          }`}
        >
          Применение СОЖ:
        </div>
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
        <div className="inpname inpname__withData">Режущий инструмент:</div>
        <div className="toolname">сверло спиральное</div>
      </div>

      <div className="infoblock__item">
        <div className={`inpname ${false ? "" : "inpname__withData"}`}>- материал:</div>
        <div className={`radiobox d-inline-block `}>
          {/* <div className="form-check">
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
          </div> */}
          <div className={`form-check`}>
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
                defaultChecked
              />
            </label>
          </div>
        </div>
      </div>

      <div className={`infoblock__item`}>
        <div className={`inpname ${false ? "" : "inpname__withData"}`}>- марка материала:</div>
        <div className={`radiobox d-inline-block `}>
          <div className={`form-check`}>
            <label className={`form-check-label`}>
              Р6М5
              <input
                type="radio"
                name={"Р6М5" + props.numpereh + props.index}
                className="form-check-input"
                value="r6m5"
                // onChange={(e) => {
                //   dispatch({
                //     type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                //     data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                //   });
                //   dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                // }}
                // checked={
                //   statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "r6m5"
                // }
                // checked={true}
                defaultChecked
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].diameter
              ? ""
              : "inpname__withData"
          }`}
        >
          Диаметр рассверления, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].diameter > 60
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
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].diameter > 60
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            больше допустимого
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].length
              ? ""
              : "inpname__withData"
          }`}
        >
          Глубина рассверления, мм:
        </div>
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
          <li
            className={`modeblock__item ${
              !statenow.perehods[props.numpereh][1][props.index].feed_after_05R ? "d-none" : ""
            }`}
          >
            подача после 0,5R - {statenow.perehods[props.numpereh][1][props.index].feed_after_05R}{" "}
            мм/об
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

export default Redrilling;
