import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function MachineSpecification() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.vnutrishlif);
  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <div className="inpname">Модель станка:</div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({ type: "MODEL_VNUTRISHLIF", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_VNUTRISHLIF" });
          }}
          defaultValue={"3M227"}
        >
          {/* <option value=""> </option> */}
          <option value="3M227">3M227</option>
          <option value="3K229A">3K229A</option>
        </select>
      </div>
      <div className="infoblock__paramsmachine">
        <div className="inpname">Max длина шлифовки, мм: </div>
        <span>{statenow.maxLength}</span>
        <br />
        <div className="inpname">Max диаметр шлифовки, мм: </div>
        <span>{statenow.maxDiameter}</span>
        <br />
        <div className="inpname">Max вес детали, кг: </div>
        <span>{statenow.maxWeight}</span>
      </div>
    </div>
  );
}

export default MachineSpecification;
