---
id: v2025-load-uncorrelated-accounts-task-task-attributes
title: LoadUncorrelatedAccountsTaskTaskAttributes
pagination_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadUncorrelatedAccountsTaskTaskAttributes', 'V2025LoadUncorrelatedAccountsTaskTaskAttributes'] 
slug: /tools/sdk/python/v2025/models/load-uncorrelated-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskAttributes', 'V2025LoadUncorrelatedAccountsTaskTaskAttributes']
---

# LoadUncorrelatedAccountsTaskTaskAttributes

Extra attributes map(dictionary) for the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qpoc_job_id** | **str** | The id of qpoc job | [optional] 
**task_start_delay** | **object** | the task start delay value | [optional] 
}

## Example

```python
from sailpoint.v2025.models.load_uncorrelated_accounts_task_task_attributes import LoadUncorrelatedAccountsTaskTaskAttributes

load_uncorrelated_accounts_task_task_attributes = LoadUncorrelatedAccountsTaskTaskAttributes(
qpoc_job_id='5d303d46-fc51-48cd-9c6d-4e211e3ab63c',
task_start_delay=sailpoint.v2025.models.task_start_delay.taskStartDelay()
)

```
[[Back to top]](#) 

