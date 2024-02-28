---
id: connector-spec-card
title: Card
pagination_label: Card
sidebar_label: Card
keywords: ['connectivity', 'connectors','connector-spec', 'card']
description: Details on using the card item
slug: /saas-connectivity/connector-spec/card
tags: ['Connectivity', 'Connector Spec']
---

## How to use the card type in the connector spec
You can use the `card` type to specify cards that allow users to add/copy/delete and enter a subMenu to make changes to more card details.

When you create a card, you must specify the fields the cardSubMenu will use to generate the title and subtitle, as shown in the following example. 

In this example, clicking the ```Add table``` button opens a dialog, and the values entered for the ```Table Information``` and ```Airtable Id``` will populate the cards ```title``` and ```subtitle```.

### Example card item type

```javascript
{
    "key": "tableParameters",
    "label": "AddTable",
    "titleKey": "tableName",
    "subtitleKey": "tableId",
    "indexKey": "sequenceNumberForTable",
    "dragNDropEnabled": true,
    "deleteButton": true,
    "editButton": true,
    "addButton": true,
    "copyButton": true,
    "buttonLabel": "Add Table",
    "type": "cardList",
    "subMenus": [
        {
            "label": "Table Information",
            "items": [
                {
                    "key": "tableName",
                    "label": "Airtable Name",
                    "type": "text",
                    "required": true,
                    "helpKey": "Must be a unique name"
                },
                {
                    "key": "tableId",
                    "label": "Airtable Id",
                    "type": "text",
                    "required": true,
                    "helpKey": "Must be a unique name"
                },
                {
                    "key": "tableType",
                    "type": "radio",
                    "label": "Table data type",
                    "required": true,
                    "options": [
                        {
                            "label": "Accounts",
                            "value": "accounts"
                        },
                        {
                            "label": "Entitlements",
                            "value": "entitlements"
                        }
                    ]
                }
            ]
        }
    ]
}
```
![card input type](../img/card.png)

![card menu input type](../img/cardMenu.png)

