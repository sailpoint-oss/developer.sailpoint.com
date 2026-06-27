---
id: jsonpatchoperationrolemining
title: Jsonpatchoperationrolemining
pagination_label: Jsonpatchoperationrolemining
sidebar_label: Jsonpatchoperationrolemining
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jsonpatchoperationrolemining', 'Jsonpatchoperationrolemining'] 
slug: /tools/sdk/python/iai-role-mining/models/jsonpatchoperationrolemining
tags: ['SDK', 'Software Development Kit', 'Jsonpatchoperationrolemining', 'Jsonpatchoperationrolemining']
---

# Jsonpatchoperationrolemining

A JSONPatch Operation for Role Mining endpoints, supporting only remove and replace operations as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'remove',    'replace' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**JsonpatchoperationroleminingValue**](jsonpatchoperationrolemining-value) |  | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.jsonpatchoperationrolemining import Jsonpatchoperationrolemining

jsonpatchoperationrolemining = Jsonpatchoperationrolemining(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

