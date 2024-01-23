import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Internal_thread_cutting(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  let mandreloverhang = React.createRef();
  const [stateoverhang, setStateOverhang] = useState();
  let vspperhfromstate = useSelector((dat) => {
    return dat.tokarnovintorezn.perehods.reduce((prev, next, ind) =>
      next[0] === "Вспомагательный переход" && ind < props.numpereh && prev ? (prev = next) : prev
    );
  });

  let maxDiameter = "";
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
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "Otime", 0, props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typeinstrum", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typecuttingmaterial", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typethread", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "stepthread", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "diameter", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "inchdiameter", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "length", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "accuracy", "", props.index],
    });
  }, []);

  return (
    <>
      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].typeinstrum
              ? ""
              : "inpname__withData"
          }`}
        >
          Режущий инструмент:
        </div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "typeinstrum", e.target.value, props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "mandrel_section", "", props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "numtaps", "", props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "typecuttingmaterial", "", props.index],
            });
            e.target.value === "by_tap_and_die" &&
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "typecuttingmaterial", "bistrorez", props.index],
              });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
          defaultValue=""
        >
          <option selected value=""></option>
          <option selected value="by_cutter">
            Резец
          </option>
          <option selected value="by_tap_and_die">
            Метчик
          </option>
        </select>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typeinstrum ||
          statenow.perehods[props.numpereh][1][props.index].typeinstrum !== "by_tap_and_die"
            ? "d-none"
            : ""
        }`}
      >
        <div
          className={`inpname ${
            statenow.perehods[props.numpereh][1][props.index].numtaps ||
            statenow.perehods[props.numpereh][1][props.index].numtaps
              ? "inpname__withData"
              : ""
          }`}
        >
          Метчиков в комплекте:
        </div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "numtaps", e.target.value, props.index],
            });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
          defaultValue=""
        >
          <option selected value=""></option>
          <option selected value="1">
            1
          </option>
          <option selected value="2">
            2
          </option>
          <option selected value="3">
            3
          </option>
        </select>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typeinstrum ||
          statenow.perehods[props.numpereh][1][props.index].typeinstrum === "by_tap_and_die"
            ? "d-none"
            : ""
        }`}
      >
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].mandrel_section
              ? ""
              : "inpname__withData"
          }`}
        >
          Сечение державки:
        </div>
        <select
          className="selectbox"
          value={
            statenow.perehods[props.numpereh][1][props.index].mandrel_section
              ? statenow.perehods[props.numpereh][1][props.index].mandrel_section
              : ""
          }
          onChange={(e) => {
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "mandrel_section", e.target.value, props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
            setStateOverhang("");
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
        >
          <option selected value=""></option>
          <option value="12x12">12 х 12</option>
          <option value="16x16">16 х 16</option>
          <option value="20x20">20 х 20</option>
          <option value="25x25">25 х 25</option>
          <option value="30x30">30 х 30</option>
          <option value="40x40">40 х 40</option>
          <option value="60x60">60 х 60</option>
          <option value="80x80">80 х 80</option>
        </select>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typeinstrum ||
          statenow.perehods[props.numpereh][1][props.index].typeinstrum === "by_tap_and_die"
            ? "d-none"
            : ""
        }`}
      >
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

      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].typethread
              ? ""
              : "inpname__withData"
          }`}
        >
          Вид резьбы:
        </div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "typethread", e.target.value, props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stepthread", "", props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "diameter", "", props.index],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "inchdiameter", "", props.index],
            });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
          value={
            statenow.perehods[props.numpereh][1][props.index].typethread
              ? statenow.perehods[props.numpereh][1][props.index].typethread
              : ""
          }
          defaultValue=""
        >
          <option selected value=""></option>
          <option selected value="metric">
            Метрическая
          </option>
          <option selected value="inch">
            Трубная
          </option>
          <option selected value="trapezoidal">
            Трапецеидальная
          </option>
          <option selected value="persistent">
            Упорная (33 град.)
          </option>
        </select>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typethread ||
          statenow.perehods[props.numpereh][1][props.index].typethread === "inch"
            ? "d-none"
            : ""
        }`}
      >
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].diameter
              ? ""
              : "inpname__withData"
          }`}
        >
          Диаметр резьбы, мм
        </div>
        <div className={`d-inline-block`}>
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

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typethread ||
          statenow.perehods[props.numpereh][1][props.index].typethread !== "inch"
            ? "d-none"
            : ""
        }`}
      >
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].inchdiameter
              ? ""
              : "inpname__withData"
          }`}
        >
          Диаметр резьбы, дюйм
        </div>
        <div className={`d-inline-block`}>
          <select
            className="selectbox"
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "inchdiameter", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
            value={
              statenow.perehods[props.numpereh][1][props.index].inchdiameter
                ? statenow.perehods[props.numpereh][1][props.index].inchdiameter
                : ""
            }
            defaultValue=""
          >
            <option selected value=""></option>
            <option selected value="inch_1/2">
              1/2
            </option>
            <option selected value="inch_3/4">
              3/4
            </option>
            <option selected value="inch1">
              1
            </option>
            <option selected value="inch1_1/2">
              1 1/2
            </option>
            <option selected value="inch2">
              2
            </option>
            <option selected value="inch2_1/2">
              2 1/2
            </option>
            <option selected value="inch3">
              3
            </option>
          </select>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          !statenow.perehods[props.numpereh][1][props.index].typethread ||
          statenow.perehods[props.numpereh][1][props.index].typethread === "inch"
            ? "d-none"
            : ""
        }`}
      >
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].stepthread
              ? ""
              : "inpname__withData"
          }`}
        >
          Шаг резьбы, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.perehods[props.numpereh][1][props.index].stepthread === false
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={
              statenow.perehods[props.numpereh][1][props.index].stepthread
                ? statenow.perehods[props.numpereh][1][props.index].stepthread
                : ""
            }
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "stepthread", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.perehods[props.numpereh][1][props.index].stepthread === false
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
          Длина резьбы, мм:
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

      <div className={`infoblock__item`}>
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].accuracy
              ? ""
              : "inpname__withData"
          }`}
        >
          Точность
        </div>
        <div className={`d-inline-block`}>
          <select
            className="selectbox"
            onChange={(e) => {
              dispatch({
                type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
                data: [props.numpereh, "accuracy", e.target.value, props.index],
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
            value={
              statenow.perehods[props.numpereh][1][props.index].accuracy
                ? statenow.perehods[props.numpereh][1][props.index].accuracy
                : ""
            }
            defaultValue=""
          >
            <option selected value=""></option>
            <option selected value="kl1">
              1 кл.
            </option>
            <option selected value="kl2">
              2 кл.
            </option>
          </select>
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
          <div
            className={
              statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial ===
                "bistrorez" &&
              statenow.perehods[props.numpereh][1][props.index].typeinstrum === "by_cutter"
                ? "d-none"
                : ""
            }
          >
            <li className="modeblock__item">
              скорость резания - {statenow.perehods[props.numpereh][1][props.index].cuttingspeed}{" "}
              м/мин
            </li>
            <li className="modeblock__item">
              частота вращения - {statenow.perehods[props.numpereh][1][props.index].rpm} об/мин
            </li>
            <li className="modeblock__item">
              число проходов - {statenow.perehods[props.numpereh][1][props.index].numprohod}
            </li>
          </div>

          <div
            className={
              statenow.perehods[props.numpereh][1][props.index].typecuttingmaterial ===
                "bistrorez" &&
              statenow.perehods[props.numpereh][1][props.index].typeinstrum === "by_cutter"
                ? ""
                : "d-none"
            }
          >
            <li className="modeblock__item">
              скорость резания при прорезке -{" "}
              {statenow.perehods[props.numpereh][1][props.index].cuttingspeed_p} м/мин
            </li>
            <li className="modeblock__item">
              частота вращения при прорезке -{" "}
              {statenow.perehods[props.numpereh][1][props.index].rpm_p} об/мин
            </li>
            <li className="modeblock__item">
              число проходов при прорезке -{" "}
              {statenow.perehods[props.numpereh][1][props.index].numprohod_p}
            </li>
            <li className="modeblock__item">
              скорость резания при зачистке -{" "}
              {statenow.perehods[props.numpereh][1][props.index].cuttingspeed_z} м/мин
            </li>
            <li className="modeblock__item">
              частота вращения при зачистке -{" "}
              {statenow.perehods[props.numpereh][1][props.index].rpm_z} об/мин
            </li>
            <li className="modeblock__item">
              число проходов при зачистке -{" "}
              {statenow.perehods[props.numpereh][1][props.index].numprohod_z}
            </li>
          </div>

          <li className="modeblock__item">
            подача - {statenow.perehods[props.numpereh][1][props.index].feed} мм/об
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

export default Internal_thread_cutting;
