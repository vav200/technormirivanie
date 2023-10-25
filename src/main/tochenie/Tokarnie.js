import React from "react";
import "./../main.css";
import { useSelector } from "react-redux";
import tokarn_img from "./tokarn_components/img/cutting_add.jpg";
import MachineSpecification from "./tokarn_components/MachineSpecification";
import PartSpecifications from "./tokarn_components/PartSpecifications";
import Perehodi from "./tokarn_components/Perehodi";

function Tokarnie() {
  let statenow = useSelector((dat) => dat);
  console.log(statenow);
  return (
    <section className="main">
      <div className="imgadd__wrap">
        <div className="imgadd__fon"></div>
        <img src={tokarn_img} alt="токарная обработка" className="imgadd" />
      </div>
      <h2 className="nameoperation">Нормирование токарной операции</h2>
      <MachineSpecification />
      <PartSpecifications />
      <Perehodi />
      {/* <ValidCalcUnit /> */}
    </section>
  );
}

export default Tokarnie;
