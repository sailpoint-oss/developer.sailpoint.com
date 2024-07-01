"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function FloatingButton({ label, onClick, children }) {
  return react_1.default.createElement(
    "div",
    { tabIndex: 0, className: "openapi-explorer__floating-btn" },
    label &&
      react_1.default.createElement(
        "button",
        { tabIndex: 0, onClick: onClick },
        label
      ),
    children
  );
}
exports.default = FloatingButton;
