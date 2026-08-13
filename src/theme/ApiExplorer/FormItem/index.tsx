import React from "react";

import { translate } from "@docusaurus/Translate";
import clsx from "clsx";

export interface Props {
  label?: string;
  type?: string;
  required?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
}

function FormItem({ label, type, required, children, className }: Props) {
  return (
    <div className={clsx("openapi-explorer__form-item", className)}>
      {label && (
        <label className="openapi-explorer__form-item-label">{label}</label>
      )}
      {type && <span style={{ opacity: 0.6 }}> — {type}</span>}
      {required && (
        <span className="openapi-schema__required">
          {translate({ id: "theme.openapi.schemaItem.required", message: "required" })}
        </span>
      )}
      <div>{children}</div>
    </div>
  );
}

export default FormItem;
