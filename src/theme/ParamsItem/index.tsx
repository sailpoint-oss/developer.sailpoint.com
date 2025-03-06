import React from "react";

import Markdown from "@theme/Markdown";
import SchemaTabs from "@theme/SchemaTabs";
import TabItem from "@theme/TabItem";
/* eslint-disable import/no-extraneous-dependencies*/
import clsx from "clsx";
import { SchemaObject } from "docusaurus-theme-openapi-docs/src/types";
import { ReactNode } from "react";
import { useState, useEffect } from "react";


function render(children: ReactNode) {
  if (Array.isArray(children)) {
    return children.filter((c) => c !== undefined).join("");
  }
  return children ?? "";
}

export function guard<T>(
  value: T | undefined | string,
  cb: (value: T) => ReactNode
) {
  if (!!value || value === 0) {
    const children = cb(value as T);
    return render(children);
  }
  return "";
}

export function toString(value: any): string | undefined {
  // Return as-is if already string
  if (typeof value === "string") {
    return value;
  }
  // Return undefined if null or undefined
  if (value == null) {
    return undefined;
  }
  // Return formatted array if Array
  if (Array.isArray(value)) {
    return `[${value.join(", ")}]`;
  }
  // Coerce to string in all other cases,
  return value + "";
}

function prettyName(schema, circular?: boolean) {
  if (schema.format) {
    return schema.format;
  }

  if (schema.allOf) {
    if (typeof schema.allOf[0] === "string") {
      // @ts-ignore
      if (schema.allOf[0].includes("circular")) {
        return schema.allOf[0];
      }
    }
    return "object";
  }

  if (schema.oneOf) {
    return "object";
  }

  if (schema.anyOf) {
    return "object";
  }

  if (schema.type === "object") {
    return schema.xml?.name ?? schema.type;
    // return schema.type;
  }

  if (schema.type === "array") {
    return schema.xml?.name ?? schema.type;
    // return schema.type;
  }

  return schema.title ?? schema.type;
}

function getSchemaName(
  schema: SchemaObject,
  circular?: boolean
): string {
  if (schema.items) {
    return prettyName(schema.items, circular) + "[]";
  }

  return prettyName(schema, circular) ?? "";
}

function getQualifierMessage(schema?: SchemaObject): string | undefined {
  // TODO:
  // - uniqueItems
  // - maxProperties
  // - minProperties
  // - multipleOf
  if (!schema) {
    return undefined;
  }

  if (
    schema.items &&
    schema.minItems === undefined &&
    schema.maxItems === undefined
  ) {
    return getQualifierMessage(schema.items);
  }

  let message = "**Possible values:** ";

  let qualifierGroups = [];

  if (schema.items && schema.items.enum) {
    if (schema.items.enum) {
      qualifierGroups.push(
        `[${schema.items.enum.map((e) => `\`${e}\``).join(", ")}]`
      );
    }
  }

  if (schema.minLength || schema.maxLength) {
    let lengthQualifier = "";
    let minLength;
    let maxLength;
    if (schema.minLength && schema.minLength > 1) {
      minLength = `\`>= ${schema.minLength} characters\``;
    }
    if (schema.minLength && schema.minLength === 1) {
      minLength = `\`non-empty\``;
    }
    if (schema.maxLength) {
      maxLength = `\`<= ${schema.maxLength} characters\``;
    }

    if (minLength && !maxLength) {
      lengthQualifier += minLength;
    }
    if (maxLength && !minLength) {
      lengthQualifier += maxLength;
    }
    if (minLength && maxLength) {
      lengthQualifier += `${minLength} and ${maxLength}`;
    }

    qualifierGroups.push(lengthQualifier);
  }

  if (
    schema.minimum ||
    schema.maximum ||
    typeof schema.exclusiveMinimum === "number" ||
    typeof schema.exclusiveMaximum === "number"
  ) {
    let minmaxQualifier = "";
    let minimum;
    let maximum;
    if (typeof schema.exclusiveMinimum === "number") {
      minimum = `\`> ${schema.exclusiveMinimum}\``;
    } else if (schema.minimum && !schema.exclusiveMinimum) {
      minimum = `\`>= ${schema.minimum}\``;
    } else if (schema.minimum && schema.exclusiveMinimum === true) {
      minimum = `\`> ${schema.minimum}\``;
    }
    if (typeof schema.exclusiveMaximum === "number") {
      maximum = `\`< ${schema.exclusiveMaximum}\``;
    } else if (schema.maximum && !schema.exclusiveMaximum) {
      maximum = `\`<= ${schema.maximum}\``;
    } else if (schema.maximum && schema.exclusiveMaximum === true) {
      maximum = `\`< ${schema.maximum}\``;
    }

    if (minimum && !maximum) {
      minmaxQualifier += minimum;
    }
    if (maximum && !minimum) {
      minmaxQualifier += maximum;
    }
    if (minimum && maximum) {
      minmaxQualifier += `${minimum} and ${maximum}`;
    }

    qualifierGroups.push(minmaxQualifier);
  }

  if (schema.pattern) {
    qualifierGroups.push(
      `Value must match regular expression \`${schema.pattern}\``
    );
  }

  // Check if discriminator mapping
  const discriminator = schema as any;
  if (discriminator.mapping) {
    const values = Object.keys(discriminator.mapping);
    qualifierGroups.push(`[${values.map((e) => `\`${e}\``).join(", ")}]`);
  }

  if (schema.enum) {
    qualifierGroups.push(`[${schema.enum.map((e) => `\`${e}\``).join(", ")}]`);
  }

  if (schema.minItems) {
    qualifierGroups.push(`\`>= ${schema.minItems}\``);
  }

  if (schema.maxItems) {
    qualifierGroups.push(`\`<= ${schema.maxItems}\``);
  }

  if (qualifierGroups.length === 0) {
    return undefined;
  }

  return message + qualifierGroups.join(", ");
}

interface Map<T> {
  [key: string]: T;
}

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
    examples: Map<ExampleObject>;
    name: string;
    required: boolean;
    deprecated: boolean;
    schema: any;
    enumDescriptions?: [string, string][];
  };
}

const getEnumDescriptionMarkdown = (enumDescriptions?: [string, string][]) => {
  if (enumDescriptions?.length) {
    return `| Enum Value | Description |
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

function ParamsItem({ param, ...rest }: Props) {
  const {
    description,
    example,
    examples,
    name,
    required,
    deprecated,
    enumDescriptions,
  } = param;

  let schema = param.schema;
  let defaultValue: string | undefined;

  if (!schema || !schema?.type) {
    schema = { type: "any" };
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
    <span className="openapi-schema__required">required</span>
  ));

  const renderDeprecated = guard(deprecated, () => (
    <span className="openapi-schema__deprecated">deprecated</span>
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
            <strong>Default value: </strong>
            <span>
              <code>{defaultValue}</code>
            </span>
          </div>
        );
      }
      return (
        <div>
          <strong>Default value: </strong>
          <span>
            <code>{JSON.stringify(defaultValue)}</code>
          </span>
        </div>
      );
    }
    return undefined;
  }

  const renderExample = guard(toString(example), (example) => (
    <div>
      <strong>Example: </strong>
      {example}
    </div>
  ));

  const renderExamples = guard(examples, (examples) => {
    const exampleEntries = Object.entries(examples);
    return (
      <>
        <strong>Examples:</strong>
        <SchemaTabs>
          {exampleEntries.map(([exampleName, exampleProperties]) => (
            // @ts-ignore
            <TabItem value={exampleName} label={exampleName}>
              {exampleProperties.summary && <p>{exampleProperties.summary}</p>}
              {exampleProperties.description && (
                <p>
                  <strong>Description: </strong>
                  <span>{exampleProperties.description}</span>
                </p>
              )}
              <p>
                <strong>Example: </strong>
                <code>{exampleProperties.value}</code>
              </p>
            </TabItem>
          ))}
        </SchemaTabs>
      </>
    );
  });

  function camelToKebab(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  async function checkFirstAvailableUrl(urls: string[]): Promise<string | null> {
    for (const url of urls) {
      try {
        const response = await fetch(url, { method: "HEAD" });
        if (response.ok) {
          return url;
        }
      } catch (error) {
        console.error(`Error checking URL: ${url}`, error);
      }
    }
    return null;
  }
  

  function renderSailPointResource() {
    if (param["x-sailpoint-resource-operation-id"]) {
      return <RenderSailPointResource operationId={param["x-sailpoint-resource-operation-id"]} />;
    }
  }

  function RenderSailPointResource({ operationId }: { operationId: string }) {
    const [resourceLink, setResourceLink] = useState<string | null>(null);
  
    useEffect(() => {
      async function fetchAvailableUrl() {
        const baseUrls = [
          `https://developer.sailpoint.com/docs/api/v2024/${camelToKebab(operationId)}`,
          `https://developer.sailpoint.com/docs/api/v3/${camelToKebab(operationId)}`,
          `https://developer.sailpoint.com/docs/api/beta/${camelToKebab(operationId)}`,
        ];
        const availableUrl = await checkFirstAvailableUrl(baseUrls);
        setResourceLink(availableUrl);
      }
  
      fetchAvailableUrl();
    }, [operationId]);
  
    if (resourceLink) {
      return (
        <>
          <strong>Source API: </strong>
          <a href={resourceLink} id="operationIdLink" target="_blank" rel="noopener noreferrer"  style={{ color: 'var(--ifm-color-primary)' }}>
            {operationId}
          </a>
        </>
      );
    }
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
      {renderDefaultValue()}
      {renderExample}
      {renderExamples}
      {renderSailPointResource()}
    </div>
  );
}

export default ParamsItem;
