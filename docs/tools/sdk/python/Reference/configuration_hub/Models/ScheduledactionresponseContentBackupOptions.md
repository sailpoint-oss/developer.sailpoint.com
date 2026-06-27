---
id: scheduledactionresponse-content-backup-options
title: ScheduledactionresponseContentBackupOptions
pagination_label: ScheduledactionresponseContentBackupOptions
sidebar_label: ScheduledactionresponseContentBackupOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledactionresponseContentBackupOptions', 'ScheduledactionresponseContentBackupOptions'] 
slug: /tools/sdk/python/configuration-hub/models/scheduledactionresponse-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContentBackupOptions', 'ScheduledactionresponseContentBackupOptions']
---

# ScheduledactionresponseContentBackupOptions

Options for BACKUP type jobs. Optional, applicable for BACKUP jobs only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object types that are to be included in the backup. | [optional] 
**object_options** | [**map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue**](scheduledactionresponse-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.scheduledactionresponse_content_backup_options import ScheduledactionresponseContentBackupOptions

scheduledactionresponse_content_backup_options = ScheduledactionresponseContentBackupOptions(
include_types=["ROLE","IDENTITY_PROFILE"],
object_options={"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}
)

```
[[Back to top]](#) 

