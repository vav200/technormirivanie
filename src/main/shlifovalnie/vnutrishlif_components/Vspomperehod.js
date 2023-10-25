import React, { useState } from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Vspomperehod(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.vnutrishlif);
  let instoptionfromstate = "";
  if (
    statenow.perehods[props.numpereh] &&
    statenow.perehods[props.numpereh][1] &&
    statenow.perehods[props.numpereh][1].installoption
  ) {
    instoptionfromstate = statenow.perehods[props.numpereh][1].installoption;
  }

  const [instoption, setInstoption] = useState("");

  let acc05 = React.createRef();
  let acc01 = React.createRef();
  let acc005 = React.createRef();
  let acc001 = React.createRef();
  let inst1 = React.createRef();
  let inst2 = React.createRef();
  let inst3 = React.createRef();
  let inst4 = React.createRef();

  function clearAccuracy() {
    acc05.current.checked = false;
    acc01.current.checked = false;
    acc005.current.checked = false;
    acc001.current.checked = false;
    // acc05.current.disabled = false;
    // acc01.current.disabled = false;
    // acc005.current.disabled = false;
    // acc001.current.disabled = false;
  }
  function changeWeight() {
    if (statenow.partweight && statenow.partweight > 100) {
      inst1.current.checked = false;
      inst1.current.disabled = true;
      if (
        inst2.current.checked === false &&
        inst3.current.checked === false &&
        inst4.current.checked === false
      ) {
        dispatch({
          type: "DATAVSPPEREHODA_VNUTRISHLIF",
          data: [props.numpereh, "installoption", ""],
        });
        clearAccuracy();
      }
    } else inst1.current.disabled = false;

    if (statenow.partweight && statenow.partweight < 5) {
      inst2.current.checked = false;
      inst3.current.checked = false;
      inst4.current.checked = false;
      inst2.current.disabled = true;
      inst3.current.disabled = true;
      inst4.current.disabled = true;

      if (inst1.current.checked === false) {
        dispatch({
          type: "DATAVSPPEREHODA_VNUTRISHLIF",
          data: [props.numpereh, "installoption", ""],
        });
        clearAccuracy();
      }
    } else {
      inst2.current.disabled = false;
      inst3.current.disabled = false;
      inst4.current.disabled = false;
    }
  }

  function changeInstalloption() {
    switch (instoptionfromstate) {
      case "chetirehkulachk":
        if (acc05.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_VNUTRISHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc05.current.disabled = true;
        acc05.current.checked = false;

        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "chetirehkulachk_lunet":
        if (acc001.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_VNUTRISHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc001.current.disabled = true;
        acc001.current.checked = false;

        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;

        break;
      case "samocentrpatron":
        if (acc001.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_VNUTRISHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc001.current.disabled = true;
        acc001.current.checked = false;

        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        break;
      case "samocentrpatron_lunet":
        if (acc005.current.checked === true || acc001.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_VNUTRISHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc005.current.disabled = true;
        acc001.current.disabled = true;
        acc005.current.checked = false;
        acc001.current.checked = false;

        acc05.current.disabled = false;
        acc01.current.disabled = false;
        break;

      default:
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
    }
  }

  // useEffect(() => {
  //   changeWeight();
  // }, [statenow.partweight]);

  useEffect(() => {
    changeWeight();
    changeInstalloption();
    dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
  }, [statenow.partweight, instoptionfromstate]);

  return (
    <>
      <div className="infoblock__item infoblock__item_top">
        <div className="inpname">Вариант установки:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label
              className={`form-check-label ${
                statenow.partweight > 100 ? "form-check-label_disabled" : ""
              }`}
            >
              в самоцентрирующемся патроне
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="samocentrpatron"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={inst1}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                statenow.partweight < 5 ? "form-check-label_disabled" : ""
              }`}
            >
              в самоцентрирующемся патроне и люнете
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="samocentrpatron_lunet"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={inst2}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                statenow.partweight < 5 ? "form-check-label_disabled" : ""
              }`}
            >
              в 4-х кулачковом патроне
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="chetirehkulachk"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={inst3}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                statenow.partweight < 5 ? "form-check-label_disabled" : ""
              }`}
            >
              в 4-х кулачковом патроне и люнете
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="chetirehkulachk_lunet"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={inst4}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Точность установки:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "chetirehkulachk" ? "form-check-label_disabled" : ""
              }`}
            >
              до 0,5
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0.5"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
                ref={acc05}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              до 0,1
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0.1"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
                ref={acc01}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "samocentrpatron_lunet" ? "form-check-label_disabled" : ""
              }`}
            >
              до 0,05
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0.05"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
                ref={acc005}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "samocentrpatron" ||
                instoptionfromstate === "samocentrpatron_lunet" ||
                instoptionfromstate === "chetirehkulachk_lunet"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              до 0,01
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0.01"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_VNUTRISHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
                ref={acc001}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vspomperehod;
