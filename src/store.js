import React from "react";
import { createStore, combineReducers } from "redux";
import Ploskoshlif_reducer from "./stores/Ploskoshlif_reducer";
import Vnutrishlif_reducer from "./stores/Vnutrishlif_reducer";
import Krugloshlif_reducer from "./stores/Krugloshlif_reducer";
import Tokarnovintorezn_reducer from "./stores/Tokarnovintorezn_reducer";

let general_defaultstate = {
  typeoperation: "",
};

function general_reducer(state = general_defaultstate, action) {
  switch (action.type) {
    case "TYPEOPERATION":
      return { ...state, typeoperation: action.data };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  general: general_reducer, // Секция состояния общая
  ploskoshlif: Ploskoshlif_reducer, // Секция для плоского шлифования
  vnutrishlif: Vnutrishlif_reducer, // Секция для внутреннего шлифования
  krugloshlif: Krugloshlif_reducer, // Секция для круглого шлифования
  tokarnovintorezn: Tokarnovintorezn_reducer, // Секция токарной обработки
});

const store = createStore(rootReducer);

export { store };
