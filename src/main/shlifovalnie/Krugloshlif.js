import React from "react";
import "./../main.css";
import { useSelector } from "react-redux";
import MachineSpecification from "./krugloshlif_components/MachineSpecification";
import PartSpecifications from "./krugloshlif_components/PartSpecifications";
import Perehodi from "./krugloshlif_components/Perehodi";
import ValidCalcUnit from "./krugloshlif_components/ValidCalcUnit";
import krugloshl_img from "./krugloshlif_components/img/krug2.jpg";

function Krugloshlif() {
  let statenow = useSelector((dat) => dat);
  console.log(statenow);
  return (
    <section className="main">
      <div className="imgadd__wrap">
        <div className="imgadd__fon"></div>
        <img src={krugloshl_img} alt="плоское шлифование" className="imgadd" />
      </div>
      <h2 className="nameoperation">Нормирование круглошлифовальной операции</h2>
      <MachineSpecification />
      <PartSpecifications />
      <Perehodi />
      {/* <ValidCalcUnit /> */}
    </section>
  );
}

export default Krugloshlif;
