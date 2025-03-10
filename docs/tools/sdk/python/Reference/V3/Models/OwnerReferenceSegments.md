---
id: owner-reference-segments
title: OwnerReferenceSegments
pagination_label: OwnerReferenceSegments
sidebar_label: OwnerReferenceSegments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OwnerReferenceSegments', 'OwnerReferenceSegments'] 
slug: /tools/sdk/python/v3/models/owner-reference-segments
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceSegments', 'OwnerReferenceSegments']
---

# OwnerReferenceSegments

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
from sailpoint.v3.models.owner_reference_segments import OwnerReferenceSegments

owner_reference_segments = OwnerReferenceSegments(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='support'
)

```
[[Back to top]](#) 

