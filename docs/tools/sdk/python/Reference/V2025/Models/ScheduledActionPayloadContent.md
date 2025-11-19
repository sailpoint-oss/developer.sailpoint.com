---
id: v2025-scheduled-action-payload-content
title: ScheduledActionPayloadContent
pagination_label: ScheduledActionPayloadContent
sidebar_label: ScheduledActionPayloadContent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledActionPayloadContent', 'V2025ScheduledActionPayloadContent'] 
slug: /tools/sdk/python/v2025/models/scheduled-action-payload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayloadContent', 'V2025ScheduledActionPayloadContent']
---

# ScheduledActionPayloadContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the scheduled action (maximum 50 characters). | [required]
**backup_options** | [**ScheduledActionPayloadContentBackupOptions**](scheduled-action-payload-content-backup-options) |  | [optional] 
**source_backup_id** | **str** | ID of the source backup. Required for CREATE_DRAFT jobs. | [optional] 
**source_tenant** | **str** | Source tenant identifier. Required for CREATE_DRAFT jobs. | [optional] 
**draft_id** | **str** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.scheduled_action_payload_content import ScheduledActionPayloadContent

scheduled_action_payload_content = ScheduledActionPayloadContent(
name='Daily Backup',
backup_options=sailpoint.v2025.models.scheduled_action_payload_content_backup_options.ScheduledActionPayload_content_backupOptions(
                    include_types = [ROLE, IDENTITY_PROFILE], 
                    object_options = {SOURCE={includedNames=[Source1, Source2]}, ROLE={includedNames=[Admin Role, User Role]}}, ),
source_backup_id='5678b87d-48ca-439a-868f-2160001da8c2',
source_tenant='tenant-name',
draft_id='9012b87d-48ca-439a-868f-2160001da8c3'
)

```
[[Back to top]](#) 

