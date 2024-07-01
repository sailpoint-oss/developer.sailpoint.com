"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function FormSelect({ value, options, onChange }) {
  if (!Array.isArray(options) || options.length === 0) {
    return null;
  }
  return react_1.default.createElement(
    "select",
    {
      className: "openapi-explorer__select-input",
      value: value,
      onChange: onChange,
    },
    options.map((option) => {
      return react_1.default.createElement(
        "option",
        { key: option, value: option },
        option
      );
    })
  );
}
exports.default = FormSelect;
