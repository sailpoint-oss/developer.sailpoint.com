---
id: connector-spec-select
title: Select
pagination_label: Select
sidebar_label: Select
keywords: ['connectivity', 'connectors','connector-spec', 'select']
description: Details on using the select item
slug: /docs/saas-connectivity/connector-spec/select
tags: ['Connectivity', 'Connector Spec']
---

## How to use the Select type in the connector spec
You can use the Select type to create a dropdown for users to interact with to select from a predefined set of values. 

This is an example implementation:

### Example select item type

```javascript
{
    "key": "airtableURL",
    "type": "select",
    "label": "Airtable URL",
    "required": true,
    "options": [
        {
            "label": "Standard",
            "value": "standard"
        },
        {
            "label": "Custom",
            "value": "custom"
        }
    ]
}
```
![select input type](../img/select.png)

You can also create dependencies on other fields so they are hidden until the selection is made. This same type of dependency can be built into any field and linked by using the parentKey/parentValue fields.

### Example dependency on earlier select field

```javascript
{
    "key": "baseUrl",
    "type": "text",
    "label": "Base URL",
    "parentKey": "airtableURL",
    "parentValue": "custom",
    "placeholder": "https://{your domain}",
    "required": true
}
```
