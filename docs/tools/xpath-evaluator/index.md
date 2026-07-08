---
id: xpath-evaluator
title: XPath Evaluator
pagination_label: XPath Evaluator
sidebar_label: XPath Evaluator
sidebar_position: 6
sidebar_class_name: tools
keywords: ['tools', 'xml', 'xpath', 'evaluator', 'web services', 'workday', 'connector']
description: Test XPath attribute mappings against XML connector responses in your browser.
slug: /tools/xpath-evaluator
tags: ['tools']
---

## Overview

The **XPath Evaluator** is a SailPoint-maintained tool that lets you test [XPath](https://en.wikipedia.org/wiki/XPath) expressions against an XML document and see the extracted values instantly — right in your browser.

It's built to mirror how Identity Security Cloud (ISC) parses XML responses. Connectors such as the **Web Services**, **Workday**, and **SOAP** (for example, Salesforce) connectors return account and identity data as XML, and you map each attribute to an XPath expression that targets a value in that response. Getting those expressions right — especially with namespaced documents and filtering predicates — is otherwise a trial-and-error process against a live connector.

The evaluator uses the same XML-parsing logic as the Web Services connector, so you can validate your attribute targeting before you configure the connector. Everything runs **locally in your browser**: the XML you paste in is never sent to a server, which keeps sensitive response data private and results fast.

[**Launch the XPath Evaluator →**](/tools/xpath-evaluator)

## How it works

The tool takes three inputs and produces one **resource object per matched node**:

1. **XML input** — the response document to parse. Namespaces declared in the document (such as Workday's `xhr:` prefix) are detected automatically.
2. **Root path** — an XPath that selects the node(s) each resource is built from. The evaluator iterates over every node this matches. For example: `//xhr:Response_Data/xhr:Employee`.
3. **Attribute mappings** — a JSON object mapping each attribute name to an XPath expression evaluated **relative to each root node**.

For every node the root path matches, the tool evaluates each mapping and assembles an object of attribute name → extracted value. If a mapping matches more than one node, its value is returned as an array; if it matches nothing, that attribute is omitted.

## How to use it

1. Open the [XPath Evaluator](/tools/xpath-evaluator).
2. Paste your XML response into the **XML input** panel. The tool opens with a sample Workday employee response so you can try it right away.
3. Enter the **root path** that selects the records you want to extract.
4. In the **Attribute mappings** panel, provide a JSON object of attribute names to XPath expressions, for example:

   ```json
   {
     "firstName": "FirstName",
     "lastName": "LastName"
   }
   ```

5. Click **Run**.
6. Review the extracted resource objects in the **result** panel. Query or root-path errors appear in an alert above the inputs; invalid XML is flagged on the XML panel itself.

You can adjust the editor's **font size** with the dropdown in the action bar.

### Find an expression by hovering

You don't have to write every path from scratch. Hover over any value in the **XML input** panel and the **XPath Hover** area below shows that value's **element path** and its **exact node path**. Click a value to **lock** the hover output to that node so you can copy it, then use the **Reset Hover** button to unlock and continue browsing.

## Example

Given this XML:

```xml
<Response>
  <Users>
    <User>
      <FirstName>William</FirstName>
      <LastName>Wilson</LastName>
    </User>
    <User>
      <FirstName>John</FirstName>
      <LastName>Doe</LastName>
    </User>
  </Users>
</Response>
```

with the **root path**:

```text
//Users/User
```

and the **attribute mappings**:

```json
{
  "firstName": "FirstName",
  "lastName": "LastName"
}
```

the evaluator returns one object per matched `User` node:

```json
[
  { "firstName": "William", "lastName": "Wilson" },
  { "firstName": "John", "lastName": "Doe" }
]
```

The built-in Workday sample goes further, using filtering predicates such as
`xhr:Employee_Reference/xhr:ID[@xhr:type='Employee_Number']` to target a specific
identifier among repeated nodes — the same style of expression you'd use in a
connector attribute mapping.
