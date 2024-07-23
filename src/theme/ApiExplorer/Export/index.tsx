import React from "react";

import fileSaver from "file-saver";

const saveFile = (url: string) => {
  let fileName;
  if (url.endsWith("json") || url.endsWith("yaml") || url.endsWith("yml")) {
    fileName = url.substring(url.lastIndexOf("/") + 1);
  }
  fileSaver.saveAs(url, fileName ? fileName : "openapi.txt");
};

function Export({ url, proxy }: any) {
  return (
    <div
      style={{ float: "right" }}
      className="dropdown dropdown--hoverable dropdown--right"
    >
      <button className="export-button button button--sm button--secondary">
        Export
      </button>
      <ul className="export-dropdown dropdown__menu">
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              saveFile(`${url}`);
            }}
            className="dropdown__link"
            href={`${url}`}
          >
            OpenAPI Spec
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Export;
