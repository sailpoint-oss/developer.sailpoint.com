---
id: v2025-reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewer', 'V2025Reviewer'] 
slug: /tools/sdk/python/v2025/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer', 'V2025Reviewer']
---

# Reviewer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the reviewer. | [optional] 
**name** | **str** | The name of the reviewer. | [optional] 
**email** | **str** | The email of the reviewing identity. | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of the reviewing identity. | [optional] 
**created** | **datetime** | The created date of the reviewing identity. | [optional] 
**modified** | **datetime** | The modified date of the reviewing identity. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.reviewer import Reviewer

reviewer = Reviewer(
id='ef38f94347e94562b5bb8424a56397d8',
name='Reviewer Name',
email='reviewer@test.com',
type='IDENTITY',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z'
)

```
[[Back to top]](#) 

