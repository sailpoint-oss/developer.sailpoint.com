---
id: v2024-certification-reference-dto
title: CertificationReferenceDto
pagination_label: CertificationReferenceDto
sidebar_label: CertificationReferenceDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationReferenceDto', 'V2024CertificationReferenceDto'] 
slug: /tools/sdk/python/v2024/models/certification-reference-dto
tags: ['SDK', 'Software Development Kit', 'CertificationReferenceDto', 'V2024CertificationReferenceDto']
---

# CertificationReferenceDto

Certification for review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CERTIFICATION' ] | DTO type of certification for review. | [optional] 
**id** | **str** | ID of certification for review. | [optional] 
**name** | **str** | Display name of certification for review. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.certification_reference_dto import CertificationReferenceDto

certification_reference_dto = CertificationReferenceDto(
type='IDENTITY',
id='7589a83cec4b4f138ce56c1a5ef0756d',
name='Manager Access for Michael Michaels'
)

```
[[Back to top]](#) 

