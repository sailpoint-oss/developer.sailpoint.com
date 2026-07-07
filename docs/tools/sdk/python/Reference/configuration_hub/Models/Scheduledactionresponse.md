---
id: scheduledactionresponse
title: Scheduledactionresponse
pagination_label: Scheduledactionresponse
sidebar_label: Scheduledactionresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scheduledactionresponse', 'Scheduledactionresponse'] 
slug: /tools/sdk/python/configuration-hub/models/scheduledactionresponse
tags: ['SDK', 'Software Development Kit', 'Scheduledactionresponse', 'Scheduledactionresponse']
---

# Scheduledactionresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this scheduled action. | [optional] 
**created** | **datetime** | The time when this scheduled action was created. | [optional] 
**job_type** |  **Enum** [  'BACKUP',    'CREATE_DRAFT',    'CONFIG_DEPLOY_DRAFT' ] | Type of the scheduled job. | [optional] 
**content** | [**ScheduledactionresponseContent**](scheduledactionresponse-content) |  | [optional] 
**start_time** | **datetime** | The time when this scheduled action should start. | [optional] 
**cron_string** | **str** | Cron expression defining the schedule for this action. | [optional] 
**time_zone_id** | **str** | Time zone ID for interpreting the cron expression. | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.scheduledactionresponse import Scheduledactionresponse

scheduledactionresponse = Scheduledactionresponse(
id='3469b87d-48ca-439a-868f-2160001da8c1',
created='2021-05-11T22:23:16Z',
job_type='BACKUP',
content=sailpoint.configuration_hub.models.scheduledactionresponse_content.scheduledactionresponse_content(
                    name = 'Daily Backup', 
                    backup_options = sailpoint.configuration_hub.models.scheduledactionresponse_content_backup_options.scheduledactionresponse_content_backupOptions(
                        include_types = ["ROLE","IDENTITY_PROFILE"], 
                        object_options = {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}, ), 
                    source_backup_id = '5678b87d-48ca-439a-868f-2160001da8c2', 
                    source_tenant = 'tenant-name', 
                    draft_id = '9012b87d-48ca-439a-868f-2160001da8c3', ),
start_time='2021-05-12T10:00Z',
cron_string='0 0 * * * *',
time_zone_id='America/Chicago'
)

```
[[Back to top]](#) 

