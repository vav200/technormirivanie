import React from "react";
import "./../main.css";
import { useSelector } from "react-redux";
import MachineSpecification from "./vnutrishlif_components/MachineSpecification";
import PartSpecifications from "./vnutrishlif_components/PartSpecifications";
import Perehodi from "./vnutrishlif_components/Perehodi";
import ValidCalcUnit from "./vnutrishlif_components/ValidCalcUnit";
import vnutrshl_img from "./vnutrishlif_components/img/vnutrishlif_add.jpg";

function Vnutrishlif() {
  let statenow = useSelector((dat) => dat);
  console.log(statenow);
  return (
    <section className="main">
      <div className="imgadd__wrap">
        <div className="imgadd__fon"></div>
        <img src={vnutrshl_img} alt="внутреннее шлифование" className="imgadd" />
      </div>
      <h2 className="nameoperation">Нормирование внутришлифовальной операции</h2>
      <MachineSpecification />
      <PartSpecifications />
      <Perehodi />
      {/* <ValidCalcUnit /> */}
    </section>
  );
}

export default Vnutrishlif;
