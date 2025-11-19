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

Details of the reviewer for a certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Reviewer's DTO type. | [required]
**id** | **str** | Reviewer's ID. | [required]
**name** | **str** | Reviewer's display name. | [required]
**email** | **str** | Reviewing identity's email. This is only applicable to reviewers of the `IDENTITY` type. | [optional] 
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

