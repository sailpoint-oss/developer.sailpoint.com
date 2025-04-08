---
id: v2025-backup-options1
title: BackupOptions1
pagination_label: BackupOptions1
sidebar_label: BackupOptions1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BackupOptions1', 'V2025BackupOptions1'] 
slug: /tools/sdk/powershell/v2025/models/backup-options1
tags: ['SDK', 'Software Development Kit', 'BackupOptions1', 'V2025BackupOptions1']
---


# BackupOptions1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Examples

- Prepare the resource
```powershell
$BackupOptions1 = Initialize-PSSailpoint.V2025BackupOptions1  -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedNames=[Trigger Subscription name]}}
```

- Convert the resource to JSON
```powershell
$BackupOptions1 | ConvertTo-JSON
```


[[Back to top]](#) 

