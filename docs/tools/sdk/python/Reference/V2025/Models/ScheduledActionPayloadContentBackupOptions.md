---
id: v2025-scheduled-action-payload-content-backup-options
title: ScheduledActionPayloadContentBackupOptions
pagination_label: ScheduledActionPayloadContentBackupOptions
sidebar_label: ScheduledActionPayloadContentBackupOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledActionPayloadContentBackupOptions', 'V2025ScheduledActionPayloadContentBackupOptions'] 
slug: /tools/sdk/python/v2025/models/scheduled-action-payload-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayloadContentBackupOptions', 'V2025ScheduledActionPayloadContentBackupOptions']
---

# ScheduledActionPayloadContentBackupOptions

Options for BACKUP type jobs. Required for BACKUP jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object types that are to be included in the backup. | [optional] 
**object_options** | [**map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue**](scheduled-action-response-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.scheduled_action_payload_content_backup_options import ScheduledActionPayloadContentBackupOptions

scheduled_action_payload_content_backup_options = ScheduledActionPayloadContentBackupOptions(
include_types=[ROLE, IDENTITY_PROFILE],
object_options={SOURCE={includedNames=[Source1, Source2]}, ROLE={includedNames=[Admin Role, User Role]}}
)

```
[[Back to top]](#) 

