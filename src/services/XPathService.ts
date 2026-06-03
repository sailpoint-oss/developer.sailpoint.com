/* Copyright (c) 2023. SailPoint Technologies, Inc. All rights reserved. */

import { DOMParserImpl as DOMParser, NodeImpl as NodeType } from 'xmldom-ts';
import * as xpath from 'xpath-ts';

export type AttributeMappings = Map<string, string>;
export type NamespaceMappings = Map<string, string>;

export type XPathResource = Map<string, string | string[]>;

export interface XPathResult {
  resources: XPathResource[];
  error?: string;
}

class Resource extends Map<string, string | string[]> {}

const NS_TEMP_PREFIX = 'tempns';
const REGEX_XMLNS_ATTRS = 'xmlns[:]?[\\S]*"';
const REGEX_XMLNS_ATTRS_GROUP = 'xmlns[:]?([\\w]*)="([\\S]*)"';
const DEFAULT_PLACEHOLDER = '/';

function extractNamespaces(xmlContent: string): NamespaceMappings {
  const namespaces = new Map<string, string>();
  let tempPrefixCount = 0;
  const matcher = xmlContent.match(new RegExp(REGEX_XMLNS_ATTRS, 'g'));
  if (matcher) {
    for (const match of matcher) {
      for (const match1 of match.matchAll(new RegExp(REGEX_XMLNS_ATTRS_GROUP, 'g'))) {
        let prefix = match1[1];
        const uri = match1[2];
        if (!prefix) {
          prefix = NS_TEMP_PREFIX + ++tempPrefixCount;
        }
        namespaces.set(prefix, uri);
      }
    }
  }
  return namespaces;
}

function prepareRO(
  resourceObject: Resource,
  node: Node,
  path: string,
  attributeMappingKey: string,
): void {
  try {
    const childNodes = xpath.select(path, node as any) as any[];
    if (childNodes.length > 1) {
      const childValues = childNodes.map((n: any) => n.textContent as string);
      resourceObject.set(attributeMappingKey, childValues);
      if ('sf:Id' === path && childValues[0] === childValues[1]) {
        resourceObject.set(attributeMappingKey, childValues[0]);
      }
    } else if (childNodes.length === 1) {
      resourceObject.set(attributeMappingKey, childNodes[0].textContent as string);
    }
  } catch {
    try {
      const value = xpath.evaluate(path, node as any);
      resourceObject.set(attributeMappingKey, String(value));
    } catch (err) {
      console.warn('Error parsing XML resource object for XPath:', err);
    }
  }
}

function extractROForAttributeMappings(
  attributeMappings: AttributeMappings,
  resourceObject: Resource,
  node: Node,
): void {
  attributeMappings.forEach((path, key) => {
    prepareRO(resourceObject, node, path, key);
  });
}

function getResourceObjects(
  attributeMappings: AttributeMappings | null,
  nodeList: any[],
): Resource[] {
  const resources: Resource[] = [];
  if (!nodeList || nodeList.length === 0) {
    return resources;
  }

  for (let i = 0; i < nodeList.length; i++) {
    const resourceObject = new Resource();
    let node = nodeList[i];

    if (NodeType.ELEMENT_NODE === node?.nodeType) {
      if (attributeMappings) {
        extractROForAttributeMappings(attributeMappings, resourceObject, node);
      }
    } else if (node?.nodeType === NodeType.DOCUMENT_NODE) {
      if (attributeMappings) {
        node = nodeList[i].documentElement;
        extractROForAttributeMappings(attributeMappings, resourceObject, node);
      }
    }
    resources.push(resourceObject);
  }
  return resources;
}

/**
 * Serializes the Resource[] result (Maps, arrays, primitives) to a JSON string.
 * JSON.stringify doesn't handle Maps, so we walk the structure manually.
 */
export function serializeResources(data: unknown): string {
  if (Array.isArray(data)) {
    return `[${data.map(serializeResources).join(',')}]`;
  }
  if (data instanceof Map) {
    const entries = Array.from(data.entries()).map(
      ([k, v]) => `${JSON.stringify(k)}:${serializeResources(v)}`,
    );
    return `{${entries.join(',')}}`;
  }
  return JSON.stringify(data);
}

/**
 * Evaluates an XPath expression against raw XML and returns matched resources.
 *
 * @param rawXml         Raw XML string (not base64).
 * @param rootPath       XPath expression selecting the root resource nodes.
 * @param attributeMappings  Map of { fieldName -> xpathExpression } to extract per node.
 * @param namespaceMappings  Optional map of { prefix -> uri }. Auto-detected if empty.
 */
export function evaluateXPath(
  rawXml: string,
  rootPath: string,
  attributeMappings: AttributeMappings,
  namespaceMappings: NamespaceMappings,
): XPathResult {
  if (!rawXml.trim()) {
    return { resources: [], error: 'XML input is empty.' };
  }

  let resolvedRoot = rootPath || DEFAULT_PLACEHOLDER;
  if (resolvedRoot === '//') {
    resolvedRoot = DEFAULT_PLACEHOLDER;
  }

  let resolvedNS = namespaceMappings;
  if (resolvedNS.size === 0) {
    resolvedNS = extractNamespaces(rawXml);
  }

  try {
    const select = xpath.useNamespaces(Object.fromEntries(resolvedNS));
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawXml, 'text/xml');
    const nodes = select(resolvedRoot, doc as any) as any[];
    const resources = getResourceObjects(
      attributeMappings.size > 0 ? attributeMappings : null,
      nodes,
    );
    return { resources };
  } catch (err) {
    return { resources: [], error: err instanceof Error ? err.message : String(err) };
  }
}
