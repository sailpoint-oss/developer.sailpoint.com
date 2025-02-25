---
id: v2024-certification-reference1
title: CertificationReference1
pagination_label: CertificationReference1
sidebar_label: CertificationReference1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationReference1', 'V2024CertificationReference1'] 
slug: /tools/sdk/python/v2024/models/certification-reference1
tags: ['SDK', 'Software Development Kit', 'CertificationReference1', 'V2024CertificationReference1']
---

# CertificationReference1

Previous certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CERTIFICATION' ] | DTO type of certification for review. | [optional] 
**id** | **str** | ID of certification for review. | [optional] 
**name** | **str** | Display name of certification for review. | [optional] 
**reviewer** | [**Reviewer1**](reviewer1) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.certification_reference1 import CertificationReference1

certification_reference1 = CertificationReference1(
type='IDENTITY',
id='7589a83cec4b4f138ce56c1a5ef0756d',
name='Manager Access for Michael Michaels',
reviewer=sailpoint.v2024.models.reviewer_1.Reviewer_1(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', 
                    email = 'reviewer@test.com', )
)

```
[[Back to top]](#) 

