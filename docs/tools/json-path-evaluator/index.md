---
id: json-path-evaluator
title: JSON Path Evaluator
pagination_label: JSON Path Evaluator
sidebar_label: JSON Path Evaluator
sidebar_position: 5
sidebar_class_name: tools
keywords: ['tools', 'json', 'jsonpath', 'evaluator', 'workflows', 'event triggers']
description: Test and validate JSONPath expressions for ISC workflows and event triggers.
slug: /tools/json-path-evaluator
tags: ['tools']
---

## Overview

The **JSON Path Evaluator** is a SailPoint-maintained tool that lets you test [JSONPath](https://goessner.net/articles/JsonPath/) expressions against a JSON document and see the matching results instantly. It gives you a seamless way to validate your expressions without relying on a third-party website.

JSONPath is used throughout Identity Security Cloud (ISC) to pull values out of JSON data. Two of the most common places you'll write JSONPath are:

- **Workflows** — to reference data from a trigger or from earlier steps.
- **[Event trigger filters](/docs/extensibility/event-triggers/filtering-events)** — to decide whether a trigger event should be delivered to your subscription.

Because these two features use different underlying JSONPath engines, an expression that works in one won't always behave the same in the other. The evaluator lets you choose which implementation to test against so you can validate your expression in the same way ISC will evaluate it.

[**Launch the JSON Path Evaluator →**](/tools/json-path-evaluator)

## How to use it

1. Open the [JSON Path Evaluator](/tools/json-path-evaluator).
2. Paste your JSON into the **input** panel on the left. The tool opens with a sample access-request payload so you can try it right away.
3. Enter your expression in the **JSONPath query** field.
4. Select the **implementation** (Workflows or Event Trigger) you want to evaluate against.
5. Click **Run**.
6. Review the matches in the **result** panel on the right. If the expression matches nothing, you'll see `No match`; if the query or JSON is malformed, an error message explains the problem.

You can adjust the editor's **font size** with the dropdown in the action bar.

## Example

Using the sample access-request payload, the query:

```text
$.requestedItemsStatus[*].name
```

returns the `name` of every requested item:

```json
[
  "Engineering Access"
]
```

## Using the CLI

The JSON Path Evaluator is also available in the [SailPoint CLI](/docs/tools/cli) for the Workflows implementation. Evaluate an expression against a JSON file with `sail jsonpath eval`:

```bash
sail jsonpath eval -f attributes.json -p "$.identity"
```

```json
{
  "id": "ee769173319b41d19ccec6cea52f237b",
  "name": "john.doe",
  "type": "IDENTITY"
}
```

- `-f` / `--file` — path to the JSON file to evaluate.
- `-p` / `--path` — the JSONPath expression to apply.
