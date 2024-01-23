import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function PartSpecifications() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.vnutrishlif);

  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <label className={`inpname ${!statenow.partweightstate ? "" : "inpname__withData"}`}>
          Масса детали, кг:
        </label>
        <div className="d-inline-block">
          <input
            type="text"
            className={` ${
              statenow.partweight > statenow.maxWeight ? "selectbox_error" : "selectbox"
            }`}
            value={statenow.partweight}
            onChange={(e) => {
              dispatch({ type: "WEIGHT_VNUTRISHLIF", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "MATERIAL_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "MATERIAL_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "MATERIAL_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "MATERIAL_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "HARDNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "HARDNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "HARDNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "STIFFNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "STIFFNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "STIFFNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div
          className={`inpname align-top ${statenow.partwallthickness ? "inpname__withData" : ""}`}
        >
          Отношение D/s:
        </div>
        <div className="radiobox d-inline-flex flex-sm-row flex-column">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 10
              <input
                type="radio"
                name="thickness"
                className="form-check-input"
                value="w1"
                onChange={(e) => {
                  dispatch({ type: "WALLTHICKNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              от 10 до 16
              <input
                type="radio"
                name="thickness"
                className="form-check-input"
                value="w2"
                onChange={(e) => {
                  dispatch({ type: "WALLTHICKNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              свыше 16
              <input
                type="radio"
                name="thickness"
                className="form-check-input"
                value="w3"
                onChange={(e) => {
                  dispatch({ type: "WALLTHICKNESS_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
                  dispatch({ type: "SURFACESHAPE_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
                }}
                defaultChecked
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
                value="sf2"
                onChange={(e) => {
                  dispatch({ type: "SURFACESHAPE_VNUTRISHLIF", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
              dispatch({ type: "NUMBERPARTS_VNUTRISHLIF", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
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
