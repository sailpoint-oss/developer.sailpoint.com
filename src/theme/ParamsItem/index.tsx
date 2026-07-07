import React, { useEffect, useState } from "react";

import { translate } from "@docusaurus/Translate";
import { Example } from "@theme/Example";
import Markdown from "@theme/Markdown";
/* eslint-disable import/no-extraneous-dependencies*/
import { OPENAPI_SCHEMA_ITEM } from "@theme/translationIds";
import clsx from "clsx";

import { getQualifierMessage, getSchemaName } from "docusaurus-theme-openapi-docs/lib/markdown/schema";
import { guard } from "docusaurus-theme-openapi-docs/lib/markdown/utils";

export interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

export interface Props {
  className: string;
  param: {
    description: string;
    example: any;
    examples: Record<string, ExampleObject> | undefined;
    name: string;
    required: boolean;
    deprecated: boolean;
    schema: any;
    enumDescriptions?: [string, string][];
  };
}

const getEnumDescriptionMarkdown = (enumDescriptions?: [string, string][]) => {
  if (enumDescriptions?.length) {
    const enumValue = translate({
      id: OPENAPI_SCHEMA_ITEM.ENUM_VALUE,
      message: "Enum Value",
    });
    const description = translate({
      id: OPENAPI_SCHEMA_ITEM.ENUM_DESCRIPTION,
      message: "Description",
    });
    return `| ${enumValue} | ${description} |
| ---- | ----- |
${enumDescriptions
  .map((desc) => {
    return `| ${desc[0]} | ${desc[1]} | `.replaceAll("\n", "<br/>");
  })
  .join("\n")}
    `;
  }

  return "";
};

function camelToKebab(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Za-z])(\d)/g, '$1-$2')
    .toLowerCase();
}

function camelToTitleCase(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
}

function RenderSailPointResource({operationId}: {operationId: string}) {
  const [resourceLink, setResourceLink] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAvailableUrl() {
      const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';
      const base = isLocal
        ? `${window.location.origin}/docs/api/${camelToKebab(operationId)}`
        : `https://developer.sailpoint.com/docs/api/${camelToKebab(operationId)}`;

      try {
        const response = await fetch(base, {method: 'HEAD'});
        if (response.ok) {
          setResourceLink(base);
        }
      } catch (error) {
        console.error(`Error checking URL: ${base}`, error);
      }
    }
    fetchAvailableUrl();
  }, [operationId]);

  if (!resourceLink) {
    return null;
  }
  return (
    <>
      <text>Found in </text>
      <a
        href={resourceLink}
        id="operationIdLink"
        target="_blank"
        rel="noopener noreferrer"
        style={{color: 'var(--ifm-color-primary)'}}>
        {camelToTitleCase(operationId)}
      </a>
    </>
  );
}

function ParamsItem({ param, ...rest }: Props) {
  const { description, name, required, deprecated, enumDescriptions } = param;

  let schema = param.schema;
  let defaultValue: string | undefined;

  let examples = param.examples ?? (schema?.examples as any[] | undefined);
  let example = param.example ?? schema?.example;

  if (!schema) {
    schema = { type: "any" };
  }

  if (!schema.type) {
    schema.type = "any";
  }

  if (schema) {
    if (schema.items) {
      defaultValue = schema.items.default;
    } else {
      defaultValue = schema.default;
    }
  }

  const renderSchemaName = guard(schema, (schema) => (
    <span className="openapi-schema__type"> {getSchemaName(schema)}</span>
  ));

  const renderSchemaRequired = guard(required, () => (
    <span className="openapi-schema__required">
      {translate({ id: OPENAPI_SCHEMA_ITEM.REQUIRED, message: "required" })}
    </span>
  ));

  const renderDeprecated = guard(deprecated, () => (
    <span className="openapi-schema__deprecated">
      {translate({ id: OPENAPI_SCHEMA_ITEM.DEPRECATED, message: "deprecated" })}
    </span>
  ));

  const renderQualifier = guard(getQualifierMessage(schema), (qualifier) => (
    <Markdown>{qualifier}</Markdown>
  ));

  const renderDescription = guard(description, (description) => (
    <Markdown>{description}</Markdown>
  ));

  const renderEnumDescriptions = guard(
    getEnumDescriptionMarkdown(enumDescriptions),
    (value) => {
      return (
        <div style={{ marginTop: ".5rem" }}>
          <Markdown>{value}</Markdown>
        </div>
      );
    }
  );

  function renderDefaultValue() {
    if (defaultValue !== undefined) {
      if (typeof defaultValue === "string") {
        return (
          <div>
            <strong>
              {translate({
                id: OPENAPI_SCHEMA_ITEM.DEFAULT_VALUE,
                message: "Default value:",
              })}{" "}
            </strong>
            <span>
              <code>{defaultValue}</code>
            </span>
          </div>
        );
      }
      return (
        <div>
          <strong>
            {translate({
              id: OPENAPI_SCHEMA_ITEM.DEFAULT_VALUE,
              message: "Default value:",
            })}{" "}
          </strong>
          <span>
            <code>{JSON.stringify(defaultValue)}</code>
          </span>
        </div>
      );
    }
    return undefined;
  }

  return (
    <div className="openapi-params__list-item">
      <span className="openapi-schema__container">
        <strong
          className={clsx("openapi-schema__property", {
            "openapi-schema__strikethrough": deprecated,
          })}
        >
          {name}
        </strong>
        {renderSchemaName}
        {(required || deprecated) && (
          <span className="openapi-schema__divider"></span>
        )}
        {renderSchemaRequired}
        {renderDeprecated}
      </span>
      {renderQualifier}
      {renderDescription}
      {renderEnumDescriptions}
      {(param as any)['x-sailpoint-resource-operation-id'] && (
        <RenderSailPointResource operationId={(param as any)['x-sailpoint-resource-operation-id']} />
      )}
      {renderDefaultValue()}
      <Example example={example} />
      <Example examples={examples} />
    </div>
  );
}

export default ParamsItem;
