import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function MachineSpecification() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.ploskoshlif);
  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <div className="inpname">Модель станка:</div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({ type: "MODEL_PLOSKOSHLIF", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_PLOSKOSHLIF" });
          }}
          defaultValue={"3B722"}
        >
          {/* <option value=""> </option> */}
          <option value="3B722">3Б722</option>
          <option value="3D725">3Д725</option>
        </select>
      </div>
      <div className="infoblock__paramsmachine">
        <div className="inpname">Max длина детали, мм: </div>
        <span>{statenow.maxLength}</span>
        <br />
        <div className="inpname">Max ширина детали, мм: </div>
        <span>{statenow.maxWidth}</span>
        <br />
        <div className="inpname">Max вес детали, кг: </div>
        <span>{statenow.maxWeight}</span>
      </div>
    </div>
  );
}

export default MachineSpecification;
