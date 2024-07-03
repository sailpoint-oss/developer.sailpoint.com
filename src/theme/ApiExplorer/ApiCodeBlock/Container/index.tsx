import React, { ComponentProps } from "react";

import { ThemeClassNames, usePrismTheme } from "@docusaurus/theme-common";
import { getPrismCssVariables } from "@docusaurus/theme-common/internal";
import clsx from "clsx";

export default function CodeBlockContainer<T extends "div" | "pre">({
  as: As,
  ...props
}: { as: T } & ComponentProps<T>): React.JSX.Element {
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  return (
    <As
      // Polymorphic components are hard to type, without `oneOf` generics
      {...(props as any)}
      style={prismCssVariables}
      className={clsx(
        "openapi-explorer__code-block-container",
        props.className,
        ThemeClassNames.common.codeBlock
      )}
    />
  );
}
