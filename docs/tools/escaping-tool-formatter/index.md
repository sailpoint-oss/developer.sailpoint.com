---
id: escaping-tool-formatter
title: Escaping Tool Formatter
pagination_label: Escaping Tool Formatter
sidebar_label: Escaping Tool Formatter
sidebar_position: 7
sidebar_class_name: tools
keywords: ['tools', 'escape', 'escaping', 'formatter', 'java', 'rules']
description: Escape and unescape Java/.NET strings for uploading and editing SailPoint rules.
slug: /tools/escaping-tool-formatter
tags: ['tools']
---

## Overview

The **Escaping Tool Formatter** (also known as the **Java/.NET String Escaper**) is a SailPoint-maintained tool that escapes and unescapes Java code so you can move rules between your editor and the ISC APIs without leaving the Developer Community.

Rules in Identity Security Cloud (ISC) are typically written in Java (BeanShell). When you upload a rule through the API, the rule's source has to be embedded inside a JSON payload as a single string value. JSON strings can't contain raw line breaks, tabs, or unescaped quotation marks, so the code must first be **escaped** into a valid string. When you want to read or edit a rule you've pulled back down, you need to reverse the process and **unescape** it into readable code.

This tool handles both directions for you, so you no longer need to rely on a third-party website to format your rules.

[**Launch the Escaping Tool Formatter →**](/tools/escaping-tool-formatter)

## When to use it

- **Escape** your Java rule before uploading it in a JSON request body (for example, when creating or updating a rule through the [ISC APIs](/docs/api)).
- **Unescape** a rule you've retrieved from the API so you can read, review, or edit it as normal Java.
- Format code for other tasks that require escaped strings, such as building custom rule reports or assembling large datasets for email attachments.

:::tip Already using the VS Code extension?
The [ISC VS Code extension](https://marketplace.visualstudio.com/items?itemName=yannick-beot-sp.vscode-sailpoint-identitynow) escapes and unescapes rules automatically. Right-click a rule, choose **Edit Script**, make your changes, and save — the extension handles the formatting for you. The Escaping Tool Formatter is handy when you're working outside of VS Code or want a quick, one-off conversion.
:::

## How to use it

1. Open the [Escaping Tool Formatter](/tools/escaping-tool-formatter).
2. Paste your code into the **input** panel on the left. The tool opens with a sample Java rule so you can try it right away.
3. Choose an action:
   - **Escape** — converts your code into an escaped, single-line string suitable for a JSON payload.
   - **Unescape** — converts an escaped string back into readable, multi-line code.
4. Review the converted text in the **result** panel on the right.
5. Click **Copy Result** to copy the output to your clipboard.

You can also adjust the editor's **font size** with the dropdown in the action bar.

## What gets escaped

When you escape a string, the tool replaces the following characters with their escaped equivalents (and reverses them when you unescape):

| Character        | Escaped as |
| ---------------- | ---------- |
| Backslash (`\`)  | `\\`       |
| Double quote (`"`) | `\"`     |
| Carriage return  | `\r`       |
| Line feed        | `\n`       |
| Tab              | `\t`       |
| Form feed        | `\f`       |

When escaping, line endings are normalized to Windows-style CRLF (`\r\n`) before the conversion is applied.

## Example

**Input (readable Java):**

```java
log.info("Entering rule");
String fullUrl = requestEndPoint.getFullUrl();
fullUrl = fullUrl.replace("accountId", "test");
```

**Output (escaped string, ready for a JSON payload):**

```text
log.info(\"Entering rule\");\r\nString fullUrl = requestEndPoint.getFullUrl();\r\nfullUrl = fullUrl.replace(\"accountId\", \"test\");
```

Running **Unescape** on the output above returns the original, readable Java.
