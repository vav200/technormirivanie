import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function PartSpecifications() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.krugloshlif);

  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <label className={`inpname ${!statenow.partweightstate ? "" : "inpname__withData"}`}>
          Масса детали, кг:
        </label>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.partweight > statenow.maxWeight ? "selectbox_error" : "selectbox"
            }`}
            value={statenow.partweight}
            onChange={(e) => {
              dispatch({ type: "WEIGHT_KRUGLOSHLIF", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.partweight > statenow.maxWeight ? "selectbox__errormessage_active" : ""
            }`}
          >
            {statenow.partweight > statenow.maxWeight ? "больше допустимой" : ""}
          </div>
        </div>
      </div>

      <div className={`infoblock__item ${statenow.maxLength > 1000 ? "" : "d-none"}`}>
        <div className={`inpname align-top ${statenow.partlength ? "inpname__withData" : ""}`}>
          Длина детали, мм:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              до 1000
              <input
                type="radio"
                name="partlength"
                className="form-check-input"
                value="1000"
                onChange={(e) => {
                  dispatch({ type: "GENERAL_LENGTH_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              от 1000 до 2000
              <input
                type="radio"
                name="partlength"
                className="form-check-input"
                value="2000"
                onChange={(e) => {
                  dispatch({ type: "GENERAL_LENGTH_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className={`form-check ${statenow.maxLength <= 2000 ? "d-none" : ""}`}>
            <label className="form-check-label">
              от 2000 до 3000
              <input
                type="radio"
                name="partlength"
                className="form-check-input"
                value="3000"
                onChange={(e) => {
                  dispatch({ type: "GENERAL_LENGTH_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className={`form-check ${statenow.maxLength <= 3000 ? "d-none" : ""}`}>
            <label className="form-check-label">
              свыше 3000
              <input
                type="radio"
                name="partlength"
                className="form-check-input"
                value="5000"
                onChange={(e) => {
                  dispatch({ type: "GENERAL_LENGTH_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className={`inpname align-top ${statenow.partmaterial ? "inpname__withData" : ""}`}>
          Материал детали:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              углеродистые стали
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matP"
                onChange={(e) => {
                  dispatch({ type: "MATERIAL_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              легированные стали
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matP"
                onChange={(e) => {
                  dispatch({ type: "MATERIAL_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              нержавеющие стали
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matM"
                onChange={(e) => {
                  dispatch({ type: "MATERIAL_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              чугун, бронза
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matK"
                onChange={(e) => {
                  dispatch({ type: "MATERIAL_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className={`inpname align-top ${statenow.parthardness ? "inpname__withData" : ""}`}>
          Твердость HRCэ:
        </div>
        <div className="radiobox d-inline-flex flex-sm-row flex-column">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              менее 30
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                value="h1"
                onChange={(e) => {
                  dispatch({ type: "HARDNESS_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              от 30 до 50
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                value="h2"
                onChange={(e) => {
                  dispatch({ type: "HARDNESS_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              свыше 50
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                value="h3"
                onChange={(e) => {
                  dispatch({ type: "HARDNESS_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className={`inpname align-top ${statenow.partstiffness ? "inpname__withData" : ""}`}>
          Отношение L/d:
        </div>
        <div className="radiobox d-inline-flex flex-sm-row flex-column">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 2
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s1"
                onChange={(e) => {
                  dispatch({ type: "STIFFNESS_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              от 2 до 5
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s2"
                onChange={(e) => {
                  dispatch({ type: "STIFFNESS_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              от 5 до 10
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s3"
                onChange={(e) => {
                  dispatch({ type: "STIFFNESS_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname align-top ${statenow.partsurfaceshape ? "inpname__withData" : ""}`}
        >
          Форма поверхности:
        </div>
        <div className="radiobox d-inline-flex flex-sm-row flex-column">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              свободная
              <input
                type="radio"
                name="surfaceshape"
                className="form-check-input"
                value="sf1"
                onChange={(e) => {
                  dispatch({ type: "SURFACESHAPE_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              коническая
              <input
                type="radio"
                name="surfaceshape"
                className="form-check-input"
                value="sf2"
                onChange={(e) => {
                  dispatch({ type: "SURFACESHAPE_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              с галтелью
              <input
                type="radio"
                name="surfaceshape"
                className="form-check-input"
                value="sf3"
                onChange={(e) => {
                  dispatch({ type: "SURFACESHAPE_KRUGLOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      {/* <div className="infoblock__item">
        <div className="inpname">Обрабатывается деталей:</div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`selectbox ${statenow.numberpartsstate === false ? "selectbox_error" : ""}`}
            value={statenow.numberparts}
            onChange={(e) => {
              dispatch({ type: "NUMBERPARTS_KRUGLOSHLIF", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.numberpartsstate === false ? "selectbox__errormessage_active" : ""
            }`}
          >
            введите значение
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PartSpecifications;
