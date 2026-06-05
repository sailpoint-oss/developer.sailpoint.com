/* Copyright (c) 2026. SailPoint Technologies, Inc. All rights reserved. */

/**
 * Client-side XPath evaluation service.
 *
 * This is a TypeScript port of the XML response parsing logic used by the
 * Web Services connector (previously hosted as an AWS Lambda). It evaluates
 * a root path against an XML document to produce a node list, then evaluates
 * one or more attribute-mapping XPath expressions against each node to build
 * resource objects — mirroring how the connector parses XML responses.
 *
 * It runs entirely in the browser. `@xmldom/xmldom` and `xpath` are pure
 * JavaScript (no reliance on `window`/`document`), so this module is also
 * safe to import during Docusaurus server-side rendering.
 */

import {DOMParser, MIME_TYPE, onErrorStopParsing} from '@xmldom/xmldom';
import * as xpath from 'xpath';

/** A single parsed resource: attribute-mapping name → extracted value(s). */
export type XPathResource = Record<string, string | string[]>;

/** Attribute-mapping name → XPath expression (relative to each root node). */
export type AttributeMappings = Record<string, string>;

/** Namespace prefix → URI. */
export type NamespaceMappings = Record<string, string>;

/** Distinguishes XML parse failures from XPath evaluation failures. */
export class XPathEvaluationError extends Error {
  constructor(
    message: string,
    public readonly kind: 'xml-parse' | 'xpath',
  ) {
    super(message);
    this.name = 'XPathEvaluationError';
  }
}

const DEFAULT_ROOT_PATH = '/';
const NS_TEMP_PREFIX = 'tempns';
// Matches xmlns and xmlns:prefix declarations anywhere in the raw document
// text, capturing the prefix (group 1) and URI (group 2).
const REGEX_XMLNS_ATTRS_GROUP = /xmlns:?(\w*)="(\S*)"/g;

/**
 * Extract every namespace declaration from the raw XML text. Default
 * (unprefixed) namespaces are assigned synthetic `tempns1`, `tempns2`, ...
 * prefixes so they remain addressable in XPath 1.0, which has no concept of
 * a default namespace in expressions.
 */
export function extractNamespaces(xmlContent: string): NamespaceMappings {
  const namespaces: NamespaceMappings = {};
  let tempPrefixCount = 0;
  if (xmlContent) {
    for (const match of xmlContent.matchAll(REGEX_XMLNS_ATTRS_GROUP)) {
      let prefix = match[1];
      const uri = match[2];
      if (!prefix) {
        prefix = NS_TEMP_PREFIX + ++tempPrefixCount;
      }
      namespaces[prefix] = uri;
    }
  }
  return namespaces;
}

function normalizeRootPath(rootPath: string | null | undefined): string {
  if (!rootPath) {
    console.log('XPathService: Root path not configured. Setting to default.');
    return DEFAULT_ROOT_PATH;
  }
  if (rootPath === '//') {
    console.log("XPathService: Root path found '//'. Overriding to '/'.");
    return DEFAULT_ROOT_PATH;
  }
  return rootPath;
}

/**
 * Evaluate one attribute-mapping expression against one root node and store
 * the result on the resource object. Errors here are logged and swallowed so
 * that a single bad mapping does not prevent the remaining mappings from
 * being extracted — matching the connector's lenient per-attribute behavior.
 */
function prepareResource(
  resource: XPathResource,
  node: Node,
  path: string,
  attributeMappingKey: string,
  select: xpath.XPathSelect,
): void {
  try {
    const selected = select(path, node);

    if (Array.isArray(selected)) {
      if (selected.length > 1) {
        const childValues = selected.map((child) => child.textContent ?? '');
        resource[attributeMappingKey] = childValues;
        // Salesforce SOAP responses repeat the <sf:Id> element twice with
        // identical values; collapse the duplicate to a single value.
        if (path === 'sf:Id' && childValues[0] === childValues[1]) {
          resource[attributeMappingKey] = childValues[0];
        }
      } else if (selected.length === 1) {
        resource[attributeMappingKey] = selected[0].textContent ?? '';
      }
      // Zero matches: attribute intentionally omitted from the resource.
    } else if (selected !== undefined && selected !== null) {
      // Expressions like string(...), count(...), or boolean(...) return a
      // primitive rather than a node list.
      resource[attributeMappingKey] = String(selected);
    }
  } catch (error) {
    console.log(
      `XPathService: Error parsing value for attribute ${attributeMappingKey} using XPath ${path}:`,
      error,
    );
  }
}

/**
 * Parse an XML document and extract resource objects.
 *
 * @param rawXml            XML document as a plain (not base64) string.
 * @param rootPath          XPath selecting the node(s) each resource is built
 *                          from, e.g. `//xhr:Response_Data/xhr:Employee`.
 * @param attributeMappings Attribute name → XPath relative to each root node.
 * @param namespaceMappings Optional prefix → URI map. Namespaces declared in
 *                          the document itself are always extracted and used;
 *                          entries provided here take precedence on conflict.
 * @returns One resource object per node matched by `rootPath`.
 * @throws XPathEvaluationError on malformed XML (`kind: 'xml-parse'`) or an
 *         invalid root path expression (`kind: 'xpath'`).
 */
export function parseResources(
  rawXml: string,
  rootPath: string,
  attributeMappings: AttributeMappings,
  namespaceMappings: NamespaceMappings = {},
): XPathResource[] {
  const resources: XPathResource[] = [];
  if (!rawXml) {
    console.log(
      'XPathService: XML response is empty. Skipping resource parsing.',
    );
    return resources;
  }

  // Namespaces declared in the document are always available to expressions;
  // caller-supplied mappings are merged on top so users can add or override
  // prefixes.
  const namespaces: NamespaceMappings = {
    ...extractNamespaces(rawXml),
    ...namespaceMappings,
  };

  let doc;
  try {
    // onErrorStopParsing makes the parser strict: malformed XML throws
    // instead of producing a best-effort partial document.
    const parser = new DOMParser({onError: onErrorStopParsing});
    doc = parser.parseFromString(rawXml, MIME_TYPE.XML_TEXT);
  } catch (error) {
    throw new XPathEvaluationError(
      `XML parse error: ${error instanceof Error ? error.message : String(error)}`,
      'xml-parse',
    );
  }

  const select = xpath.useNamespaces(namespaces);

  let nodes: xpath.SelectReturnType;
  try {
    // @xmldom/xmldom nodes implement the W3C DOM interfaces the xpath
    // package operates on, but carry their own type declarations; the cast
    // bridges the two declaration sets.
    nodes = select(normalizeRootPath(rootPath), doc as unknown as Node);
  } catch (error) {
    throw new XPathEvaluationError(
      `Invalid root path: ${error instanceof Error ? error.message : String(error)}`,
      'xpath',
    );
  }

  if (!Array.isArray(nodes) || nodes.length === 0) {
    console.log(
      'XPathService: Unable to find resource objects for provided root path',
    );
    return resources;
  }

  for (const node of nodes) {
    const resource: XPathResource = {};
    let contextNode: Node | null = null;

    if (node.nodeType === node.ELEMENT_NODE) {
      contextNode = node;
    } else if (node.nodeType === node.DOCUMENT_NODE) {
      contextNode = (node as Document).documentElement;
    }

    if (contextNode) {
      for (const [attributeMappingKey, path] of Object.entries(
        attributeMappings,
      )) {
        prepareResource(
          resource,
          contextNode,
          path,
          attributeMappingKey,
          select,
        );
      }
    }
    resources.push(resource);
  }
  return resources;
}

/**
 * Convenience wrapper for the XPath Evaluator tool: evaluates a single XPath
 * expression against each node matched by `rootPath`.
 *
 * Unlike the multi-mapping `parseResources` (which is lenient per attribute,
 * matching the connector), a syntactically invalid query here throws an
 * XPathEvaluationError so the tool can show the user an actionable message.
 */
export function evaluateXPath(
  xPathQuery: string,
  rootPath: string,
  xmlData: string,
  namespaceMappings: NamespaceMappings = {},
): XPathResource[] {
  try {
    // xpath.parse() is a documented public API of the xpath package, but is
    // missing from its bundled type declarations (as of 0.0.34), hence the
    // narrow cast.
    (xpath as unknown as {parse: (expr: string) => unknown}).parse(xPathQuery);
  } catch (error) {
    throw new XPathEvaluationError(
      `Invalid XPath query: ${error instanceof Error ? error.message : String(error)}`,
      'xpath',
    );
  }
  return parseResources(
    xmlData,
    rootPath,
    {'XPath Query Result': xPathQuery},
    namespaceMappings,
  );
}