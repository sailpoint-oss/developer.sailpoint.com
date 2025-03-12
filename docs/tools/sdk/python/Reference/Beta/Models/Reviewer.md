---
id: beta-reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewer', 'BetaReviewer'] 
slug: /tools/sdk/python/beta/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer', 'BetaReviewer']
---

# Reviewer

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
from sailpoint.beta.models.reviewer import Reviewer

reviewer = Reviewer(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels',
email='reviewer@test.com'
)

```
[[Back to top]](#) 

