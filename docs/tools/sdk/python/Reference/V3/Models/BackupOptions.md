---
id: backup-options
title: BackupOptions
pagination_label: BackupOptions
sidebar_label: BackupOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BackupOptions', 'BackupOptions'] 
slug: /tools/sdk/python/v3/models/backup-options
tags: ['SDK', 'Software Development Kit', 'BackupOptions', 'BackupOptions']
---

# BackupOptions

Backup options control what will be included in the backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**object_options** | [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 
}

## Example

```python
from sailpoint.v3.models.backup_options import BackupOptions

backup_options = BackupOptions(
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={TRIGGER_SUBSCRIPTION={includedNames=[Trigger Subscription name]}}
)

```
[[Back to top]](#) 

