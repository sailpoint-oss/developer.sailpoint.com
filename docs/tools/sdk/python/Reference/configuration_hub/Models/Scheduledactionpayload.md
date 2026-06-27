---
id: scheduledactionpayload
title: Scheduledactionpayload
pagination_label: Scheduledactionpayload
sidebar_label: Scheduledactionpayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scheduledactionpayload', 'Scheduledactionpayload'] 
slug: /tools/sdk/python/configuration-hub/models/scheduledactionpayload
tags: ['SDK', 'Software Development Kit', 'Scheduledactionpayload', 'Scheduledactionpayload']
---

# Scheduledactionpayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_type** |  **Enum** [  'BACKUP',    'CREATE_DRAFT',    'CONFIG_DEPLOY_DRAFT' ] | Type of the scheduled job. | [required]
**start_time** | **datetime** | The time when this scheduled action should start. Optional. | [optional] 
**cron_string** | **str** | Cron expression defining the schedule for this action. Optional for repeated events. | [optional] 
**time_zone_id** | **str** | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [optional] 
**content** | [**ScheduledactionpayloadContent**](scheduledactionpayload-content) |  | [required]
}

## Example

```python
from sailpoint.configuration_hub.models.scheduledactionpayload import Scheduledactionpayload

scheduledactionpayload = Scheduledactionpayload(
job_type='BACKUP',
start_time='2024-08-16T14:16:58.389Z',
cron_string='0 0 * * * *',
time_zone_id='America/Chicago',
content=sailpoint.configuration_hub.models.scheduledactionpayload_content.scheduledactionpayload_content(
                    name = 'Daily Backup', 
                    backup_options = sailpoint.configuration_hub.models.scheduledactionpayload_content_backup_options.scheduledactionpayload_content_backupOptions(
                        include_types = ["ROLE","IDENTITY_PROFILE"], 
                        object_options = {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}, ), 
                    source_backup_id = '5678b87d-48ca-439a-868f-2160001da8c2', 
                    source_tenant = 'tenant-name', 
                    draft_id = '9012b87d-48ca-439a-868f-2160001da8c3', )
)

```
[[Back to top]](#) 

