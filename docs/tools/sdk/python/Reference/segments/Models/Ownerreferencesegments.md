---
id: ownerreferencesegments
title: Ownerreferencesegments
pagination_label: Ownerreferencesegments
sidebar_label: Ownerreferencesegments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Ownerreferencesegments', 'Ownerreferencesegments'] 
slug: /tools/sdk/python/segments/models/ownerreferencesegments
tags: ['SDK', 'Software Development Kit', 'Ownerreferencesegments', 'Ownerreferencesegments']
---

# Ownerreferencesegments

The owner of this object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 
}

## Example

```python
from sailpoint.segments.models.ownerreferencesegments import Ownerreferencesegments

ownerreferencesegments = Ownerreferencesegments(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='support'
)

```
[[Back to top]](#) 

