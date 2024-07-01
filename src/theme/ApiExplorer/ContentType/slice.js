"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContentType = exports.slice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {};
exports.slice = (0, toolkit_1.createSlice)({
  name: "contentType",
  initialState,
  reducers: {
    setContentType: (state, action) => {
      state.value = action.payload;
    },
  },
});
exports.setContentType = exports.slice.actions.setContentType;
exports.default = exports.slice.reducer;
