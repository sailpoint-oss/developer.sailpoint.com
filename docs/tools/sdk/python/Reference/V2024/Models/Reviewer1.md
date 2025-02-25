---
id: v2024-reviewer1
title: Reviewer1
pagination_label: Reviewer1
sidebar_label: Reviewer1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewer1', 'V2024Reviewer1'] 
slug: /tools/sdk/python/v2024/models/reviewer1
tags: ['SDK', 'Software Development Kit', 'Reviewer1', 'V2024Reviewer1']
---

# Reviewer1

Details of the reviewer for certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The reviewer's DTO type. | [required]
**id** | **str** | The reviewer's ID. | [required]
**name** | **str** | The reviewer's display name. | [required]
**email** | **str** | The reviewing identity's email. Only applicable to `IDENTITY`. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.reviewer1 import Reviewer1

reviewer1 = Reviewer1(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels',
email='reviewer@test.com'
)

```
[[Back to top]](#) 

