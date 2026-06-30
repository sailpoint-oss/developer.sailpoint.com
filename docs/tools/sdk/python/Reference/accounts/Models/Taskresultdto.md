---
id: taskresultdto
title: Taskresultdto
pagination_label: Taskresultdto
sidebar_label: Taskresultdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskresultdto', 'Taskresultdto'] 
slug: /tools/sdk/python/accounts/models/taskresultdto
tags: ['SDK', 'Software Development Kit', 'Taskresultdto', 'Taskresultdto']
---

# Taskresultdto

Task result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'TASK_RESULT' ] | Task result DTO type. | [optional] 
**id** | **str** | Task result ID. | [optional] 
**name** | **str** | Task result display name. | [optional] 
}

## Example

```python
from sailpoint.accounts.models.taskresultdto import Taskresultdto

taskresultdto = Taskresultdto(
type='TASK_RESULT',
id='464ae7bf791e49fdb74606a2e4a89635',
name=''
)

```
[[Back to top]](#) 

