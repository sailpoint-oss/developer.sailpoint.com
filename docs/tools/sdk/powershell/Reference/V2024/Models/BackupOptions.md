---
id: v2024-backup-options
title: BackupOptions
pagination_label: BackupOptions
sidebar_label: BackupOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BackupOptions', 'V2024BackupOptions'] 
slug: /tools/sdk/powershell/v2024/models/backup-options
tags: ['SDK', 'Software Development Kit', 'BackupOptions', 'V2024BackupOptions']
---


# BackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Examples

- Prepare the resource
```powershell
$BackupOptions = Initialize-PSSailpoint.V2024BackupOptions  -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION&#x3D;{includedNames&#x3D;[Trigger Subscription name]}}
```

- Convert the resource to JSON
```powershell
$BackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

