import React from "react";

const dataKrugloshlif = {
  machineModels: {
    "3A130": {
      characteristics: {
        maxL: 700,
        maxD: 250,
        max_weight: 100,
      },
      perebegFactor: 0.31,
      cuttingDepth: {
        roughingDepth: {
          20: 0.025,
          30: 0.018,
          40: 0.028,
          50: 0.027,
          70: 0.043,
          90: 0.032,
          120: 0.028,
          150: 0.022,
          200: 0.02,
          250: 0.0017,
        },
        finishingDepth: {
          20: 0.01,
          30: 0.01,
          40: 0.01,
          50: 0.01,
          70: 0.01,
          90: 0.01,
          120: 0.01,
          150: 0.01,
          200: 0.01,
          250: 0.01,
        },
      },
      longfeed: {
        roughingFeed: {
          20: 31.5,
          30: 31.5,
          40: 31.5,
          50: 31.5,
          70: 31.5,
          90: 31.5,
          120: 32,
          150: 32,
          200: 28,
          250: 27,
        },
        finishingFeed: {
          20: 12.6,
          30: 10.5,
          40: 14.7,
          50: 12.6,
          70: 21,
          90: 17.9,
          120: 16,
          150: 15,
          200: 13,
          250: 10.5,
        },
      },
      turns: {
        roughingTurns: {
          20: 300,
          30: 300,
          40: 150,
          50: 150,
          70: 75,
          90: 75,
          120: 75,
          150: 75,
          200: 75,
          250: 75,
        },
        finishingTurns: {
          20: 300,
          30: 300,
          40: 150,
          50: 150,
          70: 75,
          90: 75,
          120: 75,
          150: 75,
          200: 75,
          250: 75,
        },
      },
      trasitionTime: {
        500: {
          roughingTrasition: {
            20: 0.86,
            30: 0.86,
            40: 0.86,
            50: 0.86,
            70: 0.86,
            90: 0.86,
            120: 0.95,
            150: 0.95,
            200: 0.95,
            250: 1.1,
          },
          finishingTrasition: {
            20: 2.3,
            30: 2.3,
            40: 2.3,
            50: 2.3,
            70: 2.1,
            90: 2.1,
            120: 2.4,
            150: 2.4,
            200: 2.4,
            250: 2.4,
          },
        },
        2000: {
          roughingTrasition: {
            20: 1,
            30: 1,
            40: 1,
            50: 1,
            70: 1,
            90: 1,
            120: 1.1,
            150: 1.2,
            200: 1.2,
            250: 1.3,
          },
          finishingTrasition: {
            20: 2.8,
            30: 2.8,
            40: 2.8,
            50: 2.8,
            70: 2.5,
            90: 2.5,
            120: 2.8,
            150: 2.8,
            200: 2.8,
            250: 2.8,
          },
        },
      },
      finishingAllowance: {
        20: 0.04,
        30: 0.05,
        40: 0.05,
        50: 0.05,
        70: 0.06,
        90: 0.06,
        120: 0.07,
        150: 0.07,
        200: 0.08,
        250: 0.08,
      },
    },
    "3M194": {
      characteristics: {
        maxL: 4000,
        maxD: 560,
        max_weight: 4000,
      },
      perebegFactor: 0.31,
      cuttingDepth: {
        roughingDepth: {
          40: 0.036,
          60: 0.043,
          80: 0.04,
          100: 0.049,
          150: 0.045,
          200: 0.057,
          250: 0.047,
          300: 0.04,
          350: 0.036,
          400: 0.033,
          450: 0.032,
          500: 0.031,
        },
        finishingDepth: {
          40: 0.01,
          60: 0.01,
          80: 0.01,
          100: 0.01,
          150: 0.01,
          200: 0.01,
          250: 0.01,
          300: 0.01,
          350: 0.01,
          400: 0.01,
          450: 0.01,
          500: 0.01,
        },
      },
      longfeed: {
        roughingFeed: {
          40: 32,
          60: 32,
          80: 32,
          100: 32,
          150: 32,
          200: 32,
          250: 32,
          300: 32,
          350: 32,
          400: 29,
          450: 29,
          500: 27,
        },
        finishingFeed: {
          40: 19,
          60: 19,
          80: 19,
          100: 19,
          150: 19,
          200: 19,
          250: 19,
          300: 18,
          350: 15,
          400: 13,
          450: 12,
          500: 10.5,
        },
      },
      turns: {
        roughingTurns: {
          40: 150,
          60: 90,
          80: 75,
          100: 60,
          150: 48,
          200: 30,
          250: 30,
          300: 30,
          350: 30,
          400: 30,
          450: 30,
          500: 30,
        },
        finishingTurns: {
          40: 150,
          60: 90,
          80: 75,
          100: 60,
          150: 48,
          200: 30,
          250: 30,
          300: 30,
          350: 30,
          400: 30,
          450: 30,
          500: 30,
        },
      },
      trasitionTime: {
        500: {
          roughingTrasition: {
            40: 0.86,
            60: 0.86,
            80: 0.86,
            100: 0.86,
            150: 0.95,
            200: 0.95,
            250: 1.1,
            300: 1.1,
            350: 1.1,
            400: 1.1,
            450: 1.1,
            500: 1.1,
          },
          finishingTrasition: {
            40: 1.3,
            60: 1.3,
            80: 1.3,
            100: 1.4,
            150: 1.7,
            200: 1.7,
            250: 1.7,
            300: 1.7,
            350: 1.7,
            400: 1.7,
            450: 2,
            500: 2,
          },
        },
        2000: {
          roughingTrasition: {
            40: 1,
            60: 1,
            80: 1,
            100: 1.1,
            150: 1.2,
            200: 1.2,
            250: 1.3,
            300: 1.3,
            350: 1.3,
            400: 1.3,
            450: 1.4,
            500: 1.4,
          },
          finishingTrasition: {
            40: 1.8,
            60: 1.8,
            80: 1.8,
            100: 1.9,
            150: 2.1,
            200: 2.1,
            250: 2.2,
            300: 2.2,
            350: 2.2,
            400: 2.2,
            450: 2.5,
            500: 2.5,
          },
        },
        4000: {
          roughingTrasition: {
            40: 1.2,
            60: 1.2,
            80: 1.2,
            100: 1.3,
            150: 1.3,
            200: 1.3,
            250: 1.5,
            300: 1.5,
            350: 1.5,
            400: 1.5,
            450: 1.7,
            500: 1.7,
          },
          finishingTrasition: {
            40: 2.2,
            60: 2.2,
            80: 2.2,
            100: 2.2,
            150: 2.4,
            200: 2.6,
            250: 2.6,
            300: 2.6,
            350: 2.6,
            400: 2.6,
            450: 2.7,
            500: 2.7,
          },
        },
      },
      finishingAllowance: {
        40: 0.05,
        60: 0.06,
        80: 0.06,
        100: 0.06,
        150: 0.07,
        200: 0.07,
        250: 0.07,
        300: 0.07,
        350: 0.07,
        400: 0.07,
        450: 0.08,
        500: 0.08,
      },
    },
  },
  installRemovalTime: {
    centra_homutik: {
      1000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 5,
        50: 6,
        100: 7,
        200: 8,
        400: 9,
        800: 10,
        1500: 11,
        3000: 13,
        5000: 15,
      },
      2000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 7,
        100: 8,
        200: 9,
        400: 11,
        800: 12,
        1500: 14,
        3000: 16,
        5000: 18,
      },
      3000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 7,
        100: 8,
        200: 9,
        400: 11,
        800: 13,
        1500: 14,
        3000: 17,
        5000: 19,
      },
      5000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 7,
        100: 8,
        200: 9,
        400: 11,
        800: 15,
        1500: 17,
        3000: 19,
        5000: 21,
      },
    },
    centra_homutik_lunet: {
      1000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 7,
        100: 8,
        200: 10,
        400: 11,
        800: 13,
        1500: 14,
        3000: 16,
        5000: 17,
      },
      2000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 8,
        100: 10,
        200: 11,
        400: 13,
        800: 14,
        1500: 15,
        3000: 16,
        5000: 18,
      },
      3000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 8,
        100: 10,
        200: 12,
        400: 14,
        800: 16,
        1500: 18,
        3000: 20,
        5000: 22,
      },
      5000: {
        1: 0.5,
        5: 0.8,
        10: 1,
        20: 1.3,
        30: 6,
        50: 8,
        100: 11,
        200: 13,
        400: 16,
        800: 18,
        1500: 20,
        3000: 22,
        5000: 23,
      },
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
      s2: 1.07,
      s3: 1.2,
      s4: 1.3,
      s5: 1.5,
      s6: 1.8,
    },
    surfaceshapeFactor: {
      sf1: 1,
      sf2: 1.1,
      sf3: 1.15,
    },
    compositeFactor: {
      "6_7": {
        "Ra1.6": {
          matP: 0.95,
          matM: 1.8,
          matN: 2,
          matK: 0.85,
        },
        "Ra0.8": {
          matP: 1,
          matM: 2,
          matN: 2.5,
          matK: 0.9,
        },
        "Ra0.4": {
          matP: 1.2,
          matM: 2.4,
          matN: 3,
          matK: 1.1,
        },
      },
      "8_9": {
        "Ra1.6": {
          matP: 0.9,
          matM: 1.7,
          matN: 1.8,
          matK: 0.8,
        },
        "Ra0.8": {
          matP: 0.95,
          matM: 1.9,
          matN: 2.2,
          matK: 0.9,
        },
        "Ra0.4": {
          matP: 1.15,
          matM: 2.3,
          matN: 2.7,
          matK: 1,
        },
      },
      "10_14": {
        "Ra3.2": {
          matP: 0.7,
          matM: 1.4,
          matN: 1.6,
          matK: 0.75,
        },
        "Ra1.6": {
          matP: 0.8,
          matM: 1.6,
          matN: 1.8,
          matK: 0.8,
        },
        "Ra0.8": {
          matP: 0.9,
          matM: 1.8,
          matN: 2,
          matK: 0.85,
        },
      },
    },
  },
};

let krugloshlif_defaultstate = {
  model: "3A130",
  modelstate: "",
  maxLength: 700,
  maxDiameter: 250,
  maxWeight: 100,
  partweight: "",
  partweightstate: "",
  partlength: "1000",
  partmaterial: "matP",
  parthardness: "h1",
  partstiffness: "s1",
  partsurfaceshape: "sf1",
  numberparts: "1",
  numberpartsstate: "",
  perehods: [],

  get_Krugloshlif_TimeInstall(indper) {
    if (this.partweight > this.maxWeight) {
      return "ошибки";
    } else if (
      (this.perehods[indper][0] == "Вспомагательный переход" &&
        Object.keys(this.perehods[indper][1]).length < 1) ||
      (this.perehods[indper][0] == "Вспомагательный переход" &&
        Object.values(this.perehods[indper][1]).includes(""))
    ) {
      return "";
    } else {
      if (this.partweight === "0" || this.numberparts === "0") return 0;
      else if (this.partweight === "" || this.numberparts === "") {
        return "ошибки";
      } else {
        const range = [1, 5, 10, 20, 30, 50, 100, 200, 400, 800, 1500, 3000, 5000];
        let specifiedWeight = range.find((item) => item >= this.partweight);
        let installTime =
          dataKrugloshlif.installRemovalTime[this.perehods[indper][1].installoption][
            this.partlength
          ][specifiedWeight];
        return installTime;
      }
    }
  },

  get_Krugloshlif_MainTime(indper, indstr) {
    if (this.partweight > this.maxWeight) {
      return { Otime: "ошибки" };
    } else if (this.partweight === "" || this.numberparts === "") return { Otime: "ошибки" };
    else if (
      this.perehods[indper][1][indstr].length > this.maxLength ||
      this.perehods[indper][1][indstr].diameter > this.maxDiameter
    ) {
      return { Otime: "ошибки" };
    } else if (this.perehods[indper][0] == "Основной переход") {
      let MainTime = 0;
      let dataperehod = this.perehods[indper][1][indstr];

      if (
        Object.keys(dataperehod).includes("allowance") &&
        Object.keys(dataperehod).includes("diameter") &&
        Object.keys(dataperehod).includes("length") &&
        Object.keys(dataperehod).includes("accuracy") &&
        Object.keys(dataperehod).includes("roghness") &&
        dataperehod.allowance &&
        dataperehod.diameter &&
        dataperehod.length &&
        dataperehod.accuracy &&
        dataperehod.roghness
      ) {
        let allowance = Number(dataperehod.allowance);
        let diameter = Number(dataperehod.diameter);
        let length = Number(dataperehod.length);
        let accuracy = dataperehod.accuracy;
        let roughness = dataperehod.roghness;

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
        let lengthSurface = length <= 500 ? 500 : length <= 2000 ? 2000 : 4000; // длина обработки
        let range = [];
        if (this.model == "3A130") {
          range = [20, 30, 40, 50, 70, 90, 120, 150, 200, 250];
        } else if (this.model == "3M194") {
          range = [40, 60, 80, 100, 150, 200, 250, 300, 350, 400, 450, 500];
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
            dataKrugloshlif.machineModels[this.model].turns.roughingTurns[specifiedDiameter];
          turnsFinishing =
            dataKrugloshlif.machineModels[this.model].turns.finishingTurns[specifiedDiameter];
          longfeedRoughing =
            dataKrugloshlif.machineModels[this.model].longfeed.roughingFeed[specifiedDiameter];
          longfeedFinishing =
            dataKrugloshlif.machineModels[this.model].longfeed.finishingFeed[specifiedDiameter];
          cuttingDepthRoughing =
            dataKrugloshlif.machineModels[this.model].cuttingDepth.roughingDepth[specifiedDiameter];
          cuttingDepthFinishing =
            dataKrugloshlif.machineModels[this.model].cuttingDepth.finishingDepth[
              specifiedDiameter
            ];
          roughingTrasitionTime =
            dataKrugloshlif.machineModels[this.model].trasitionTime[lengthSurface]
              .roughingTrasition[specifiedDiameter];
          finishingTrasitionTime =
            dataKrugloshlif.machineModels[this.model].trasitionTime[lengthSurface]
              .finishingTrasition[specifiedDiameter];
          finishingAllow =
            dataKrugloshlif.machineModels[this.model].finishingAllowance[specifiedDiameter];
          factorPerebegaKruga = dataKrugloshlif.machineModels[this.model].perebegFactor;

          // factors---------------------------------------------------

          let hardnessFactor = dataKrugloshlif.correctionFactors.hardnessFactor[this.parthardness];

          let stiffnessFactor =
            dataKrugloshlif.correctionFactors.stiffnessFactor[this.partstiffness];

          let surfaceshapeFactor =
            dataKrugloshlif.correctionFactors.surfaceshapeFactor[this.partsurfaceshape];

          let compositeFactor =
            dataKrugloshlif.correctionFactors.compositeFactor[accuracy][roughness][
              this.partmaterial
            ];

          // base time calculation--------------------------------------

          let machintime =
            Math.ceil(
              (((length + length * factorPerebegaKruga) * 2 * (allowance - finishingAllow)) /
                (turnsRoughing * longfeedRoughing * cuttingDepthRoughing) +
                ((length + length * factorPerebegaKruga) * 2 * finishingAllow) /
                  (turnsFinishing * longfeedFinishing * cuttingDepthFinishing)) *
                hardnessFactor *
                stiffnessFactor *
                surfaceshapeFactor *
                compositeFactor *
                this.numberparts *
                10
            ) / 10;

          let trasitiontime = Math.ceil((roughingTrasitionTime + finishingTrasitionTime) * 10) / 10;

          MainTime = machintime + trasitiontime;

          let strrezults = {
            longfeedRoughing: longfeedRoughing,
            longfeedFinishing: longfeedFinishing,
            turnsRoughing: turnsRoughing,
            turnsFinishing: turnsFinishing,
            cuttingDepthRoughing: cuttingDepthRoughing,
            cuttingDepthFinishing: cuttingDepthFinishing,
            finishingAllow: finishingAllow,
            trasitiontime: trasitiontime,
            machintime: machintime,
            Otime: MainTime,
          };
          return strrezults;
        }
      }
    }
  },
};

// --------------------R E D U C E R ----------------------

export default function Krugloshlif_reducer(state = krugloshlif_defaultstate, action) {
  switch (action.type) {
    case "MODEL_KRUGLOSHLIF":
      if (!action.data)
        return { ...state, model: "", maxDiameter: "", maxLength: "", maxWeight: "" };
      else
        return {
          ...state,
          model: action.data,
          maxDiameter: dataKrugloshlif.machineModels[action.data].characteristics.maxD,
          maxLength: dataKrugloshlif.machineModels[action.data].characteristics.maxL,
          maxWeight: dataKrugloshlif.machineModels[action.data].characteristics.max_weight,
        };
    case "WEIGHT_KRUGLOSHLIF":
      let inpweight = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      if (!action.data) return { ...state, partweight: inpweight, partweightstate: false };
      else return { ...state, partweight: inpweight, partweightstate: true };
    case "GENERAL_LENGTH_KRUGLOSHLIF":
      return { ...state, partlength: action.data };
    case "MATERIAL_KRUGLOSHLIF":
      return { ...state, partmaterial: action.data };
    case "HARDNESS_KRUGLOSHLIF":
      return { ...state, parthardness: action.data };
    case "STIFFNESS_KRUGLOSHLIF":
      return { ...state, partstiffness: action.data };
    case "SURFACESHAPE_KRUGLOSHLIF":
      return { ...state, partsurfaceshape: action.data };
    case "NUMBERPARTS_KRUGLOSHLIF":
      let inpnumparts = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      if (!action.data) return { ...state, numberparts: inpnumparts, numberpartsstate: false };
      else return { ...state, numberparts: inpnumparts, numberpartsstate: true };

    // ----------------------------Переходы-------------------------

    case "ADDPEREHOD_KRUGLOSHLIF":
      if (!state.partweight) state.partweightstate = false;
      if (!state.model) state.modelstate = false;
      if (!state.numberparts) state.numberpartsstate = false;
      if (state.partweight && state.model && state.numberparts) {
        return {
          ...state,
          perehods: [...state.perehods, action.data],
        };
      }
    case "DELPEREHOD_KRUGLOSHLIF":
      return {
        ...state,
        perehods: state.perehods.filter((item, index) => {
          return !action.data.includes(String(index));
        }),
      };
    case "DATAVSPPEREHODA_KRUGLOSHLIF":
      return {
        ...state,
        perehods: state.perehods.map((item, index, arr) => {
          if (index == action.data[0]) {
            if (!item[1]) {
              return item.concat({ [action.data[1]]: action.data[2], Vtime: 0 });
            } else {
              return item.map((el, i, arr) => {
                if (i == 1) {
                  return {
                    ...arr[i],
                    ...{ [action.data[1]]: action.data[2], Vtime: " " },
                  };
                } else return el;
              });
            }
          } else return item;
        }),
      };
    case "ADDSTRPEREHODA_KRUGLOSHLIF":
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
    case "DELSTRPEREHODA_KRUGLOSHLIF":
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
    case "DATAOSNPEREHODA_KRUGLOSHLIF":
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

    case "CALCULATIONTIME_KRUGLOSHLIF": {
      return {
        ...state,
        perehods: state.perehods.map((item, index) => {
          if (item[0] == "Вспомагательный переход") {
            return item.map((el, i) => {
              if (i == 1) {
                return { ...el, ...{ Vtime: state.get_Krugloshlif_TimeInstall(index) } };
              } else return el;
            });
          } else {
            return item.map((el, i) => {
              if (i == 1) {
                return el.map((it, ind) => {
                  let calculationdata = state.get_Krugloshlif_MainTime(index, ind);
                  if (calculationdata) {
                    return {
                      ...it,
                      ...calculationdata,
                    };
                  } else
                    return {
                      ...it,
                      ...{
                        longfeedRoughing: "",
                        longfeedFinishing: "",
                        turnsRoughing: "",
                        turnsFinishing: "",
                        cuttingDepthRoughing: "",
                        cuttingDepthFinishing: "",
                        finishingAllow: "",
                        trasitiontime: "",
                        machintime: "",
                        Otime: "",
                      },
                    };
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
