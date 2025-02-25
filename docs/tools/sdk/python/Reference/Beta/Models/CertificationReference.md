---
id: beta-certification-reference
title: CertificationReference
pagination_label: CertificationReference
sidebar_label: CertificationReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationReference', 'BetaCertificationReference'] 
slug: /tools/sdk/python/beta/models/certification-reference
tags: ['SDK', 'Software Development Kit', 'CertificationReference', 'BetaCertificationReference']
---

# CertificationReference

Previous certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CERTIFICATION' ] | DTO type of certification for review. | [optional] 
**id** | **str** | ID of certification for review. | [optional] 
**name** | **str** | Display name of certification for review. | [optional] 
**reviewer** | [**Reviewer**](reviewer) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.certification_reference import CertificationReference

certification_reference = CertificationReference(
type='IDENTITY',
id='7589a83cec4b4f138ce56c1a5ef0756d',
name='Manager Access for Michael Michaels',
reviewer=sailpoint.beta.models.reviewer.Reviewer(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', 
                    email = 'reviewer@test.com', )
)

```
[[Back to top]](#) 

