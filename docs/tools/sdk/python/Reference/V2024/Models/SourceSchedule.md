---
id: v2024-source-schedule
title: SourceSchedule
pagination_label: SourceSchedule
sidebar_label: SourceSchedule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceSchedule', 'V2024SourceSchedule'] 
slug: /tools/sdk/python/v2024/models/source-schedule
tags: ['SDK', 'Software Development Kit', 'SourceSchedule', 'V2024SourceSchedule']
---

# SourceSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_AGGREGATION',    'GROUP_AGGREGATION' ] | The type of the Schedule. | [required]
**cron_expression** | **str** | The cron expression of the schedule. | [required]
}

## Example

```python
from sailpoint.v2024.models.source_schedule import SourceSchedule

source_schedule = SourceSchedule(
type='ACCOUNT_AGGREGATION',
cron_expression='0 0 5,13,21 * * ?'
)

```
[[Back to top]](#) 

