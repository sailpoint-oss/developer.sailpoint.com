---
id: v2024-multi-host-integrations-agg-schedule-update
title: MultiHostIntegrationsAggScheduleUpdate
pagination_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsAggScheduleUpdate', 'V2024MultiHostIntegrationsAggScheduleUpdate'] 
slug: /tools/sdk/python/v2024/models/multi-host-integrations-agg-schedule-update
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAggScheduleUpdate', 'V2024MultiHostIntegrationsAggScheduleUpdate']
---

# MultiHostIntegrationsAggScheduleUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multihost_id** | **str** | Multi-Host Integration ID. The ID must be unique | [required]
**aggregation_grp_id** | **str** | Multi-Host Integration aggregation group ID | [required]
**aggregation_grp_name** | **str** | Multi-Host Integration name | [required]
**aggregation_cron_schedule** | **str** | Cron expression to schedule aggregation | [required]
**enable_schedule** | **bool** | Boolean value for Multi-Host Integration aggregation schedule.  This specifies if scheduled aggregation is enabled or disabled. | [required][default to False]
**source_id_list** | **[]str** | Source IDs of the Multi-Host Integration | [required]
**created** | **datetime** | Created date of Multi-Host Integration aggregation schedule | [optional] 
**modified** | **datetime** | Modified date of Multi-Host Integration aggregation schedule | [optional] 
}

## Example

```python
from sailpoint.v2024.models.multi_host_integrations_agg_schedule_update import MultiHostIntegrationsAggScheduleUpdate

multi_host_integrations_agg_schedule_update = MultiHostIntegrationsAggScheduleUpdate(
multihost_id='004091cb79b04636b88662afa50a4456',
aggregation_grp_id='004091cb79b04636b88662afa50a4448',
aggregation_grp_name='Multi-Host Integration aggregation group name',
aggregation_cron_schedule='0 0 0 * * ?',
enable_schedule=False,
source_id_list=[004091cb79b04636b88662afa50a4440, 00af6d0d562a49b591c47be908740542],
created='2024-01-23T18:08:50.897Z',
modified='2024-01-23T18:08:50.897Z'
)

```
[[Back to top]](#) 

