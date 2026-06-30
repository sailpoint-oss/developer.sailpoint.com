---
id: scheduledactionpayload-content-backup-options
title: ScheduledactionpayloadContentBackupOptions
pagination_label: ScheduledactionpayloadContentBackupOptions
sidebar_label: ScheduledactionpayloadContentBackupOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledactionpayloadContentBackupOptions', 'ScheduledactionpayloadContentBackupOptions'] 
slug: /tools/sdk/python/configuration-hub/models/scheduledactionpayload-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContentBackupOptions', 'ScheduledactionpayloadContentBackupOptions']
---

# ScheduledactionpayloadContentBackupOptions

Options for BACKUP type jobs. Required for BACKUP jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object types that are to be included in the backup. | [optional] 
**object_options** | [**map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue**](scheduledactionresponse-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.scheduledactionpayload_content_backup_options import ScheduledactionpayloadContentBackupOptions

scheduledactionpayload_content_backup_options = ScheduledactionpayloadContentBackupOptions(
include_types=["ROLE","IDENTITY_PROFILE"],
object_options={"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}
)

```
[[Back to top]](#) 

