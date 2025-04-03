---
id: v2025-scheduled-action-payload
title: ScheduledActionPayload
pagination_label: ScheduledActionPayload
sidebar_label: ScheduledActionPayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledActionPayload', 'V2025ScheduledActionPayload'] 
slug: /tools/sdk/python/v2025/models/scheduled-action-payload
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayload', 'V2025ScheduledActionPayload']
---

# ScheduledActionPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_type** |  **Enum** [  'BACKUP',    'CREATE_DRAFT',    'CONFIG_DEPLOY_DRAFT' ] | Type of the scheduled job. | [required]
**start_time** | **datetime** | The time when this scheduled action should start. Optional. | [optional] 
**cron_string** | **str** | Cron expression defining the schedule for this action. Optional for repeated events. | [optional] 
**time_zone_id** | **str** | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [optional] 
**content** | [**ScheduledActionPayloadContent**](scheduled-action-payload-content) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.scheduled_action_payload import ScheduledActionPayload

scheduled_action_payload = ScheduledActionPayload(
job_type='BACKUP',
start_time='2024-08-16T14:16:58.389Z',
cron_string='0 0 12 * * ?',
time_zone_id='America/Chicago',
content=sailpoint.v2025.models.scheduled_action_payload_content.ScheduledActionPayload_content(
                    name = 'Daily Backup', 
                    backup_options = sailpoint.v2025.models.scheduled_action_payload_content_backup_options.ScheduledActionPayload_content_backupOptions(
                        include_types = [ROLE, IDENTITY_PROFILE], 
                        object_options = {SOURCE={includedNames=[Source1, Source2]}, ROLE={includedNames=[Admin Role, User Role]}}, ), 
                    source_backup_id = '5678b87d-48ca-439a-868f-2160001da8c2', 
                    source_tenant = 'tenant-name', 
                    draft_id = '9012b87d-48ca-439a-868f-2160001da8c3', )
)

```
[[Back to top]](#) 

