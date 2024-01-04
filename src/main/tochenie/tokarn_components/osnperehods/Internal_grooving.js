import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//---------------- Внутренние канавки -----------------------
function Internal_grooving(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  const [stateoverhang, setStateOverhang] = useState();
  let mandreloverhang = React.createRef();

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

  function maxoverhang(ind, e) {
    if (
      Object.keys(statenow.perehods[props.numpereh][1][ind]).includes("mandrel_section") &&
      statenow.perehods[props.numpereh][1][ind].mandrel_section
    ) {
      switch (statenow.perehods[props.numpereh][1][ind].mandrel_section) {
        case "12x12":
          if (mandreloverhang.current.value > 60) {
            setStateOverhang("не более 60");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 60", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "16x16":
          if (mandreloverhang.current.value > 150) {
            setStateOverhang("не более 150");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 150", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "20x20":
          if (mandreloverhang.current.value > 150) {
            setStateOverhang("не более 150");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 150", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "25x25":
          if (mandreloverhang.current.value > 200) {
            setStateOverhang("не более 200");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 200", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "30x30":
          if (mandreloverhang.current.value > 250) {
            setStateOverhang("не более 250");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 250", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "40x40":
          if (mandreloverhang.current.value > 800) {
            setStateOverhang("не более 800");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 800", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "60x60":
          if (mandreloverhang.current.value > 1200) {
            setStateOverhang("не более 1200");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 1200", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        case "80x80":
          if (mandreloverhang.current.value > 1200) {
            setStateOverhang("не более 1200");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "не более 1200", ind],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "controllength", e.target.value, props.index],
            });
          }
          break;
        default:
          setStateOverhang("");
          dispatch({
            type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "stateoverhang", "", ind],
          });
          break;
      }
    } else setStateOverhang("");
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
      data: [props.numpereh, "cutting_width", "", props.index],
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
      data: [props.numpereh, "mandrel_section", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "availability_SOG", "", props.index],
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
        <div className="inpname">Режущий инструмент:</div>
        <div className="toolname">канавочный резец</div>
      </div>

      <div className="infoblock__item">
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
              data: [props.numpereh, "controllength", "", props.index],
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

      <div className="infoblock__item">
        <div className={`inpname ${false ? "" : "inpname__withData"}`}>- материал:</div>
        <div className={`radiobox d-inline-block `}>
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
          ДиаметрD2, мм:
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
            className={`${stateoverhang ? "selectbox_error" : "selectbox"}`}
            value={
              statenow.perehods[props.numpereh][1][props.index].controllength
                ? statenow.perehods[props.numpereh][1][props.index].controllength
                : ""
            }
            onChange={(e) => {
              maxoverhang(props.index, e);
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
            ref={mandreloverhang}
          />
          <div
            className={`selectbox__errormessage ${
              stateoverhang ? "selectbox__errormessage_active" : ""
            }`}
          >
            {stateoverhang}
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
              statenow.perehods[props.numpereh][1][props.index].cutting_width > 20
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
              statenow.perehods[props.numpereh][1][props.index].cutting_width > 20
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

export default Internal_grooving;
