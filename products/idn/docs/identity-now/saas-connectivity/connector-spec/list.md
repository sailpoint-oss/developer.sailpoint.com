---
id: connector-spec-list
title: List
pagination_label: List
sidebar_label: List
keywords: ['connectivity', 'connectors','connector-spec', 'list']
description: Details on using the List item
slug: /docs/saas-connectivity/connector-spec/list
tags: ['Connectivity', 'Connector Spec']
---

## How to use the List type in the connector spec
You can use the list type to allow a user to enter multiple items in a single entry box. An example of implementing this is below

### Example list item type

```javascript
{
    "key": "entitlements",
    "label": "Entitlements",
    "type": "list",
    "helpKey": "Add a list of entitlements to expose via your source"
}
```
![list input type](../img/list.png)
