import React, { useState } from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Vspomperehod(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.ploskoshlif);
  const [instoption, setInstoption] = useState("");

  let acc1 = React.createRef();
  let acc2 = React.createRef();
  let acc3 = React.createRef();
  let acc4 = React.createRef();
  let acc5 = React.createRef();

  function changeInstalloption() {
    switch (instoption) {
      case "magnitTable":
        if (
          acc3.current.checked === true ||
          acc4.current.checked === true ||
          acc5.current.checked === true
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_PLOSKOSHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc3.current.checked = false;
        acc4.current.checked = false;
        acc5.current.checked = false;
        acc3.current.disabled = true;
        acc4.current.disabled = true;
        acc5.current.disabled = true;

        acc1.current.disabled = false;
        acc2.current.disabled = false;
        break;
      case "boltPlankiV1pl":
        if (acc1.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_PLOSKOSHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc1.current.checked = false;
        acc1.current.disabled = true;

        acc2.current.disabled = false;
        acc3.current.disabled = false;
        acc4.current.disabled = false;
        acc5.current.disabled = false;
        break;
      case "boltPlankiV2pl":
        if (acc1.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_PLOSKOSHLIF",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        acc1.current.checked = false;
        acc1.current.disabled = true;

        acc2.current.disabled = false;
        acc3.current.disabled = false;
        acc4.current.disabled = false;
        acc5.current.disabled = false;
        break;
    }
  }

  useEffect(() => {
    changeInstalloption();
    dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
  }, [instoption]);

  return (
    <>
      <div className="infoblock__item infoblock__item_top">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1] ||
            !statenow.perehods[props.numpereh][1].installoption
              ? ""
              : "inpname__withData"
          }`}
        >
          Вариант установки:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              на магнитном столе
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="magnitTable"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              крепление планками с выверкой в 1 плоскости
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="boltPlankiV1pl"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              крепление планками с выверкой в 2 плоскостях
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="boltPlankiV2pl"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div
          className={`inpname ${
            !statenow.perehods[props.numpereh][1] ||
            !statenow.perehods[props.numpereh][1].positionaccuracy
              ? ""
              : "inpname__withData"
          }`}
        >
          Точность установки:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoption === "boltPlankiV1pl" || instoption === "boltPlankiV2pl"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              без выверки
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
                // disabled={
                //   !statenow.perehods[props.numpereh][1]
                //     ? true
                //     : statenow.perehods[props.numpereh][1].installoption != "magnitTable"
                //     ? true
                //     : false
                // }
                ref={acc1}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              до 0,5
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0.5"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
                // disabled={!statenow.perehods[props.numpereh][1] ? true : false}
                ref={acc2}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoption === "magnitTable" ? "form-check-label_disabled" : ""
              }`}
            >
              до 0,1
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="0.1"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
                // disabled={
                //   !statenow.perehods[props.numpereh][1]
                //     ? true
                //     : statenow.perehods[props.numpereh][1].installoption == "magnitTable"
                //     ? true
                //     : false
                // }
                ref={acc3}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoption === "magnitTable" ? "form-check-label_disabled" : ""
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
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
                // disabled={
                //   !statenow.perehods[props.numpereh][1]
                //     ? true
                //     : statenow.perehods[props.numpereh][1].installoption == "magnitTable"
                //     ? true
                //     : false
                // }
                ref={acc4}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoption === "magnitTable" ? "form-check-label_disabled" : ""
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
                    type: "DATAVSPPEREHODA_PLOSKOSHLIF",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
                // disabled={
                //   !statenow.perehods[props.numpereh][1]
                //     ? true
                //     : statenow.perehods[props.numpereh][1].installoption == "magnitTable"
                //     ? true
                //     : false
                // }
                ref={acc5}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vspomperehod;
