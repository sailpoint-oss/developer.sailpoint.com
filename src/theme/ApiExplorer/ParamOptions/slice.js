"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setParam = exports.slice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {};
exports.slice = (0, toolkit_1.createSlice)({
  name: "params",
  initialState,
  reducers: {
    setParam: (state, action) => {
      const newParam = action.payload;
      const paramGroup = state[action.payload.in];
      const index = paramGroup.findIndex((p) => p.name === newParam.name);
      paramGroup[index] = newParam;
    },
  },
});
exports.setParam = exports.slice.actions.setParam;
exports.default = exports.slice.reducer;
