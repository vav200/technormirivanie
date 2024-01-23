import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Osnperehod(props) {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.ploskoshlif);
  const [massivstrtodel, setMassivstrtodel] = useState([]);

  function addstrperehoda() {
    dispatch({ type: "ADDSTRPEREHODA_PLOSKOSHLIF", data: [props.numpereh, {}] });
  }

  function delstrperehoda() {
    dispatch({ type: "DELSTRPEREHODA_PLOSKOSHLIF", data: [props.numpereh, massivstrtodel] });
    setMassivstrtodel(() => []);
  }

  function checkChangeStr(e) {
    if (massivstrtodel.includes(String(e.target.value))) {
      setMassivstrtodel(massivstrtodel.filter((item) => item != e.target.value));
    } else {
      setMassivstrtodel([...massivstrtodel, e.target.value]);
    }
  }

  function gettimestr(index) {
    if (
      statenow.perehods[props.numpereh][1][index].hasOwnProperty("Otime") &&
      !isNaN(statenow.perehods[props.numpereh][1][index].Otime) &&
      statenow.perehods[props.numpereh][1][index].Otime != 0
    ) {
      return " - " + Number(statenow.perehods[props.numpereh][1][index].Otime).toFixed(1) + " мин)";
    } else return "";
  }

  return (
    <>
      {statenow.perehods[props.numpereh][1]
        ? statenow.perehods[props.numpereh][1].map((item, index) => (
            <>
              <div className="checkstrpereh">
                <input
                  type="checkbox"
                  value={index}
                  class="form-check-input"
                  onChange={checkChangeStr}
                  checked={massivstrtodel.includes(String(index)) ? true : false}
                />
              </div>
              <h6 className="namestrpereh">
                {index + 1}. Шлифовать поверхность
                {statenow.perehods[props.numpereh][1][index].width && <span> В = </span>}
                {statenow.perehods[props.numpereh][1][index].width}
                {statenow.perehods[props.numpereh][1][index].length && (
                  <span className="ms-2">L = </span>
                )}
                {statenow.perehods[props.numpereh][1][index].length}
                {statenow.perehods[props.numpereh][1][index].Otime &&
                  statenow.perehods[props.numpereh][1][index].Otime !== "ошибки" && (
                    <span className="ms-3">(норма </span>
                  )}
                {gettimestr(index)}
              </h6>

              <div className="infoblock__item">
                <div
                  className={`inpname ${
                    !statenow.perehods[props.numpereh][1][index] ||
                    !statenow.perehods[props.numpereh][1][index].width
                      ? ""
                      : "inpname__withData"
                  }`}
                >
                  Ширина поверхности, мм:
                </div>
                <div className="d-inline-block position-relative">
                  <input
                    type="text"
                    className={` ${
                      statenow.perehods[props.numpereh][1][index].width > statenow.maxWidth
                        ? "selectbox_error"
                        : "selectbox"
                    }`}
                    value={
                      statenow.perehods[props.numpereh][1][index].width
                        ? statenow.perehods[props.numpereh][1][index].width
                        : ""
                    }
                    onChange={(e) => {
                      dispatch({
                        type: "DATAOSNPEREHODA_PLOSKOSHLIF",
                        data: [props.numpereh, "width", e.target.value, index],
                      });
                      dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                    }}
                  />
                  <div
                    className={`selectbox__errormessage ${
                      statenow.perehods[props.numpereh][1][index].width > statenow.maxWidth
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
                    !statenow.perehods[props.numpereh][1][index] ||
                    !statenow.perehods[props.numpereh][1][index].length
                      ? ""
                      : "inpname__withData"
                  }`}
                >
                  Длина поверхности, мм:
                </div>
                <div className="d-inline-block position-relative">
                  <input
                    type="text"
                    className={` ${
                      statenow.perehods[props.numpereh][1][index].length > statenow.maxLength
                        ? "selectbox_error"
                        : "selectbox"
                    }`}
                    value={
                      statenow.perehods[props.numpereh][1][index].length
                        ? statenow.perehods[props.numpereh][1][index].length
                        : ""
                    }
                    onChange={(e) => {
                      dispatch({
                        type: "DATAOSNPEREHODA_PLOSKOSHLIF",
                        data: [props.numpereh, "length", e.target.value, index],
                      });
                      dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                    }}
                  />
                  <div
                    className={`selectbox__errormessage ${
                      statenow.perehods[props.numpereh][1][index].length > statenow.maxLength
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
                    !statenow.perehods[props.numpereh][1][index] ||
                    !statenow.perehods[props.numpereh][1][index].allowance
                      ? ""
                      : "inpname__withData"
                  }`}
                >
                  Припуск на обработку, мм:
                </div>
                <input
                  type="text"
                  className="selectbox"
                  value={
                    statenow.perehods[props.numpereh][1][index].allowance
                      ? statenow.perehods[props.numpereh][1][index].allowance
                      : ""
                  }
                  onChange={(e) => {
                    dispatch({
                      type: "DATAOSNPEREHODA_PLOSKOSHLIF",
                      data: [props.numpereh, "allowance", e.target.value, index],
                    });
                    dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                  }}
                />
              </div>
              <div className="infoblock__item">
                <div
                  className={`inpname ${
                    !statenow.perehods[props.numpereh][1][index] ||
                    !statenow.perehods[props.numpereh][1][index].accuracy
                      ? ""
                      : "inpname__withData"
                  }`}
                >
                  Квалитет точности:
                </div>
                <select
                  className="selectbox"
                  value={
                    statenow.perehods[props.numpereh][1][index].accuracy
                      ? statenow.perehods[props.numpereh][1][index].accuracy
                      : ""
                  }
                  onChange={(e) => {
                    dispatch({
                      type: "DATAOSNPEREHODA_PLOSKOSHLIF",
                      data: [props.numpereh, "accuracy", e.target.value, index],
                    });
                    dispatch({
                      type: "DATAOSNPEREHODA_PLOSKOSHLIF",
                      data: [props.numpereh, "roghness", "", index],
                    });
                    dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                  }}
                >
                  <option selected></option>
                  <option value="6_7">6-7</option>
                  <option value="8_9">8-9</option>
                  <option value="10_14">10-14</option>
                </select>
              </div>
              <div className="infoblock__item">
                <div
                  className={`inpname ${
                    !statenow.perehods[props.numpereh][1][index] ||
                    !statenow.perehods[props.numpereh][1][index].roghness
                      ? ""
                      : "inpname__withData"
                  }`}
                >
                  Шероховатость Ra, мм:
                </div>
                <select
                  className="selectbox"
                  value={
                    statenow.perehods[props.numpereh][1][index].roghness
                      ? statenow.perehods[props.numpereh][1][index].roghness
                      : ""
                  }
                  onChange={(e) => {
                    dispatch({
                      type: "DATAOSNPEREHODA_PLOSKOSHLIF",
                      data: [props.numpereh, "roghness", e.target.value, index],
                    });
                    dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                  }}
                >
                  <option selected></option>
                  <option
                    value="Ra3.2"
                    disabled={
                      statenow.perehods[props.numpereh][1][index].accuracy != "10_14" ? true : false
                    }
                  >
                    Ra3.2
                  </option>
                  <option value="Ra1.6">Ra1.6</option>
                  <option value="Ra0.8">Ra0.8</option>
                  <option
                    value="Ra0.4"
                    disabled={
                      statenow.perehods[props.numpereh][1][index].accuracy == "10_14" ? true : false
                    }
                  >
                    Ra0.4
                  </option>
                </select>
              </div>

              <div
                className={`modeblock ${
                  statenow.perehods[props.numpereh][1][index].hasOwnProperty("Otime") &&
                  !isNaN(statenow.perehods[props.numpereh][1][index].Otime) &&
                  statenow.perehods[props.numpereh][1][index].Otime != 0
                    ? ""
                    : "d-none"
                }`}
              >
                <h5 className="modeblock__title">Режимы обработки:</h5>
                <ul className="modeblock__list">
                  <li className="modeblock__item">
                    скорость продольного хода черновая/чистовая -{" "}
                    {statenow.perehods[props.numpereh][1][index].tableSpeedRoughing}/
                    {statenow.perehods[props.numpereh][1][index].tableSpeedFinishing} мм/мин
                  </li>

                  <li className="modeblock__item">
                    скорость продольного хода черновая/чистовая -{" "}
                    {statenow.perehods[props.numpereh][1][index].crossFeedRoughing}/
                    {statenow.perehods[props.numpereh][1][index].crossFeedFinishing} мм/мин
                  </li>
                  <li className="modeblock__item">
                    глубина резания черновая/чистовая -{" "}
                    {statenow.perehods[props.numpereh][1][index].cuttingDepthRoughing}/
                    {statenow.perehods[props.numpereh][1][index].cuttingDepthFinishing} мм
                  </li>

                  <li className="modeblock__item">
                    машинное время - {statenow.perehods[props.numpereh][1][index].machintime} мин
                  </li>
                  <li className="modeblock__item">
                    вспомагательное время -{" "}
                    {statenow.perehods[props.numpereh][1][index].trasitiontime} мин
                  </li>
                </ul>
              </div>
            </>
          ))
        : ""}

      <div className="d-flex flex-sm-row flex-column gap-2 btn-str">
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm w-100"
          onClick={addstrperehoda}
        >
          Добавить строку перехода
        </button>
        <button type="button" class="btn btn-outline-danger btn-sm w-100" onClick={delstrperehoda}>
          Удалить строку перехода
        </button>
      </div>
    </>
  );
}

export default Osnperehod;
