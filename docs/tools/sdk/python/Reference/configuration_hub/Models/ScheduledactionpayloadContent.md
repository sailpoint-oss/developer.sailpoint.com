---
id: scheduledactionpayload-content
title: ScheduledactionpayloadContent
pagination_label: ScheduledactionpayloadContent
sidebar_label: ScheduledactionpayloadContent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledactionpayloadContent', 'ScheduledactionpayloadContent'] 
slug: /tools/sdk/python/configuration-hub/models/scheduledactionpayload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContent', 'ScheduledactionpayloadContent']
---

# ScheduledactionpayloadContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the scheduled action (maximum 50 characters). | [required]
**backup_options** | [**ScheduledactionpayloadContentBackupOptions**](scheduledactionpayload-content-backup-options) |  | [optional] 
**source_backup_id** | **str** | ID of the source backup. Required for CREATE_DRAFT jobs. | [optional] 
**source_tenant** | **str** | Source tenant identifier. Required for CREATE_DRAFT jobs. | [optional] 
**draft_id** | **str** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.scheduledactionpayload_content import ScheduledactionpayloadContent

scheduledactionpayload_content = ScheduledactionpayloadContent(
name='Daily Backup',
backup_options=sailpoint.configuration_hub.models.scheduledactionpayload_content_backup_options.scheduledactionpayload_content_backupOptions(
                    include_types = ["ROLE","IDENTITY_PROFILE"], 
                    object_options = {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}, ),
source_backup_id='5678b87d-48ca-439a-868f-2160001da8c2',
source_tenant='tenant-name',
draft_id='9012b87d-48ca-439a-868f-2160001da8c3'
)

```
[[Back to top]](#) 

