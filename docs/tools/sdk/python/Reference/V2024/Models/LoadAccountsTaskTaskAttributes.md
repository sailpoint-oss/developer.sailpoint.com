---
id: v2024-load-accounts-task-task-attributes
title: LoadAccountsTaskTaskAttributes
pagination_label: LoadAccountsTaskTaskAttributes
sidebar_label: LoadAccountsTaskTaskAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadAccountsTaskTaskAttributes', 'V2024LoadAccountsTaskTaskAttributes'] 
slug: /tools/sdk/python/v2024/models/load-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskAttributes', 'V2024LoadAccountsTaskTaskAttributes']
---

# LoadAccountsTaskTaskAttributes

Extra attributes map(dictionary) for the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The id of the source | [optional] 
**optimized_aggregation** | **str** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 
}

## Example

```python
from sailpoint.v2024.models.load_accounts_task_task_attributes import LoadAccountsTaskTaskAttributes

load_accounts_task_task_attributes = LoadAccountsTaskTaskAttributes(
app_id='c31386cb18bb403cbb6df4c86294ff82',
optimized_aggregation='enabled'
)

```
[[Back to top]](#) 

