"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAccept = exports.slice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {};
exports.slice = (0, toolkit_1.createSlice)({
  name: "accept",
  initialState,
  reducers: {
    setAccept: (state, action) => {
      state.value = action.payload;
    },
  },
});
exports.setAccept = exports.slice.actions.setAccept;
exports.default = exports.slice.reducer;
