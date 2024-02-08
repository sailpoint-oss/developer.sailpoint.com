---
id: connector-spec-initial-value
title: Initial Value
pagination_label: Initial Value
sidebar_label: Initial Value
keywords: ['connectivity', 'connectors','connector-spec', 'sourceConfigInitialValues']
description: How to use the sourceConfigInitialValues field
slug: /docs/saas-connectivity/connector-spec/initial-value
tags: ['Connectivity', 'Connector Spec']
---

## How to use the sourceConfigInitialValues in the connector spec

If you want to prepopulate a field in the connector spec configuration with an initial value, you can use the `sourceConfigInitialValues` field in the connector spec to specify the prepopulated value. This can be used across all items. All you need to provide is the item's key and its corresponding default value. This is a simple example using a textbox:

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