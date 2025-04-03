---
id: v2024-scheduled-action-response-content
title: ScheduledActionResponseContent
pagination_label: ScheduledActionResponseContent
sidebar_label: ScheduledActionResponseContent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledActionResponseContent', 'V2024ScheduledActionResponseContent'] 
slug: /tools/sdk/python/v2024/models/scheduled-action-response-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContent', 'V2024ScheduledActionResponseContent']
---

# ScheduledActionResponseContent

Content details for the scheduled action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the scheduled action (maximum 50 characters). | [optional] 
**backup_options** | [**ScheduledActionResponseContentBackupOptions**](scheduled-action-response-content-backup-options) |  | [optional] 
**source_backup_id** | **str** | ID of the source backup. Required for CREATE_DRAFT jobs only. | [optional] 
**source_tenant** | **str** | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [optional] 
**draft_id** | **str** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.scheduled_action_response_content import ScheduledActionResponseContent

scheduled_action_response_content = ScheduledActionResponseContent(
name='Daily Backup',
backup_options=sailpoint.v2024.models.scheduled_action_response_content_backup_options.ScheduledActionResponse_content_backupOptions(
                    include_types = [ROLE, IDENTITY_PROFILE], 
                    object_options = {SOURCE={includedNames=[Source1, Source2]}, ROLE={includedNames=[Admin Role, User Role]}}, ),
source_backup_id='5678b87d-48ca-439a-868f-2160001da8c2',
source_tenant='tenant-name',
draft_id='9012b87d-48ca-439a-868f-2160001da8c3'
)

```
[[Back to top]](#) 

