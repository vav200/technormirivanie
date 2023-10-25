import React, { useState } from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Vspomperehod(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  let instoptionfromstate = "";
  let limit_installoption = "";
  if (
    statenow.perehods[props.numpereh] &&
    statenow.perehods[props.numpereh][1] &&
    statenow.perehods[props.numpereh][1].installoption
  ) {
    instoptionfromstate = statenow.perehods[props.numpereh][1].installoption;
  }
  if (
    statenow.perehods[props.numpereh] &&
    statenow.perehods[props.numpereh][1] &&
    statenow.perehods[props.numpereh][1].limit_installoption
  ) {
    limit_installoption = statenow.perehods[props.numpereh][1].limit_installoption;
  }

  // let index_endustanova = statenow.perehods.findIndex(
  //   (item, ind) => ind > props.numpereh && item[0] == "Вспомагательный переход"
  // );

  // if (index_endustanova == -1) index_endustanova = statenow.perehods.length;

  // let ustanov = statenow.perehods.slice(props.numpereh + 1, index_endustanova);

  // console.log("start", props.numpereh);
  // console.log("end", index_endustanova);
  // console.log(ustanov);

  // function changetypetreatment() {
  //   if (ustanov.find((item) => item[1].typetreatment === "boring")) {
  //     sampat_centr.current.checked = false;
  //     sampat_centr_lunet.current.checked = false;
  //     chetpat_centr.current.checked = false;
  //     chetpat_centr_lunet.current.checked = false;

  //     sampat_centr.current.disabled = true;
  //     sampat_centr_lunet.current.disabled = true;
  //     chetpat_centr.current.current.disabled = true;
  //     chetpat_centr_lunet.current.disabled = true;
  //   } else {
  //     sampat_centr.current.disabled = false;
  //     sampat_centr_lunet.current.disabled = false;
  //     chetpat_centr.current.current.disabled = false;
  //     chetpat_centr_lunet.current.disabled = false;
  //   }
  // }

  const [sampatdisabled, setSampatdisabled] = useState(false);
  const [sampat_centrdisabled, setSampat_centrdisabled] = useState(false);
  const [sampat_centr_lunetdisabled, setSampat_centr_lunetdisabled] = useState(false);
  const [sampat_lunetdisabled, setSampat_lunetdisabled] = useState(false);
  const [chetpatdisabled, setChetpatdisabled] = useState(false);
  const [chetpat_centrdisabled, setChetpat_centrdisabled] = useState(false);
  const [chetpat_centr_lunetdisabled, setChetpat_centr_lunetdisabled] = useState(false);
  const [chetpat_lunetdisabled, setChetpat_lunetdisabled] = useState(false);
  const [instoption, setInstoption] = useState("");

  let acc0 = React.createRef();
  let acc1 = React.createRef();
  let acc05 = React.createRef();
  let acc01 = React.createRef();
  let acc005 = React.createRef();
  let acc001 = React.createRef();

  let sampat = React.createRef();
  let sampat_centr = React.createRef();
  let sampat_centr_lunet = React.createRef();
  let sampat_lunet = React.createRef();
  let chetpat = React.createRef();
  let chetpat_centr = React.createRef();
  let chetpat_centr_lunet = React.createRef();
  let chetpat_lunet = React.createRef();

  let vrash_centr = React.createRef();
  let gestk_centr = React.createRef();
  let rolikovi_lunet = React.createRef();
  let skolgenia_lunet = React.createRef();

  function clearAccuracy() {
    acc0.current.checked = false;
    acc1.current.checked = false;
    acc05.current.checked = false;
    acc01.current.checked = false;
    acc005.current.checked = false;
    acc001.current.checked = false;
    // acc0.current.disabled = false;
    // acc1.current.disabled = false;
    // acc05.current.disabled = false;
    // acc01.current.disabled = false;
    // acc005.current.disabled = false;
    // acc001.current.disabled = false;
  }

  function changeWeight() {
    if (statenow.partweight > 3000) {
      if (
        sampat.current.checked === true ||
        sampat_centr.current.checked === true ||
        sampat_centr_lunet.current.checked === true ||
        sampat_lunet.current.checked === true ||
        chetpat.current.checked === true
      ) {
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "installoption", ""],
        });
        clearAccuracy();
      }
      sampat.current.checked = false;
      sampat_centr.current.checked = false;
      sampat_centr_lunet.current.checked = false;
      sampat_lunet.current.checked = false;
      chetpat.current.checked = false;

      sampat.current.disabled = true;
      sampat_centr.current.disabled = true;
      sampat_centr_lunet.current.disabled = true;
      sampat_lunet.current.disabled = true;
      chetpat.current.disabled = true;

      setSampatdisabled(true);
      setSampat_centrdisabled(true);
      setSampat_centr_lunetdisabled(true);
      setSampat_lunetdisabled(true);
      setChetpatdisabled(true);
    } else if (statenow.partweight > 100 && statenow.partweight < 3000) {
      if (sampat.current.checked === true) {
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "installoption", ""],
        });
        clearAccuracy();
      }
      sampat.current.checked = false;
      sampat.current.disabled = true;
      setSampatdisabled(true);

      sampat_centr.current.disabled = false;
      sampat_centr_lunet.current.disabled = false;
      sampat_lunet.current.disabled = false;
      chetpat.current.disabled = false;
      chetpat_centr.current.disabled = false;
      chetpat_centr_lunet.current.disabled = false;
      chetpat_lunet.current.disabled = false;

      setSampat_centrdisabled(false);
      setSampat_centr_lunetdisabled(false);
      setSampat_lunetdisabled(false);
      setChetpatdisabled(false);
      setChetpatdisabled(false);
      setChetpat_centrdisabled(false);
      setChetpat_centr_lunetdisabled(false);
      setChetpat_lunetdisabled(false);
    } else if (statenow.partweight < 100 && statenow.partweight > 3) {
      sampat.current.disabled = false;
      setSampatdisabled(false);
      chetpat.current.disabled = false;
      chetpat_centr.current.disabled = false;
      chetpat_centr_lunet.current.disabled = false;
      chetpat_lunet.current.disabled = false;

      setChetpatdisabled(false);
      setChetpat_centrdisabled(false);
      setChetpat_centr_lunetdisabled(false);
      setChetpat_lunetdisabled(false);
    } else if (statenow.partweight < 3) {
      if (
        chetpat.current.checked === true ||
        chetpat_centr.current.checked === true ||
        chetpat_centr_lunet.current.checked === true ||
        chetpat_lunet.current.checked === true
      ) {
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "installoption", ""],
        });
        clearAccuracy();
      }
      chetpat.current.checked = false;
      chetpat_centr.current.checked = false;
      chetpat_centr_lunet.current.checked = false;
      chetpat_lunet.current.checked = false;

      chetpat.current.disabled = true;
      chetpat_centr.current.disabled = true;
      chetpat_centr_lunet.current.disabled = true;
      chetpat_lunet.current.disabled = true;

      setChetpatdisabled(true);
      setChetpat_centrdisabled(true);
      setChetpat_centr_lunetdisabled(true);
      setChetpat_lunetdisabled(true);

      sampat.current.disabled = false;
      sampat_centr.current.disabled = false;
      sampat_centr_lunet.current.disabled = false;
      sampat_lunet.current.disabled = false;
    } else {
      chetpat.current.disabled = false;
      chetpat_centr.current.disabled = false;
      chetpat_centr_lunet.current.disabled = false;
      chetpat_lunet.current.disabled = false;

      setChetpatdisabled(false);
      setChetpat_centrdisabled(false);
      setChetpat_centr_lunetdisabled(false);
      setChetpat_lunetdisabled(false);
    }
  }

  function changeInstalloption() {
    switch (instoptionfromstate) {
      case "chetirehkulachk":
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typelunet", "none"],
        });
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typecentr", "none"],
        });

        rolikovi_lunet.current.checked = false;
        skolgenia_lunet.current.checked = false;
        vrash_centr.current.checked = false;
        gestk_centr.current.checked = false;
        acc0.current.disabled = false;
        acc1.current.disabled = false;
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "chetirehkulachk_centr":
        if (
          statenow.perehods[props.numpereh][1].typecentr === "none" ||
          !statenow.perehods[props.numpereh][1].typecentr
        ) {
          vrash_centr.current.checked = true;
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typecentr", "vrash"],
          });
        }
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typelunet", "none"],
        });

        rolikovi_lunet.current.checked = false;
        skolgenia_lunet.current.checked = false;
        acc0.current.disabled = false;
        acc1.current.disabled = false;
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "chetirehkulachk_centr_lunet":
        if (
          statenow.perehods[props.numpereh][1].typelunet === "none" ||
          !statenow.perehods[props.numpereh][1].typelunet
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typelunet", "rolikovi"],
          });
          rolikovi_lunet.current.checked = true;
        }
        if (
          statenow.perehods[props.numpereh][1].typecentr === "none" ||
          !statenow.perehods[props.numpereh][1].typecentr
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typecentr", "vrash"],
          });
          vrash_centr.current.checked = true;
        }

        acc0.current.disabled = false;
        acc1.current.disabled = false;
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "chetirehkulachk_lunet":
        if (
          statenow.perehods[props.numpereh][1].typelunet === "none" ||
          !statenow.perehods[props.numpereh][1].typelunet
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typelunet", "rolikovi"],
          });
          rolikovi_lunet.current.checked = true;
        }
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typecentr", "none"],
        });
        if (acc0.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }

        vrash_centr.current.checked = false;
        gestk_centr.current.checked = false;

        acc0.current.disabled = true;
        acc0.current.checked = false;
        acc1.current.disabled = false;
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "samocentrpatron":
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typelunet", "none"],
        });
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typecentr", "none"],
        });
        if (
          acc1.current.checked === true ||
          acc005.current.checked === true ||
          acc001.current.checked === true
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        rolikovi_lunet.current.checked = false;
        skolgenia_lunet.current.checked = false;
        vrash_centr.current.checked = false;
        gestk_centr.current.checked = false;
        acc1.current.disabled = true;
        acc1.current.checked = false;
        acc005.current.disabled = true;
        acc005.current.checked = false;
        acc001.current.disabled = true;
        acc001.current.checked = false;

        acc0.current.disabled = false;
        acc01.current.disabled = false;
        acc05.current.disabled = false;
        break;
      case "samocentrpatron_centr":
        if (
          statenow.perehods[props.numpereh][1].typecentr === "none" ||
          !statenow.perehods[props.numpereh][1].typecentr
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typecentr", "vrash"],
          });
          vrash_centr.current.checked = true;
        }
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typelunet", "none"],
        });
        if (acc1.current.checked === true || acc05.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }
        rolikovi_lunet.current.checked = false;
        skolgenia_lunet.current.checked = false;
        acc1.current.disabled = true;
        acc1.current.checked = false;
        acc05.current.disabled = true;
        acc05.current.checked = false;

        acc0.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "samocentrpatron_centr_lunet":
        if (
          statenow.perehods[props.numpereh][1].typelunet === "none" ||
          !statenow.perehods[props.numpereh][1].typelunet
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typelunet", "rolikovi"],
          });
          rolikovi_lunet.current.checked = true;
        }
        if (
          statenow.perehods[props.numpereh][1].typecentr === "none" ||
          !statenow.perehods[props.numpereh][1].typecentr
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typecentr", "vrash"],
          });
          vrash_centr.current.checked = true;
        }
        if (acc1.current.checked === true || acc05.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }

        acc1.current.disabled = true;
        acc1.current.checked = false;
        acc05.current.disabled = true;
        acc05.current.checked = false;

        acc0.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;
      case "samocentrpatron_lunet":
        if (
          statenow.perehods[props.numpereh][1].typelunet === "none" ||
          !statenow.perehods[props.numpereh][1].typelunet
        ) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "typelunet", "rolikovi"],
          });
          rolikovi_lunet.current.checked = true;
        }
        dispatch({
          type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
          data: [props.numpereh, "typecentr", "none"],
        });
        if (acc1.current.checked === true) {
          dispatch({
            type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
            data: [props.numpereh, "positionaccuracy", ""],
          });
        }

        vrash_centr.current.checked = false;
        gestk_centr.current.checked = false;

        acc1.current.disabled = true;
        acc1.current.checked = false;
        acc0.current.disabled = false;
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
        break;

      default:
        acc0.current.disabled = false;
        acc1.current.disabled = false;
        acc05.current.disabled = false;
        acc01.current.disabled = false;
        acc005.current.disabled = false;
        acc001.current.disabled = false;
    }
  }

  function changePartform() {
    if (statenow.partform === "fason_korobch") {
      sampat.current.disabled = true;
      sampat_centr.current.disabled = true;
      sampat_centr_lunet.current.disabled = true;
      sampat_lunet.current.disabled = true;
      chetpat_centr.current.disabled = true;
      chetpat_centr_lunet.current.disabled = true;
      chetpat_lunet.current.disabled = true;

      sampat.current.checked = false;
      sampat_centr.current.checked = false;
      sampat_centr_lunet.current.checked = false;
      sampat_lunet.current.checked = false;
      chetpat_centr.current.checked = false;
      chetpat_centr_lunet.current.checked = false;
      chetpat_lunet.current.checked = false;

      chetpat.current.disabled = false;
      chetpat.current.checked = true;
      dispatch({
        type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
        data: [props.numpereh, "installoption", "chetirehkulachk"],
      });
    } else {
      sampat.current.disabled = false;
      sampat_centr.current.disabled = false;
      sampat_centr_lunet.current.disabled = false;
      sampat_lunet.current.disabled = false;
      chetpat_centr.current.disabled = false;
      chetpat_centr_lunet.current.disabled = false;
      chetpat_lunet.current.disabled = false;
    }
  }

  function changeTypetreatment() {
    if (limit_installoption === "boring") {
      sampat_centr.current.disabled = true;
      sampat_centr_lunet.current.disabled = true;
      chetpat_centr.current.disabled = true;
      chetpat_centr_lunet.current.disabled = true;

      setSampat_centrdisabled(true);
      setSampat_centr_lunetdisabled(true);
      setChetpat_centrdisabled(true);
      setChetpat_centr_lunetdisabled(true);
    } else {
      sampat_centr.current.disabled = false;
      sampat_centr_lunet.current.disabled = false;
      chetpat_centr.current.disabled = false;
      chetpat_centr_lunet.current.disabled = false;

      setSampat_centrdisabled(false);
      setSampat_centr_lunetdisabled(false);
      setChetpat_centrdisabled(false);
      setChetpat_centr_lunetdisabled(false);
    }
  }

  useEffect(() => {
    changePartform();
    changeWeight();
    changeInstalloption();
    changeTypetreatment();
    dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
  }, [statenow.partform, statenow.partweight, instoptionfromstate, limit_installoption]);

  return (
    <>
      <div className="infoblock__item infoblock__item_top">
        <div className="inpname">Вариант установки:</div>
        <div className="radiobox d-inline-block">
          {/* -----самоцентрирующийся патрон------ */}

          <div className="form-check">
            <label
              className={`form-check-label ${
                sampatdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={sampat}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                sampat_centrdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              в самоцентрирующемся патроне и заднем центре
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="samocentrpatron_centr"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                }}
                ref={sampat_centr}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                sampat_centr_lunetdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              в самоцентрирующемся патроне, заднем центре и люнете
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="samocentrpatron_centr_lunet"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                }}
                ref={sampat_centr_lunet}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                sampat_lunetdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                }}
                ref={sampat_lunet}
              />
            </label>
          </div>

          {/* -----4-кулачковый------ */}

          <div className="form-check">
            <label
              className={`form-check-label ${chetpatdisabled ? "form-check-label_disabled" : ""}`}
            >
              в 4-х кулачковом патроне
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="chetirehkulachk"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={chetpat}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                chetpat_centrdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              в 4-х кулачковом патроне и заднем центре
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="chetirehkulachk_centr"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={chetpat_centr}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                chetpat_centr_lunetdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              в 4-х кулачковом патроне, заднем центре и люнете
              <input
                type="radio"
                name={"installoption" + props.numpereh}
                className="form-check-input"
                value="chetirehkulachk_centr_lunet"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={chetpat_centr_lunet}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                chetpat_lunetdisabled || statenow.partform === "fason_korobch"
                  ? "form-check-label_disabled"
                  : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "installoption", e.target.value],
                  });
                  setInstoption(e.target.value);
                }}
                ref={chetpat_lunet}
              />
            </label>
          </div>
        </div>
      </div>

      {/* ------------Типы установочных элементов--------------- */}

      <div
        className={`infoblock__item ${
          !instoptionfromstate ||
          instoptionfromstate === "chetirehkulachk" ||
          instoptionfromstate === "samocentrpatron" ||
          instoptionfromstate === "samocentrpatron_lunet" ||
          instoptionfromstate === "chetirehkulachk_lunet"
            ? "d-none"
            : ""
        }`}
      >
        <div className="inpname">Тип заднего центра:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className={`form-check-label`}>
              вращающийся центр
              <input
                type="radio"
                name={"typecentr" + props.numpereh}
                className="form-check-input"
                value="vrash"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "typecentr", e.target.value],
                  });
                  // dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={vrash_centr}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className={`form-check-label }`}>
              жесткий центр
              <input
                type="radio"
                name={"typecentr" + props.numpereh}
                className="form-check-input"
                value="gestk"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "typecentr", e.target.value],
                  });
                  // dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={gestk_centr}
              />
            </label>
          </div>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          !instoptionfromstate ||
          instoptionfromstate === "chetirehkulachk" ||
          instoptionfromstate === "samocentrpatron" ||
          instoptionfromstate === "samocentrpatron_centr" ||
          instoptionfromstate === "chetirehkulachk_centr"
            ? "d-none"
            : ""
        }`}
      >
        <div className="inpname">Тип люнета:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className={`form-check-label`}>
              с роликовыми опорами
              <input
                type="radio"
                name={"typelunet" + props.numpereh}
                className="form-check-input"
                value="rolikovi"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "typelunet", e.target.value],
                  });
                  // dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={rolikovi_lunet}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className={`form-check-label }`}>
              с опорами скольжения
              <input
                type="radio"
                name={"typelunet" + props.numpereh}
                className="form-check-input"
                value="skolgenia"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "typelunet", e.target.value],
                  });
                  // dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={skolgenia_lunet}
              />
            </label>
          </div>
        </div>
      </div>

      {/* ------------Точность------------------- */}

      <div className="infoblock__item">
        <div className="inpname">Точность установки:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "chetirehkulachk_lunet" ? "form-check-label_disabled" : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={acc0}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "samocentrpatron" ||
                instoptionfromstate === "samocentrpatron_centr" ||
                instoptionfromstate === "samocentrpatron_centr_lunet" ||
                instoptionfromstate === "samocentrpatron_lunet"
                  ? "form-check-label_disabled"
                  : ""
              }`}
            >
              до 1
              <input
                type="radio"
                name={"positionaccuracy" + props.numpereh}
                className="form-check-input"
                value="1"
                onChange={(e) => {
                  dispatch({
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={acc1}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "samocentrpatron_centr" ||
                instoptionfromstate === "samocentrpatron_centr_lunet"
                  ? "form-check-label_disabled"
                  : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={acc01}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "samocentrpatron" ? "form-check-label_disabled" : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                ref={acc005}
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className={`form-check-label ${
                instoptionfromstate === "samocentrpatron" ? "form-check-label_disabled" : ""
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
                    type: "DATAVSPPEREHODA_TOKARNOVINTOREZN",
                    data: [props.numpereh, "positionaccuracy", e.target.value],
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
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
