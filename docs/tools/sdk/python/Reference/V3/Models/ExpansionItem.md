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
**cause** | **str** | Cause of the expansion item. | [optional] 
**name** | **str** | The name of the item | [optional] 
**attribute_request** | [**AttributeRequest**](attribute-request) |  | [optional] 
**source** | [**AccountSource**](account-source) |  | [optional] 
**id** | **str** | ID of the expansion item | [optional] 
**state** | **str** | State of the expansion item | [optional] 
}

## Example

```python
from sailpoint.v3.models.expansion_item import ExpansionItem

expansion_item = ExpansionItem(
account_id='2c91808981f58ea601821c3e93482e6f',
cause='Role',
name='smartsheet-role',
attribute_request=sailpoint.v3.models.attribute_request.AttributeRequest(
                    name = 'groups', 
                    op = 'Add', 
                    value = null, ),
source=,
id='ac2887ffe0e7435a8c18c73f7ae94c7b',
state='EXECUTING'
)

```
[[Back to top]](#) 

