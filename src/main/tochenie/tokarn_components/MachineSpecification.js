import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function MachineSpecification() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <div className="inpname">Модель станка:</div>
        <select
          className="selectbox"
          onChange={(e) => {
            dispatch({ type: "MODEL_TOKARNOVINTOREZN", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
          }}
          defaultValue={"16Б16П"}
        >
          {/* <option value=""> </option> */}
          <option value="16B16P">16Б16П</option>
          <option value="16K20">16K20</option>
          <option value="1M63B">1М63Б</option>
          <option value="16K40">16K40</option>
          <option value="165">165</option>
        </select>
      </div>
      <div className="infoblock__paramsmachine">
        <div className="inpname">Max длина точения, мм: </div>
        <span>{statenow.maxLength}</span>
        <br />
        <div className="inpname">Max диаметр точения, мм:</div>
        <br />
        <div className="inpname inpname__podpunkt">над станиной -</div>
        <span>{statenow.maxDiameterPatron}</span>
        <br />
        <div className="inpname inpname__podpunkt">над суппортом -</div>
        <span>{statenow.maxDiameterCentra}</span>
        <br />
        <div className="inpname">Max вес детали, кг:</div>
        <br />
        <div className="inpname inpname__podpunkt">обработка в патроне -</div>
        <span>{statenow.maxWeightPatron}</span>
        <br />
        <div className="inpname inpname__podpunkt">обработка в центрах -</div>
        <span>{statenow.maxWeightCentra}</span>
      </div>
    </div>
  );
}

export default MachineSpecification;
