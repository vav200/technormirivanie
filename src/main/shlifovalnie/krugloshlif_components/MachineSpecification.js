import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function MachineSpecification() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.krugloshlif);
  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <div className="inpname">Модель станка:</div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({ type: "MODEL_KRUGLOSHLIF", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_KRUGLOSHLIF" });
          }}
          defaultValue={"3A130"}
        >
          {/* <option value=""> </option> */}
          <option value="3A130">3A130</option>
          <option value="3M194">3M194</option>
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
