---
id: schedule3
title: Schedule3
pagination_label: Schedule3
sidebar_label: Schedule3
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule3', 'Schedule3'] 
slug: /tools/sdk/python/sources/models/schedule3
tags: ['SDK', 'Software Development Kit', 'Schedule3', 'Schedule3']
---

# Schedule3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_AGGREGATION',    'GROUP_AGGREGATION' ] | The type of the Schedule. | [required]
**cron_expression** | **str** | The cron expression of the schedule. | [required]
}

## Example

```python
from sailpoint.sources.models.schedule3 import Schedule3

schedule3 = Schedule3(
type='ACCOUNT_AGGREGATION',
cron_expression='0 0 5,13,21 * * ?'
)

```
[[Back to top]](#) 

