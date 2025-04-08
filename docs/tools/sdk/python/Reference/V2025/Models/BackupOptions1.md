---
id: v2025-backup-options1
title: BackupOptions1
pagination_label: BackupOptions1
sidebar_label: BackupOptions1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BackupOptions1', 'V2025BackupOptions1'] 
slug: /tools/sdk/python/v2025/models/backup-options1
tags: ['SDK', 'Software Development Kit', 'BackupOptions1', 'V2025BackupOptions1']
---

# BackupOptions1

Backup options control what will be included in the backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**object_options** | [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.backup_options1 import BackupOptions1

backup_options1 = BackupOptions1(
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={TRIGGER_SUBSCRIPTION={includedNames=[Trigger Subscription name]}}
)

```
[[Back to top]](#) 

