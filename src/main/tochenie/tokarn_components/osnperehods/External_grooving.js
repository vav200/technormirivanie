import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//---------------- Наружные канавки -----------------------
function External_grooving(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  const [stateoverhang, setStateOverhang] = useState();

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
      data: [props.numpereh, "diameter1", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "diameter2", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "width", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "controllength", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "accuracy", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "availability_SOG", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "impact_treatment", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typecuttingmaterial", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "Otime", 0, props.index],
    });
  }, []);

  return (
    <>
      <div className={`infoblock__item `}>
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].impact_treatment
              ? ""
              : "inpname__withData"
          }`}
        >
          Обработка на удар:
        </div>
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
        <div className="toolname">отрезной резец</div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial
              ? ""
              : "inpname__withData"
          }`}
        >
          - материал:
        </div>
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
        <div className={`inpname ${false ? "" : "inpname__withData"}`}>- марка материала:</div>
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
                name={"Т5К10" + props.numpereh + props.index}
                className="form-check-input"
                value="t5k10"
                // onChange={(e) => {
                //   dispatch({
                //     type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                //     data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                //   });
                //   dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                // }}
                // checked={
                //   statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "t5k10"
                // }
                // checked={true}
                defaultChecked
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
                name={"ВК8" + props.numpereh + props.index}
                className="form-check-input"
                value="vk8"
                // onChange={(e) => {
                //   dispatch({
                //     type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                //     data: [props.numpereh, "cuttingmaterial", e.target.value, props.index],
                //   });
                //   dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                // }}
                // checked={
                //   statenow.perehods[props.numpereh][1][props.index].cuttingmaterial === "vk8"
                // }
                defaultChecked
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
            !statenow.perehods[props.numpereh][1][props.index].diameter1
              ? ""
              : "inpname__withData"
          }`}
        >
          Диаметр D1, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].diameter1 > maxDiameter
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].diameter1
                ? statenow.perehods[props.numpereh][1][props.index].diameter1
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "diameter1", e.target.value, props.index],
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
              statenow.perehods[props.numpereh][1][props.index].diameter1 > maxDiameter
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
            !statenow.perehods[props.numpereh][1][props.index].diameter2
              ? ""
              : "inpname__withData"
          }`}
        >
          Диаметр D2, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].diameter2 > maxDiameter
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].diameter2
                ? statenow.perehods[props.numpereh][1][props.index].diameter2
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "diameter2", e.target.value, props.index],
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
              statenow.perehods[props.numpereh][1][props.index].diameter2 > maxDiameter
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
            !statenow.perehods[props.numpereh][1][props.index].controllength
              ? ""
              : "inpname__withData"
          }`}
        >
          Контроль размера, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].controllength > statenow.maxLength
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].controllength
                ? statenow.perehods[props.numpereh][1][props.index].controllength
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "controllength", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].controllength > statenow.maxLength
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
            !statenow.perehods[props.numpereh][1][props.index].width
              ? ""
              : "inpname__withData"
          }`}
        >
          Ширина канавки, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].width > statenow.maxLength
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].width
                ? statenow.perehods[props.numpereh][1][props.index].width
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "width", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].width > statenow.maxLength
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            больше допустимой
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].cutting_width
              ? ""
              : "inpname__withData"
          }`}
        >
          Ширина реза, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].cutting_width > 40
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].cutting_width
                ? statenow.perehods[props.numpereh][1][props.index].cutting_width
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "cutting_width", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].cutting_width > 40
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            больше допустимой
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].accuracy
              ? ""
              : "inpname__withData"
          }`}
        >
          Квалитет точности:
        </div>
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

            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
        >
          <option selected value=""></option>
          <option value="0">без измерения</option>
          <option value="12_14">12-14</option>
          <option value="10_11">10-11</option>
          <option value="8_9">8-9</option>
          <option value="6_7">6-7</option>
        </select>
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
            число проходов - {statenow.perehods[props.numpereh][1][props.index].numprohod}
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

export default External_grooving;
