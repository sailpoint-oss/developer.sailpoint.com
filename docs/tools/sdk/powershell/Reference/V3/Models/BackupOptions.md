---
id: backup-options
title: BackupOptions
pagination_label: BackupOptions
sidebar_label: BackupOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BackupOptions', 'BackupOptions'] 
slug: /tools/sdk/powershell/v3/models/backup-options
tags: ['SDK', 'Software Development Kit', 'BackupOptions', 'BackupOptions']
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
$BackupOptions = Initialize-PSSailpoint.V3BackupOptions  -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedNames=[Trigger Subscription name]}}
```

- Convert the resource to JSON
```powershell
$BackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

