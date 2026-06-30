---
id: additionalownerref
title: Additionalownerref
pagination_label: Additionalownerref
sidebar_label: Additionalownerref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Additionalownerref', 'Additionalownerref'] 
slug: /tools/sdk/python/entitlements/models/additionalownerref
tags: ['SDK', 'Software Development Kit', 'Additionalownerref', 'Additionalownerref']
---

# Additionalownerref

Reference to an additional owner (identity or governance group).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [optional] 
**id** | **str** | ID of the identity or governance group. | [optional] 
**name** | **str** | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.additionalownerref import Additionalownerref

additionalownerref = Additionalownerref(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='support'
)

```
[[Back to top]](#) 

