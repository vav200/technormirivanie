import React from "react";

const dataVnutriShlif = {
  machineModels: {
    "3M227": {
      characteristics: {
        otv_maxL: 200,
        otv_maxD: 200,
        max_weight: 70,
      },
      cuttingDepth: {
        roughingDepth: {
          30: 0.005,
          50: 0.006,
          70: 0.005,
          100: 0.005,
          125: 0.005,
          150: 0.005,
          175: 0.0045,
          200: 0.004,
        },
        finishingDepth: {
          30: 0.003,
          50: 0.003,
          70: 0.003,
          100: 0.004,
          125: 0.004,
          150: 0.004,
          175: 0.004,
          200: 0.004,
        },
      },
      longfeed: {
        roughingFeed: 15.8,
        finishingFeed: 10.5,
      },
      perebegFactor: 0.31,
      turns: {
        roughingTurns: {
          30: 375,
          50: 265,
          70: 190,
          100: 190,
          125: 190,
          150: 190,
          175: 190,
          200: 190,
        },
        finishingTurns: {
          30: 520,
          50: 375,
          70: 375,
          100: 265,
          125: 265,
          150: 190,
          175: 190,
          200: 190,
        },
      },
      trasitionTime: {
        100: {
          roughingTrasition: {
            30: 1.2,
            50: 1.2,
            70: 1.2,
            100: 1.3,
            125: 1.4,
            150: 1.4,
            175: 1.4,
            200: 1.4,
          },
          finishingTrasition: {
            30: 2.1,
            50: 2.1,
            70: 2.2,
            100: 2.2,
            125: 2.5,
            150: 2.5,
            175: 2.5,
            200: 2.5,
          },
        },
        200: {
          roughingTrasition: {
            30: 1.3,
            50: 1.3,
            70: 1.3,
            100: 1.4,
            125: 1.6,
            150: 1.6,
            175: 1.6,
            200: 1.6,
          },
          finishingTrasition: {
            30: 2.3,
            50: 2.3,
            70: 2.4,
            100: 2.4,
            125: 3,
            150: 3,
            175: 3,
            200: 3,
          },
        },
      },
      finishingAllowance: {
        30: 0.04,
        50: 0.04,
        70: 0.04,
        100: 0.045,
        125: 0.045,
        150: 0.045,
        175: 0.055,
        200: 0.055,
      },
    },
    "3K229A": {
      characteristics: {
        otv_maxL: 500,
        otv_maxD: 400,
        max_weight: 200,
      },
      cuttingDepth: {
        roughingDepth: {
          70: 0.005,
          100: 0.005,
          125: 0.005,
          150: 0.005,
          175: 0.0045,
          200: 0.004,
          250: 0.004,
          300: 0.004,
          350: 0.004,
          400: 0.004,
        },
        finishingDepth: {
          70: 0.003,
          100: 0.003,
          125: 0.003,
          150: 0.003,
          175: 0.003,
          200: 0.003,
          250: 0.003,
          300: 0.003,
          350: 0.003,
          400: 0.003,
        },
      },
      longfeed: {
        roughingFeed: 21,
        finishingFeed: 10.5,
      },
      perebegFactor: 0.22,
      turns: {
        roughingTurns: {
          70: 220,
          100: 182,
          125: 163,
          150: 149,
          175: 138,
          200: 130,
          250: 116,
          300: 106,
          350: 98,
          400: 91,
        },
        finishingTurns: {
          70: 220,
          100: 182,
          125: 163,
          150: 149,
          175: 138,
          200: 130,
          250: 116,
          300: 106,
          350: 98,
          400: 91,
        },
      },
      trasitionTime: {
        100: {
          roughingTrasition: {
            70: 1.3,
            100: 1.3,
            125: 1.5,
            150: 1.5,
            175: 1.5,
            200: 1.5,
            250: 1.5,
            300: 1.8,
            350: 1.8,
            400: 1.8,
          },
          finishingTrasition: {
            70: 2.3,
            100: 2.3,
            125: 2.7,
            150: 2.7,
            175: 2.7,
            200: 2.7,
            250: 1.7,
            300: 3.1,
            350: 3.1,
            400: 3.1,
          },
        },
        200: {
          roughingTrasition: {
            70: 1.4,
            100: 1.4,
            125: 1.7,
            150: 1.7,
            175: 1.7,
            200: 1.7,
            250: 1.7,
            300: 2,
            350: 2,
            400: 2,
          },
          finishingTrasition: {
            70: 2.6,
            100: 2.6,
            125: 3.1,
            150: 3.1,
            175: 3.1,
            200: 3.1,
            250: 3.1,
            300: 3.8,
            350: 3.8,
            400: 3.8,
          },
        },
        400: {
          roughingTrasition: {
            100: 1.9,
            125: 1.9,
            150: 1.9,
            175: 1.9,
            200: 1.9,
            250: 1.9,
            300: 2.4,
            350: 2.4,
            400: 2.4,
          },
          finishingTrasition: {
            100: 3.6,
            125: 3.6,
            150: 3.6,
            175: 3.6,
            200: 3.6,
            250: 3.6,
            300: 4.5,
            350: 4.5,
            400: 4.5,
          },
        },
      },
      finishingAllowance: {
        70: 0.04,
        100: 0.045,
        125: 0.045,
        150: 0.05,
        175: 0.05,
        200: 0.05,
        250: 0.05,
        300: 0.055,
        350: 0.06,
        400: 0.06,
      },
    },
  },
  installRemovalTime: {
    samocentrpatron: {
      0.5: {
        0.01: 0.5,
        0.08: 0.4,
        0.3: 0.6,
        1: 0.8,
        5: 1.2,
        10: 1.4,
        20: 1.8,
        30: 5.2,
        50: 6.4,
        100: 8.5,
      },
      0.1: {
        0.01: 0.8,
        0.08: 0.7,
        0.3: 1.3,
        1: 1.7,
        5: 2.4,
        10: 2.9,
        20: 3.5,
        30: 6.7,
        50: 8.2,
        100: 11,
      },
      0.05: {
        0.01: 1,
        0.08: 0.8,
        0.3: 1.5,
        1: 2.0,
        5: 2.9,
        10: 3.1,
        20: 4.2,
        30: 8.0,
        50: 10,
        100: 13,
      },
    },
    samocentrpatron_lunet: {
      0.5: { 5: 1.3, 10: 1.7, 20: 2, 30: 4.4, 50: 4.9, 100: 5.7, 200: 7.7 },
      0.1: { 5: 1.5, 10: 1.9, 20: 2.3, 30: 5.1, 50: 5.6, 100: 6.6, 200: 8.5 },
    },
    chetirehkulachk: {
      0.1: { 5: 2, 10: 2.5, 20: 3.3, 30: 9.4, 50: 11, 100: 12, 200: 13 },
      0.05: { 5: 2.5, 10: 3.1, 20: 4, 30: 11, 50: 12, 100: 14, 200: 15 },
      0.01: { 5: 3, 10: 4, 20: 5, 30: 13, 50: 14, 100: 17, 200: 19 },
    },
    chetirehkulachk_lunet: {
      0.5: { 5: 2.2, 10: 2.8, 20: 3.5, 30: 8.5, 50: 10, 100: 11, 200: 13 },
      0.1: { 5: 2.5, 10: 3, 20: 4, 30: 9.5, 50: 11, 100: 13, 200: 15 },
      0.05: { 5: 2.9, 10: 4, 20: 5, 30: 11, 50: 13, 100: 15, 200: 18 },
      // 0.01: { 5: 3.5, 10: 4.5, 20: 5.5, 30: 13, 50: 15, 100: 18, 200: 21 },
    },
  },
  correctionFactors: {
    hardnessFactor: {
      h1: 0.9,
      h2: 1,
      h3: 1.1,
    },
    stiffnessFactor: {
      s1: 1,
      s2: 1.1,
      s3: 1.2,
      s4: 1.4,
      s5: 1.7,
    },
    wallthicknessFactor: {
      w1: 1,
      w2: 1.2,
      w3: 1.4,
    },
    surfaceshapeFactor: {
      sf1: 1,
      sf2: 1.2,
    },
    compositeFactor: {
      "6_7": {
        "Ra1.6": {
          matP: 0.95,
          matM: 2,
          matN: 2.2,
          matK: 0.9,
        },
        "Ra0.8": {
          matP: 1,
          matM: 2.2,
          matN: 2.6,
          matK: 1,
        },
        "Ra0.4": {
          matP: 1.2,
          matM: 2.5,
          matN: 3.2,
          matK: 1.1,
        },
      },
      "8_9": {
        "Ra1.6": {
          matP: 0.9,
          matM: 1.8,
          matN: 2,
          matK: 0.85,
        },
        "Ra0.8": {
          matP: 0.95,
          matM: 2,
          matN: 2.4,
          matK: 0.9,
        },
        "Ra0.4": {
          matP: 1.15,
          matM: 2.4,
          matN: 3,
          matK: 1,
        },
      },
      "10_14": {
        "Ra3.2": {
          matP: 0.7,
          matM: 1.6,
          matN: 1.8,
          matK: 0.8,
        },
        "Ra1.6": {
          matP: 0.8,
          matM: 1.8,
          matN: 2,
          matK: 0.85,
        },
        "Ra0.8": {
          matP: 0.9,
          matM: 2,
          matN: 2.2,
          matK: 0.95,
        },
      },
    },
  },
};

let vnutrishlif_defaultstate = {
  model: "3M227",
  modelstate: "",
  maxLength: 200,
  maxDiameter: 200,
  maxWeight: 70,
  partweight: "",
  partweightstate: "",
  partmaterial: "matP",
  parthardness: "h1",
  partstiffness: "s1",
  partwallthickness: "w1",
  partsurfaceshape: "sf1",
  numberparts: "1",
  numberpartsstate: "",
  perehods: [],

  get_Vnutrishlif_TimeInstall(indper) {
    if (this.partweight > this.maxWeight) {
      return "ошибки";
    } else if (
      (this.perehods[indper][0] == "Вспомагательный переход" &&
        Object.keys(this.perehods[indper][1]).length < 2) ||
      (this.perehods[indper][0] == "Вспомагательный переход" &&
        Object.values(this.perehods[indper][1]).includes(""))
    ) {
      return "";
    } else {
      if (this.partweight === "0" || this.numberparts === "0") return 0;
      else if (this.partweight === "" || this.numberparts === "") {
        return "ошибки";
      } else {
        const range = [0.01, 0.08, 0.3, 1, 5, 10, 20, 30, 50, 100, 200, 400];
        let specifiedWeight = range.find((item) => item >= this.partweight);
        let installTime = 0;
        for (let key in dataVnutriShlif.installRemovalTime) {
          if (this.perehods[indper][1].installoption == key) {
            for (let acc in dataVnutriShlif.installRemovalTime[key]) {
              if (this.perehods[indper][1].positionaccuracy == acc) {
                for (let m in dataVnutriShlif.installRemovalTime[key][acc]) {
                  if (specifiedWeight == m) {
                    installTime =
                      dataVnutriShlif.installRemovalTime[key][acc][m] * this.numberparts;
                    return installTime.toFixed(1);
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  get_Vnutrishlif_MainTime(indper, indstr) {
    // debugger;
    if (this.partweight > this.maxWeight) {
      return "ошибки";
    } else if (this.partweight === "" || this.numberparts === "") return "ошибки";
    else if (
      this.perehods[indper][1][indstr].length > this.maxLength ||
      this.perehods[indper][1][indstr].diameter > this.maxDiameter
    ) {
      return "ошибки";
    } else if (
      (this.perehods[indper][0] == "Основной переход" &&
        (Object.keys(this.perehods[indper][1][indstr]).length < 5 ||
          Object.values(this.perehods[indper][1][indstr]).includes(""))) ||
      (this.perehods[indper][0] == "Основной переход" && this.perehods[indper][1].length == 0)
    ) {
      return "";
    } else {
      let allowance = Number(this.perehods[indper][1][indstr].allowance);
      let diameter = Number(this.perehods[indper][1][indstr].diameter);
      let length = Number(this.perehods[indper][1][indstr].length);
      let accuracy = this.perehods[indper][1][indstr].accuracy;
      let roughness = this.perehods[indper][1][indstr].roghness;

      let MainTime = 0;
      let turnsRoughing = 0; // оброты черновые
      let turnsFinishing = 0; // обороты чистовые
      let longfeedRoughing = 0; // продольная подача черн
      let longfeedFinishing = 0; // продольная подача чист
      let cuttingDepthRoughing = 0; // глубина резания черновая
      let cuttingDepthFinishing = 0; // глубина резания чистовая
      let roughingTrasitionTime = 0; // вспом время чернового перехода
      let finishingTrasitionTime = 0; // вспом время чистового перехода
      let finishingAllow = 0; // чистовой припуск
      let factorPerebegaKruga = 0; // коэффиц. перебега
      let lengthSurface = length <= 100 ? 100 : length <= 200 ? 200 : 400; // длина обработки
      let range = [];
      if (this.model == "3M227") {
        range = [30, 50, 70, 100, 125, 150, 175, 200];
      } else if (this.model == "3K229A") {
        range = [70, 100, 125, 150, 175, 200, 250, 300, 350, 400];
      }
      let specifiedDiameter = range.find((item) => item >= diameter);

      if (
        allowance === 0 ||
        diameter === 0 ||
        length === 0 ||
        this.numberparts === "0" ||
        this.partweight === "0"
      )
        return 0;
      else {
        turnsRoughing =
          dataVnutriShlif.machineModels[this.model].turns.roughingTurns[specifiedDiameter];
        turnsFinishing =
          dataVnutriShlif.machineModels[this.model].turns.finishingTurns[specifiedDiameter];
        longfeedRoughing = dataVnutriShlif.machineModels[this.model].longfeed.roughingFeed;
        longfeedFinishing = dataVnutriShlif.machineModels[this.model].longfeed.finishingFeed;
        cuttingDepthRoughing =
          dataVnutriShlif.machineModels[this.model].cuttingDepth.roughingDepth[specifiedDiameter];
        cuttingDepthFinishing =
          dataVnutriShlif.machineModels[this.model].cuttingDepth.finishingDepth[specifiedDiameter];
        roughingTrasitionTime =
          dataVnutriShlif.machineModels[this.model].trasitionTime[lengthSurface].roughingTrasition[
            specifiedDiameter
          ];
        finishingTrasitionTime =
          dataVnutriShlif.machineModels[this.model].trasitionTime[lengthSurface].finishingTrasition[
            specifiedDiameter
          ];
        finishingAllow =
          dataVnutriShlif.machineModels[this.model].finishingAllowance[specifiedDiameter];
        factorPerebegaKruga = dataVnutriShlif.machineModels[this.model].perebegFactor;

        // factors---------------------------------------------------

        let hardnessFactor = dataVnutriShlif.correctionFactors.hardnessFactor[this.parthardness];

        let stiffnessFactor = dataVnutriShlif.correctionFactors.stiffnessFactor[this.partstiffness];

        let wallthicknessFactor =
          dataVnutriShlif.correctionFactors.wallthicknessFactor[this.partwallthickness];

        let surfaceshapeFactor =
          dataVnutriShlif.correctionFactors.surfaceshapeFactor[this.partsurfaceshape];

        let compositeFactor =
          dataVnutriShlif.correctionFactors.compositeFactor[accuracy][roughness][this.partmaterial];

        // base time calculation--------------------------------------

        MainTime =
          (((length + length * factorPerebegaKruga) * 2 * (allowance - finishingAllow)) /
            (turnsRoughing * longfeedRoughing * cuttingDepthRoughing) +
            ((length + length * factorPerebegaKruga) * 2 * finishingAllow) /
              (turnsFinishing * longfeedFinishing * cuttingDepthFinishing) +
            roughingTrasitionTime +
            finishingTrasitionTime) *
          hardnessFactor *
          stiffnessFactor *
          wallthicknessFactor *
          surfaceshapeFactor *
          compositeFactor *
          this.numberparts;
      }
      return MainTime.toFixed(1);
    }
  },
};

// --------------------R E D U C E R ----------------------

export default function Vnutrishlif_reducer(state = vnutrishlif_defaultstate, action) {
  switch (action.type) {
    case "MODEL_VNUTRISHLIF":
      if (!action.data)
        return { ...state, model: "", maxDiameter: "", maxLength: "", maxWeight: "" };
      else
        return {
          ...state,
          model: action.data,
          maxDiameter: dataVnutriShlif.machineModels[action.data].characteristics.otv_maxD,
          maxLength: dataVnutriShlif.machineModels[action.data].characteristics.otv_maxL,
          maxWeight: dataVnutriShlif.machineModels[action.data].characteristics.max_weight,
        };
    case "WEIGHT_VNUTRISHLIF":
      let inpweight = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      if (!action.data) return { ...state, partweight: inpweight, partweightstate: false };
      else return { ...state, partweight: inpweight, partweightstate: true };

    case "MATERIAL_VNUTRISHLIF":
      return { ...state, partmaterial: action.data };
    case "HARDNESS_VNUTRISHLIF":
      return { ...state, parthardness: action.data };
    case "WALLTHICKNESS_VNUTRISHLIF":
      return { ...state, partwallthickness: action.data };
    case "STIFFNESS_VNUTRISHLIF":
      return { ...state, partstiffness: action.data };
    case "SURFACESHAPE_VNUTRISHLIF":
      return { ...state, partsurfaceshape: action.data };
    case "NUMBERPARTS_VNUTRISHLIF":
      let inpnumparts = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      if (!action.data) return { ...state, numberparts: inpnumparts, numberpartsstate: false };
      else return { ...state, numberparts: inpnumparts, numberpartsstate: true };

    // ----------------------------Переходы-------------------------

    case "ADDPEREHOD_VNUTRISHLIF":
      if (!state.partweight) state.partweightstate = false;
      if (!state.model) state.modelstate = false;
      if (!state.numberparts) state.numberpartsstate = false;
      if (state.partweight && state.model && state.numberparts) {
        return {
          ...state,
          perehods: [...state.perehods, action.data],
        };
      }
    case "DELPEREHOD_VNUTRISHLIF":
      return {
        ...state,
        perehods: state.perehods.filter((item, index) => {
          return !action.data.includes(String(index));
        }),
      };
    case "DATAVSPPEREHODA_VNUTRISHLIF":
      return {
        ...state,
        perehods: state.perehods.map((item, index, arr) => {
          if (index == action.data[0]) {
            if (!item[1]) {
              return item.concat({ [action.data[1]]: action.data[2] });
            } else {
              return item.map((el, i, arr) => {
                if (i == 1) {
                  return {
                    ...arr[i],
                    ...{ [action.data[1]]: action.data[2] },
                  };
                } else return el;
              });
            }
          } else return item;
        }),
      };

    case "ADDSTRPEREHODA_VNUTRISHLIF":
      return {
        ...state,
        perehods: state.perehods.map((item, index, arr) => {
          if (index == action.data[0]) {
            if (!item[1]) {
              return [...item, [action.data[1]]];
            } else {
              return item.map((el, i, arr) => {
                if (i == 1) {
                  return [...arr[i], action.data[1]];
                } else return el;
              });
            }
          } else return item;
        }),
      };
    case "DELSTRPEREHODA_VNUTRISHLIF":
      return {
        ...state,
        perehods: state.perehods.map((item, index) => {
          if (index == action.data[0]) {
            return item.map((el, i, arr) => {
              if (i == 1) {
                return el.filter((it, ind) => !action.data[1].includes(String(ind)));
              } else return el;
            });
          } else return item;
        }),
      };
    case "DATAOSNPEREHODA_VNUTRISHLIF":
      let dataosnper = "";
      if (
        action.data[1] == "diameter" ||
        action.data[1] == "length" ||
        action.data[1] == "allowance"
      ) {
        dataosnper = action.data[2].replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      } else dataosnper = action.data[2];
      return {
        ...state,
        perehods: state.perehods.map((item, index, arr) => {
          if (index == action.data[0]) {
            return item.map((item, index) => {
              if (index == 1) {
                return item.map((el, i, arr) => {
                  if (i == action.data[3]) {
                    return { ...arr[i], ...{ [action.data[1]]: dataosnper, Otime: 0 } };
                  } else return el;
                });
              } else return item;
            });
          } else return item;
        }),
      };

    case "CALCULATIONTIME_VNUTRISHLIF": {
      return {
        ...state,
        perehods: state.perehods.map((item, index) => {
          if (item[0] == "Вспомагательный переход") {
            return item.map((el, i) => {
              if (
                i == 1 &&
                el.hasOwnProperty("installoption") &&
                el.hasOwnProperty("positionaccuracy")
              ) {
                if (el["installoption"] !== "" && el["positionaccuracy"] !== "") {
                  return { ...el, ...{ Vtime: state.get_Vnutrishlif_TimeInstall(index) } };
                } else {
                  return { ...el, ...{ Vtime: " " } };
                }
              } else return el;
            });
          } else {
            return item.map((el, i) => {
              if (i == 1) {
                return el.map((it, ind) => {
                  return { ...it, ...{ Otime: state.get_Vnutrishlif_MainTime(index, ind) } };
                });
              } else return el;
            });
          }
        }),
      };
    }
    default:
      return state;
  }
}
