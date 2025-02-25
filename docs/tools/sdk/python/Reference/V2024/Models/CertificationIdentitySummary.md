---
id: v2024-certification-identity-summary
title: CertificationIdentitySummary
pagination_label: CertificationIdentitySummary
sidebar_label: CertificationIdentitySummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationIdentitySummary', 'V2024CertificationIdentitySummary'] 
slug: /tools/sdk/python/v2024/models/certification-identity-summary
tags: ['SDK', 'Software Development Kit', 'CertificationIdentitySummary', 'V2024CertificationIdentitySummary']
---

# CertificationIdentitySummary


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
from sailpoint.v2024.models.certification_identity_summary import CertificationIdentitySummary

certification_identity_summary = CertificationIdentitySummary(
id='2c91808772a504f50172a9540e501ba7',
name='Alison Ferguso',
identity_id='2c9180857182306001719937377a33de',
completed=True
)

```
[[Back to top]](#) 

