---
id: v2024-scheduled-action-response-content-backup-options
title: ScheduledActionResponseContentBackupOptions
pagination_label: ScheduledActionResponseContentBackupOptions
sidebar_label: ScheduledActionResponseContentBackupOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledActionResponseContentBackupOptions', 'V2024ScheduledActionResponseContentBackupOptions'] 
slug: /tools/sdk/python/v2024/models/scheduled-action-response-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContentBackupOptions', 'V2024ScheduledActionResponseContentBackupOptions']
---

# ScheduledActionResponseContentBackupOptions

Options for BACKUP type jobs. Optional, applicable for BACKUP jobs only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object types that are to be included in the backup. | [optional] 
**object_options** | [**map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue**](scheduled-action-response-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.scheduled_action_response_content_backup_options import ScheduledActionResponseContentBackupOptions

scheduled_action_response_content_backup_options = ScheduledActionResponseContentBackupOptions(
include_types=[ROLE, IDENTITY_PROFILE],
object_options={SOURCE={includedNames=[Source1, Source2]}, ROLE={includedNames=[Admin Role, User Role]}}
)

```
[[Back to top]](#) 

