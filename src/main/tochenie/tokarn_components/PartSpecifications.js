import React, { useEffect, useState } from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function PartSpecifications() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat.tokarnovintorezn);
  let typepartmaterial = useSelector((dat) => dat.tokarnovintorezn.partmaterialForCuttingSpeed);
  // const [typepartmaterial, setTypepartmaterial] = useState("matP");
  // const [gradematerial_P, setGradematerial_P] = useState("C_nomore_60");
  // const [gradematerial_PL, setGradematerial_PL] = useState("C_nomore_60_with_Cr");
  // const [gradematerial_K, setGradematerial_K] = useState("gray");
  // const [gradematerial_N, setGradematerial_N] = useState("aluminum");
  // const [C_nomore_60, setC_nomore_60] = useState("117-142");
  // const [C_more_60, setC_more_60] = useState("174-200");
  // const [C_nomore_60_with_Cr, setC_nomore_60_with_Cr] = useState("117-142");
  // const [C_more_60_with_Cr, setC_more_60_with_Cr] = useState("145-171");
  // const [C_nomore_60_with_Mn, setC_nomore_60_with_Mn] = useState("174-200");
  // const [C_nomore_60_with_Ni, setC_nomore_60_with_Ni] = useState("117-142");
  // const [C_nomore_60_with_Cr_Ni, setC_nomore_60_with_Cr_Ni] = useState("117-142");
  // const [C_nomore_60_with_Cr_Ni_Mo, setC_nomore_60_with_Cr_Ni_Mo] = useState("117-142");
  // const [C_nomore_60_with_Cr_Mn, setC_nomore_60_with_Cr_Mn] = useState("145-171");
  // const [C_nomore_60_with_Cr_Si, setC_nomore_60_with_Cr_Si] = useState("145-171");
  // const [C_nomore_60_with_Cr_Ni_W, setC_nomore_60_with_Cr_Ni_W] = useState("174-200");
  // const [C_more_60_shx, setC_more_60_shx] = useState("202-228");
  // const [gray, setgray] = useState("121-140");
  // const [malleable, setmalleable] = useState("100-120");
  // const [antifriction, setantifriction] = useState("141-160");
  // const [highstrength, sethighstrength] = useState("141-160");
  // const [chromic, setchromic] = useState("141-160");
  // const [aluminum, setaluminum] = useState("40-100");
  // const [duralumin, setduralumin] = useState("40-100");
  // const [bronze, setbronze] = useState("40-100");

  // useEffect(() => {
  //   switch (typepartmaterial) {
  //     case "matP":
  //       dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: gradematerial_P });
  //       break;
  //     case "matPL":
  //       dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: gradematerial_PL });
  //       break;
  //     case "matK":
  //       dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: gradematerial_K });
  //       break;
  //     case "matN":
  //       dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: gradematerial_N });
  //       break;
  //   }
  //   dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
  // }, [typepartmaterial]);

  // useEffect(() => {
  //   dispatch({ type: "HARDNESSMASSIV_TOKARNOVINTOREZN" });
  //   switch (statenow.part_gradematerial) {
  //     case "C_nomore_60":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60 });
  //       break;
  //     case "C_more_60":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_more_60 });
  //       break;
  //     case "C_nomore_60_with_Cr":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Cr });
  //       break;
  //     case "C_more_60_with_Cr":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_more_60_with_Cr });
  //       break;
  //     case "C_nomore_60_with_Mn":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Mn });
  //       break;
  //     case "C_nomore_60_with_Ni":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Ni });
  //       break;
  //     case "C_nomore_60_with_Cr_Ni":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Cr_Ni });
  //       break;
  //     case "C_nomore_60_with_Cr_Ni_Mo":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Cr_Ni_Mo });
  //       break;
  //     case "C_nomore_60_with_Cr_Mn":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Cr_Mn });
  //       break;
  //     case "C_nomore_60_with_Cr_Si":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Cr_Si });
  //       break;
  //     case "C_nomore_60_with_Cr_Ni_W":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_nomore_60_with_Cr_Ni_W });
  //       break;
  //     case "C_more_60_shx":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: C_more_60_shx });
  //       break;
  //     case "gray":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: gray });
  //       break;
  //     case "malleable":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: malleable });
  //       break;
  //     case "antifriction":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: antifriction });
  //       break;
  //     case "highstrength":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: highstrength });
  //       break;
  //     case "chromic":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: chromic });
  //       break;
  //     case "aluminum":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: aluminum });
  //       break;
  //     case "duralumin":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: duralumin });
  //       break;
  //     case "bronze":
  //       dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: bronze });
  //       break;
  //   }
  // }, [statenow.part_gradematerial]);

  // function choiceGradeState(e) {
  //   switch (statenow.part_gradematerial) {
  //     case "C_nomore_60":
  //       setC_nomore_60(e.target.value);
  //       break;
  //     case "C_more_60":
  //       setC_more_60(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Cr":
  //       setC_nomore_60_with_Cr(e.target.value);
  //       break;
  //     case "C_more_60_with_Cr":
  //       setC_more_60_with_Cr(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Mn":
  //       setC_nomore_60_with_Mn(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Ni":
  //       setC_nomore_60_with_Ni(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Cr_Ni":
  //       setC_nomore_60_with_Cr_Ni(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Cr_Ni_Mo":
  //       setC_nomore_60_with_Cr_Ni_Mo(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Cr_Mn":
  //       setC_nomore_60_with_Cr_Mn(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Cr_Si":
  //       setC_nomore_60_with_Cr_Si(e.target.value);
  //       break;
  //     case "C_nomore_60_with_Cr_Ni_W":
  //       setC_nomore_60_with_Cr_Ni_W(e.target.value);
  //       break;
  //     case "C_more_60_shx":
  //       setC_more_60_shx(e.target.value);
  //       break;
  //     case "gray":
  //       setgray(e.target.value);
  //       break;
  //     case "malleable":
  //       setmalleable(e.target.value);
  //       break;
  //     case "antifriction":
  //       setantifriction(e.target.value);
  //       break;
  //     case "highstrength":
  //       sethighstrength(e.target.value);
  //       break;
  //     case "chromic":
  //       setchromic(e.target.value);
  //       break;
  //     case "aluminum":
  //       setaluminum(e.target.value);
  //       break;
  //     case "duralumin":
  //       setduralumin(e.target.value);
  //       break;
  //     case "bronze":
  //       setbronze(e.target.value);
  //       break;
  //   }
  // }

  useEffect(() => {
    dispatch({ type: "HARDNESSMASSIV_TOKARNOVINTOREZN" });
  }, []);

  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <label className={`inpname ${!statenow.partweightstate ? "" : "inpname__withData"}`}>
          Масса детали, кг:
        </label>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.partweight > statenow.maxWeightCentra ? "selectbox_error" : "selectbox"
            }`}
            value={statenow.partweight}
            onChange={(e) => {
              dispatch({ type: "WEIGHT_TOKARNOVINTOREZN", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.partweight > statenow.maxWeightCentra ? "selectbox__errormessage_active" : ""
            }`}
          >
            {statenow.partweight > statenow.maxWeightCentra ? "больше допустимой" : ""}
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className={`inpname align-top ${statenow.partmaterial ? "inpname__withData" : ""}`}>
          Вид заготовки:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              прокат
              <input
                type="radio"
                name="typeworkpiece"
                className="form-check-input"
                value="prokat"
                onChange={(e) => {
                  dispatch({ type: "TYPEWORKPIECE_TOKARNOVINTOREZN", data: e.target.value });
                  if (statenow.partmaterial === "matK")
                    dispatch({ type: "MATERIAL_TOKARNOVINTOREZN", data: "" });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              поковка
              <input
                type="radio"
                name="typeworkpiece"
                className="form-check-input"
                value="pokovka"
                onChange={(e) => {
                  dispatch({ type: "TYPEWORKPIECE_TOKARNOVINTOREZN", data: e.target.value });
                  if (statenow.partmaterial === "matK")
                    dispatch({ type: "MATERIAL_TOKARNOVINTOREZN", data: "" });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              отливка
              <input
                type="radio"
                name="typeworkpiece"
                className="form-check-input"
                value="litie"
                onChange={(e) => {
                  dispatch({ type: "TYPEWORKPIECE_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
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
                  dispatch({ type: "MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({
                    type: "MATERIALFORCUTTINGSPEED_TOKARNOVINTOREZN",
                    data: e.target.value,
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                  // dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: "117-142" });
                  // setTypepartmaterial("matP");
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
                  dispatch({ type: "MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({ type: "MATERIALFORCUTTINGSPEED_TOKARNOVINTOREZN", data: "matPL" });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                  // dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: "117-142" });
                  // setTypepartmaterial("matPL");
                }}
              />
            </label>
          </div>
          <div className={`form-check ${statenow.typeworkpiece !== "litie" ? "d-none" : ""}`}>
            <label className="form-check-label">
              чугуны
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matK"
                onChange={(e) => {
                  dispatch({ type: "MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({
                    type: "MATERIALFORCUTTINGSPEED_TOKARNOVINTOREZN",
                    data: e.target.value,
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                  // dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: "100-170" });
                  // setTypepartmaterial("matK");
                }}
                checked={statenow.partmaterial === "matK"}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              медные и алюминиевые сплавы
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matN"
                onChange={(e) => {
                  dispatch({ type: "MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({
                    type: "MATERIALFORCUTTINGSPEED_TOKARNOVINTOREZN",
                    data: e.target.value,
                  });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                  // dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: "40-100" });
                  // setTypepartmaterial("matN");
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className={`inpname ${statenow.part_gradematerial ? "inpname__withData" : ""}`}>
          Марка материала:
        </div>

        {/*----------углеродистые стали----------------------  */}
        <select
          className={`selectbox d-inline-block ${typepartmaterial !== "matP" ? "d-none" : ""}`}
          // value={statenow.part_gradematerial ? statenow.part_gradematerial : ""}
          onChange={(e) => {
            dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            // setGradematerial_P(e.target.value);
          }}
          defaultValue={"C_nomore_60"}
        >
          <option selected value="C_nomore_60">
            Ст3пс - Ст6пс
          </option>
          <option value="C_nomore_60">Ст3кп - Ст6кп</option>
          <option value="C_nomore_60">Ст15 - Ст60</option>
          <option value="C_more_60">Ст65 - Ст70</option>
          <option value="C_more_60">У9 - У12</option>
        </select>

        {/*----------легированные стали----------------------  */}

        <select
          className={`selectbox d-inline-block ${typepartmaterial !== "matPL" ? "d-none" : ""}`}
          // value={statenow.part_gradematerial ? statenow.part_gradematerial : ""}
          onChange={(e) => {
            dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            // setGradematerial_PL(e.target.value);
          }}
          defaultValue={"C_nomore_60_with_Cr"}
        >
          <option selected value="C_nomore_60_with_Cr">
            15Х - 55Х
          </option>
          <option value="C_more_60_with_Cr">70Х, 90ХМФ</option>
          <option value="C_more_60_with_Cr">9Х, 9Х2, 9ХФ, 9Х2МФ</option>
          <option value="C_nomore_60_with_Mn">15Г - 70Г</option>
          <option value="C_nomore_60_with_Mn">10Г2 - 50Г2</option>
          <option value="C_nomore_60_with_Ni">25Н - 40Н</option>
          <option value="C_nomore_60_with_Cr_Ni">20ХН - 60ХН</option>
          <option value="C_nomore_60_with_Cr_Ni">12ХН2, 12ХН3, 20ХН3</option>
          <option value="C_nomore_60_with_Cr_Ni">30Н3, 37ХН3А</option>
          <option value="C_nomore_60_with_Cr_Ni">12Х2Н4, 20Х2Н4</option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">5ХНМ - 45ХНМ </option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">20ХМ - 35ХМ</option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">15Х2М2Ф, 38ХМЮА</option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">15Х5МФ, 35Х10А</option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">15ХГ, 18ХГ, 18ХГ</option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">20ХГВТ, 30Г2ХФА</option>
          <option value="C_nomore_60_with_Cr_Ni_Mo">30Х2ГМТ, 03Г2АТ</option>
          <option value="C_nomore_60_with_Cr_Mn">18Х2Н4МА, 20ХМ3А</option>
          <option value="C_nomore_60_with_Cr_Si">20ХГС - 35ХГС</option>
          <option value="C_nomore_60_with_Cr_Si">10ХГНА - 15ХГНА</option>
          <option value="C_nomore_60_with_Cr_Si">25СГ - 50СГ</option>
          <option value="C_nomore_60_with_Cr_Ni_W">5ХНВ - 30ХНВ</option>
          <option value="C_nomore_60_with_Cr_Ni_W">18ХНВА, 15ХНФК</option>
          <option value="C_nomore_60_with_Cr_Ni_W">12ХНФ, 50ХФА, 55ХН2Ф</option>
          <option value="C_more_60_shx">ШХ15 - ШХ20, ХВГ</option>
        </select>

        {/*-----------чугуны--------------------  */}
        <select
          className={`selectbox d-inline-block ${typepartmaterial !== "matK" ? "d-none" : ""}`}
          // value={statenow.part_gradematerial ? statenow.part_gradematerial : ""}
          onChange={(e) => {
            dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            // setGradematerial_K(e.target.value);
          }}
          defaultValue={"gray"}
        >
          <option selected value="gray">
            СЧ12 - СЧ60
          </option>
          <option value="malleable">КЧ30 - КЧ63</option>
          <option value="antifriction">АСЧ1 - АСЧ3</option>
          <option value="antifriction">АВЧ1 - АВЧ2</option>
          <option value="antifriction">АКЧ1 - АКЧ2</option>
          <option value="highstrength">ВЧ40 - ВЧ60</option>
          <option value="chromic">ЖЧХ-0.8 - ЖЧХ2.5</option>
        </select>

        {/*-----------алюминий медь--------------------  */}
        <select
          className={`selectbox d-inline-block ${typepartmaterial !== "matN" ? "d-none" : ""}`}
          // value={statenow.part_gradematerial ? statenow.part_gradematerial : ""}
          onChange={(e) => {
            dispatch({ type: "GRADE_MATERIAL_TOKARNOVINTOREZN", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            // setGradematerial_N(e.target.value);
          }}
          defaultValue={"aluminum"}
        >
          <option selected value="aluminum">
            А1 - А8
          </option>
          <option value="aluminum">АВ1 - АВ2</option>
          <option value="duralumin">Д16, Д16Т</option>
          <option value="bronze">АЖ9-4, АЖН11-4, АЖН10-4</option>
          <option value="bronze">АМц9-2, ЛА67-2,5</option>
          <option value="bronze">ОЦ-10-2, ОЦ8-4</option>
          <option value="bronze">ОСН-10-2-3, ОС-10-10</option>
          <option value="bronze">ОС-8-12, АЖС7-1,5</option>
        </select>
      </div>

      <div className="infoblock__item">
        <div className={`inpname ${statenow.parthardness ? "inpname__withData" : ""}`}>
          Твердость HB:
        </div>
        <select
          className={`selectbox d-inline-block `}
          value={statenow.parthardness ? statenow.parthardness : ""}
          onChange={(e) => {
            dispatch({ type: "HARDNESS_TOKARNOVINTOREZN", data: e.target.value });
            dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            // choiceGradeState(e);
          }}
          defaultValue={statenow.hardnessmassiv[0]}
        >
          {statenow.hardnessmassiv.map((item, ind) =>
            ind === 0 ? (
              <option value={item} selected key={ind}>
                {"от " + item.split("-").join(" до ")}
              </option>
            ) : (
              <option value={item} key={ind}>
                {"от " + item.split("-").join(" до ")}
              </option>
            )
          )}
        </select>
      </div>

      <div className="infoblock__item">
        <div className={`inpname align-top ${statenow.partform ? "inpname__withData" : ""}`}>
          Форма детали:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              цилиндрическая
              <input
                type="radio"
                name="partform"
                className="form-check-input"
                value="cilindric"
                onChange={(e) => {
                  dispatch({ type: "PARTFORM_TOKARNOVINTOREZN", data: e.target.value });
                  // dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              фасонная или коробчатая
              <input
                type="radio"
                name="partform"
                className="form-check-input"
                value="fason_korobch"
                onChange={(e) => {
                  dispatch({ type: "PARTFORM_TOKARNOVINTOREZN", data: e.target.value });
                  //   dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className={`infoblock__item ${statenow.partform !== "cilindric" ? "d-none" : ""}`}>
        <div className={`inpname align-top ${statenow.typeofpart ? "inpname__withData" : ""}`}>
          Тип детали:
        </div>
        <div className="radiobox d-inline-block">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              вал
              <input
                type="radio"
                name="typeofPart"
                className="form-check-input"
                value="val"
                onChange={(e) => {
                  dispatch({ type: "TYPEPART_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              втулка
              <input
                type="radio"
                name="typeofPart"
                className="form-check-input"
                value="vtulka"
                onChange={(e) => {
                  dispatch({ type: "TYPEPART_TOKARNOVINTOREZN", data: e.target.value });
                  dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className={`infoblock__item`}>
        <div className={`inpname align-top ${statenow.generallength ? "inpname__withData" : ""}`}>
          Длина детали:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.generallength > statenow.maxLength || statenow.generallengthstate === false
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={statenow.generallength ? statenow.generallength : ""}
            onChange={(e) => {
              dispatch({
                type: "GENERAL_LENGTH_TOKARNOVINTOREZN",
                data: e.target.value,
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />

          <div
            className={`selectbox__errormessage ${
              statenow.generallengthstate === false || statenow.generallength > statenow.maxLength
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            {statenow.generallengthstate === false ? "введите значение" : "больше допустимой"}
            {/* больше допустимой */}
          </div>
        </div>
      </div>

      <div className={`infoblock__item ${statenow.partform !== "fason_korobch" ? "d-none" : ""}`}>
        <div className={`inpname align-top ${statenow.sd_factor ? "inpname__withData" : ""}`}>
          Условный средний диаметр:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.sd_factor > statenow.maxDiameterPatron || statenow.sd_factorstate === false
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={statenow.sd_factor ? statenow.sd_factor : ""}
            onChange={(e) => {
              dispatch({
                type: "SD_FACTOR",
                data: e.target.value,
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.sd_factorstate === false ||
              statenow.sd_factor > statenow.maxDiameterPatron / 2
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            {statenow.sd_factorstate === false ? "введите значение" : "больше допустимого"}
          </div>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          statenow.partform !== "cilindric" || statenow.typeofpart !== "vtulka" ? "d-none" : ""
        }`}
      >
        <div className={`inpname align-top ${statenow.sd_factor ? "inpname__withData" : ""}`}>
          Толщина стенки:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.sd_factor > statenow.maxDiameterPatron / 2 ||
              statenow.sd_factorstate === false
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={statenow.sd_factor ? statenow.sd_factor : ""}
            onChange={(e) => {
              dispatch({
                type: "SD_FACTOR",
                data: e.target.value,
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.sd_factorstate === false ||
              statenow.sd_factor > statenow.maxDiameterPatron / 2
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            {statenow.sd_factorstate === false ? "введите значение" : "больше допустимой"}
          </div>
        </div>
      </div>

      <div
        className={`infoblock__item ${
          statenow.partform !== "cilindric" || statenow.typeofpart !== "val" ? "d-none" : ""
        }`}
      >
        <div className={`inpname align-top ${statenow.sd_factor ? "inpname__withData" : ""}`}>
          Средний диаметр:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${
              statenow.sd_factor > statenow.maxDiameterPatron || statenow.sd_factorstate === false
                ? "selectbox_error"
                : "selectbox"
            }`}
            value={statenow.sd_factor ? statenow.sd_factor : ""}
            onChange={(e) => {
              dispatch({
                type: "SD_FACTOR",
                data: e.target.value,
              });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
            }}
          />
          <div
            className={`selectbox__errormessage ${
              statenow.sd_factorstate === false || statenow.sd_factor > statenow.maxDiameterPatron
                ? "selectbox__errormessage_active"
                : ""
            }`}
          >
            {statenow.sd_factorstate === false ? "введите значение" : "больше допустимого"}
          </div>
        </div>
      </div>

      {/* <div className="infoblock__item">
        <div className={`inpname ${statenow.numberparts ? "inpname__withData" : ""}`}>
          Обрабатывается деталей:
        </div>
        <div className="d-inline-block">
          <input
            type="text"
            className={`${statenow.numberpartsstate === false ? "selectbox_error" : "selectbox"}`}
            value={statenow.numberparts}
            onChange={(e) => {
              dispatch({ type: "NUMBERPARTS_TOKARNOVINTOREZN", data: e.target.value });
              dispatch({ type: "CALCULATIONTIME_TOKARNOVINTOREZN" });
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
