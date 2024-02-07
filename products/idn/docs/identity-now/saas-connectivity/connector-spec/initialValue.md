---
id: connector-spec-initial-value
title: Initial Value
pagination_label: Initial Value
sidebar_label: Initial Value
keywords: ['connectivity', 'connectors','connector-spec', 'sourceConfigInitialValues']
description: Details on using the sourceConfigInitialValues field
slug: /docs/saas-connectivity/connector-spec/initial-value
tags: ['Connectivity', 'Connector Spec']
---

## How to use the sourceConfigInitialValues in the connector spec

If you have a field in the connector spec configuration that you want to be pre-populated with an initial value, you can use the sourceConfigInitialValues in the connector spec to specify them. This can be utilized across all items, all you need to provide is the key of the item and the corrisponding default value for the item. A simple example using a textbox is shown below.

```json
"sourceConfigInitialValues": {
    // Note that the key `airtableURL` is also the key of the item the initial value is provided for
    "airtableURL": "https://api.airtable.com/v0"
},
"sourceConfig": [
    {
        "type": "menu",
        "label": "Configuration",
        "items": [
            {

                "type": "section",
                "sectionTitle": "Authentication",
                "sectionHelpMessage": "Provide the parameters to connect with the airtable worksheet.",
                "items": [
                    {
                        // The key is what you use to assign initial values to the spec
                        "key": "airtableURL",
                        "label": "airtable url",
                        "required": true,
                        "type": "text"
                    }
                ]
            }
        ]
    }
]
```