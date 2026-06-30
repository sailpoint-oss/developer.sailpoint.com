---
id: certificationidentitysummary
title: Certificationidentitysummary
pagination_label: Certificationidentitysummary
sidebar_label: Certificationidentitysummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certificationidentitysummary', 'Certificationidentitysummary'] 
slug: /tools/sdk/python/certifications/models/certificationidentitysummary
tags: ['SDK', 'Software Development Kit', 'Certificationidentitysummary', 'Certificationidentitysummary']
---

# Certificationidentitysummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the identity summary | [optional] 
**name** | **str** | Name of the linked identity | [optional] 
**identity_id** | **str** | The ID of the identity being certified | [optional] 
**completed** | **bool** | Indicates whether the review items for the linked identity's certification have been completed | [optional] 
}

## Example

```python
from sailpoint.certifications.models.certificationidentitysummary import Certificationidentitysummary

certificationidentitysummary = Certificationidentitysummary(
id='2c91808772a504f50172a9540e501ba7',
name='Alison Ferguso',
identity_id='2c9180857182306001719937377a33de',
completed=True
)

```
[[Back to top]](#) 

