---
id: expansion-item
title: ExpansionItem
pagination_label: ExpansionItem
sidebar_label: ExpansionItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExpansionItem', 'ExpansionItem'] 
slug: /tools/sdk/python/v3/models/expansion-item
tags: ['SDK', 'Software Development Kit', 'ExpansionItem', 'ExpansionItem']
---

# ExpansionItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account | [optional] 
**cause** | **str** |  | [optional] 
**name** | **str** | The name of the item | [optional] 
**attribute_requests** | [**[]AttributeRequest**](attribute-request) |  | [optional] 
**source** | [**AccountSource**](account-source) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.expansion_item import ExpansionItem

expansion_item = ExpansionItem(
account_id='2c91808981f58ea601821c3e93482e6f',
cause='Role',
name='smartsheet-role',
attribute_requests=[
                    sailpoint.v3.models.attribute_request.AttributeRequest(
                        name = 'groups', 
                        op = 'Add', 
                        value = '3203537556531076', )
                    ],
source=
)

```
[[Back to top]](#) 

