---
id: connector-spec-radio
title: Radio
pagination_label: Radio
sidebar_label: Radio
keywords: ['connectivity', 'connectors','connector-spec', 'radio']
description: Details on using the Radio item
slug: /docs/saas-connectivity/connector-spec/radio
tags: ['Connectivity', 'Connector Spec']
---

## How to use the Radio type in the connector spec
You can use the radio type to create radio buttons for users to interact with to select from a predefined set of values. An example of implementing this is below

### Example radio item type

```javascript
{
    "key": "airtableURL",
    "type": "radio",
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
![radio input type](../img/radio.png)

You can also create dependencies on other fields so they are hidden until the selection is made. This same type of dependency can be built into any field and linked via the parentKey/parentValue fields.

### Example dependency on above select field

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
