import React from "react";
import "./../main.css";
import { useSelector } from "react-redux";
import MachineSpecification from "./ploskoshlif_components/MachineSpecification";
import PartSpecifications from "./ploskoshlif_components/PartSpecifications";
import Perehodi from "./ploskoshlif_components/Perehodi";
import ValidCalcUnit from "./ploskoshlif_components/ValidCalcUnit";
import ploskoshl_img from "./ploskoshlif_components/img/ploskoe_shlifovanie_header.jpg";

function Ploskoshlif() {
  let statenow = useSelector((dat) => dat);
  console.log(statenow);
  return (
    <section className="main">
      <div className="imgadd__wrap">
        <div className="imgadd__fon"></div>
        <img src={ploskoshl_img} alt="плоское шлифование" className="imgadd" />
      </div>
      <h2 className="nameoperation">Нормирование плоскошлифовальной операции</h2>
      <MachineSpecification />
      <PartSpecifications />
      <Perehodi />
      <ValidCalcUnit />
    </section>
  );
}

export default Ploskoshlif;
