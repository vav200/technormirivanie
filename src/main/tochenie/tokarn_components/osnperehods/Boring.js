import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// --------------- растачивание -----------------
function Boring(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  const [stateallowence, setStateallowence] = useState("");
  const [stateoverhang, setStateOverhang] = useState();
  let allow = React.createRef();
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

  function maxallowence(e, ind) {
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", "", props.index],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", "", props.index],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", "", props.index],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", "", props.index],
            });
          } else {
            setStateallowence("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateallowence", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "allowance", e.target.value, props.index],
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
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", "", props.index],
            });
          } else {
            setStateOverhang("");
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "stateoverhang", "", ind],
            });
            dispatch({
              type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              data: [props.numpereh, "length", e.target.value, props.index],
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
      data: [props.numpereh, "diameter", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "length", "", props.index],
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
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "availability_SOG", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "typecuttingmaterial", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "cuttingmaterial", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "mainplanangle", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "mandrel_section", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "vertex_radius", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "crust", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "impact_treatment", "", props.index],
    });
    dispatch({
      type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
      data: [props.numpereh, "charactertreatment", "", props.index],
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
            !statenow.perehods[props.numpereh][1][props.index].charactertreatment
              ? ""
              : "inpname__withData"
          }`}
        >
          Характер обработки:
        </div>
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].crust
              ? ""
              : "inpname__withData"
          }`}
        >
          Наличие корки:
        </div>
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
        <div className="toolname">расточной резец</div>
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
          !statenow.perehods[props.numpereh][1][props.index].charactertreatment ||
          statenow.perehods[props.numpereh][1][props.index].charactertreatment !== "finish"
            ? "d-none"
            : ""
        }`}
      >
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].vertex_radius
              ? ""
              : "inpname__withData"
          }`}
        >
          - радиус вершины, мм:
        </div>
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].cuttingmaterial
              ? ""
              : "inpname__withData"
          }`}
        >
          - марка материала:
        </div>
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].mainplanangle
              ? ""
              : "inpname__withData"
          }`}
        >
          - угол в плане:
        </div>
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].diameter
              ? ""
              : "inpname__withData"
          }`}
        >
          Диаметр обработки, мм:
        </div>
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].length
              ? ""
              : "inpname__withData"
          }`}
        >
          Длина обработки, мм:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${stateoverhang ? "selectbox_error" : "selectbox"}`}
            value={
              statenow.perehods[props.numpereh][1][props.index].length
                ? statenow.perehods[props.numpereh][1][props.index].length
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].roghness
              ? ""
              : "inpname__withData"
          }`}
        >
          Шероховатость Ra, мм:
        </div>
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
          {/* <option
                    value="20"
                    disabled={
                      statenow.perehods[props.numpereh][1][index].accuracy &&
                      statenow.perehods[props.numpereh][1][index].accuracy !== "12_14"
                        ? true
                        : false
                    }
                  >
                    Ra20
                  </option> */}
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
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1][props.index] ||
            !statenow.perehods[props.numpereh][1][props.index].allowance
              ? ""
              : "inpname__withData"
          }`}
        >
          Припуск на сторону, мм:
        </div>
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
              maxallowence(e, props.index);
              // dispatch({
              //   type: "DATAOSNPEREHODA_TOKARNOVINTOREZN",
              //   data: [props.numpereh, "allowance", e.target.value, props.index],
              // });
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

export default Boring;
