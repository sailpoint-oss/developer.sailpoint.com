---
id: v2025-schedule1
title: Schedule1
pagination_label: Schedule1
sidebar_label: Schedule1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule1', 'V2025Schedule1'] 
slug: /tools/sdk/python/v2025/models/schedule1
tags: ['SDK', 'Software Development Kit', 'Schedule1', 'V2025Schedule1']
---

# Schedule1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_AGGREGATION',    'GROUP_AGGREGATION' ] | The type of the Schedule. | [required]
**cron_expression** | **str** | The cron expression of the schedule. | [required]
}

## Example

```python
from sailpoint.v2025.models.schedule1 import Schedule1

schedule1 = Schedule1(
type='ACCOUNT_AGGREGATION',
cron_expression='0 0 5,13,21 * * ?'
)

```
[[Back to top]](#) 

