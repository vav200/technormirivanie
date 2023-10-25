import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function PartSpecifications() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.ploskoshlif);

  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <label className="inpname">Масса детали, кг:</label>
        <div className="d-inline-block">
          <input
            type="text"
            className={`selectbox ${
              statenow.partweight > statenow.maxWeight || statenow.partweightstate === false
                ? "selectbox_error"
                : ""
            }`}
            value={statenow.partweight}
            onChange={(e) => {
              dispatch({ type: "WEIGHT_PLOSKOSHLIF", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.partweight > statenow.maxWeight || statenow.partweightstate === false
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            {statenow.partweightstate === false ? "введите значение" : "больше допустимой"}
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname align-top">Материал детали:</div>
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
                  dispatch({ type: "MATERIAL_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
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
                  dispatch({ type: "MATERIAL_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
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
                  dispatch({ type: "MATERIAL_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
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
                  dispatch({ type: "MATERIAL_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Твердость HRCэ:</div>
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
                  dispatch({ type: "HARDNESS_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
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
                  dispatch({ type: "HARDNESS_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
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
                  dispatch({ type: "HARDNESS_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Отношение L/h:</div>
        <div className="radiobox d-inline-flex flex-sm-row flex-column">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 5
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s1"
                onChange={(e) => {
                  dispatch({ type: "STIFFNESS_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
                defaultChecked
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
                value="s2"
                onChange={(e) => {
                  dispatch({ type: "STIFFNESS_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              свыше 10
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s3"
                onChange={(e) => {
                  dispatch({ type: "STIFFNESS_PLOSKOSHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Обрабатывается деталей:</div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`selectbox ${statenow.numberpartsstate === false ? "selectbox_error" : ""}`}
            value={statenow.numberparts}
            onChange={(e) => {
              dispatch({ type: "NUMBERPARTS_PLOSKOSHLIF", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
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
      </div>
    </div>
  );
}

export default PartSpecifications;
