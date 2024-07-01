"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthDataKeys = void 0;
function getAuthDataKeys(security) {
  // Bearer Auth
  if (security.type === "http" && security.scheme === "bearer") {
    return ["token"];
  }
  if (security.type === "oauth2") {
    return ["token"];
  }
  // Basic Auth
  if (security.type === "http" && security.scheme === "basic") {
    return ["username", "password"];
  }
  // API Auth
  if (security.type === "apiKey") {
    return ["apiKey"];
  }
  // none
  return [];
}
exports.getAuthDataKeys = getAuthDataKeys;
