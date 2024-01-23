import React, { useState } from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Vspomperehod(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.krugloshlif);
  // const [instoption, setInstoption] = useState("");

  // let acc05 = React.createRef();
  // let acc01 = React.createRef();
  // let acc005 = React.createRef();
  // let acc001 = React.createRef();
  // let inst1 = React.createRef();
  // let inst2 = React.createRef();
  // let inst3 = React.createRef();
  // let inst4 = React.createRef();

  // function clearAccuracy() {
  //   acc05.current.checked = false;
  //   acc01.current.checked = false;
  //   acc005.current.checked = false;
  //   acc001.current.checked = false;
  //   acc05.current.disabled = false;
  //   acc01.current.disabled = false;
  //   acc005.current.disabled = false;
  //   acc001.current.disabled = false;
  // }
  // function changeWeight() {
  //   if (statenow.partweight && statenow.partweight > 100) {
  //     inst1.current.checked = false;
  //     inst1.current.disabled = true;
  //     if (
  //       inst2.current.checked === false &&
  //       inst3.current.checked === false &&
  //       inst4.current.checked === false
  //     ) {
  //       dispatch({
  //         type: "DATAVSPPEREHODA_KRUGLOSHLIF",
  //         data: [props.numpereh, "installoption", ""],
  //       });
  //       dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
  //       clearAccuracy();
  //     }
  //   } else inst1.current.disabled = false;

  //   if (statenow.partweight && statenow.partweight < 5) {
  //     inst2.current.checked = false;
  //     inst3.current.checked = false;
  //     inst4.current.checked = false;
  //     inst2.current.disabled = true;
  //     inst3.current.disabled = true;
  //     inst4.current.disabled = true;

  //     if (inst1.current.checked === false) {
  //       dispatch({
  //         type: "DATAVSPPEREHODA_KRUGLOSHLIF",
  //         data: [props.numpereh, "installoption", ""],
  //       });
  //       dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
  //       clearAccuracy();
  //     }
  //   } else {
  //     inst2.current.disabled = false;
  //     inst3.current.disabled = false;
  //     inst4.current.disabled = false;
  //   }
  // }
  // function changeInstalloption() {
  //   switch (instoption) {
  //     case "chetirehkulachk":
  //       acc05.current.disabled = true;
  //       acc05.current.checked = false;

  //       acc01.current.disabled = false;
  //       acc005.current.disabled = false;
  //       acc001.current.disabled = false;
  //       break;
  //     case "chetirehkulachk_lunet":
  //       acc001.current.disabled = true;
  //       acc001.current.checked = false;

  //       acc05.current.disabled = false;
  //       acc01.current.disabled = false;
  //       acc005.current.disabled = false;

  //       break;
  //     case "samocentrpatron":
  //       acc001.current.disabled = true;
  //       acc001.current.checked = false;

  //       acc05.current.disabled = false;
  //       acc01.current.disabled = false;
  //       acc005.current.disabled = false;
  //       break;
  //     case "samocentrpatron_lunet":
  //       acc005.current.disabled = true;
  //       acc001.current.disabled = true;
  //       acc005.current.checked = false;
  //       acc001.current.checked = false;

  //       acc05.current.disabled = false;
  //       acc01.current.disabled = false;
  //       break;
  //   }
  // }

  // useEffect(() => {
  //   changeWeight();
  //   changeInstalloption();
  // }, [statenow.partweight, instoption]);

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
              в центрах
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="centra_homutik"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_KRUGLOSHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              в центрах и люнете
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="centra_homutik_lunet"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_KRUGLOSHLIF",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vspomperehod;
