---
id: import-options
title: ImportOptions
pagination_label: ImportOptions
sidebar_label: ImportOptions
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ImportOptions'] 
slug: /tools/sdk/powershell/beta/models/import-options
tags: ['SDK', 'Software Development Kit', 'ImportOptions']
---


# ImportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** |  Pointer to **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** |  Pointer to **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** |  Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
**DefaultReferences** |  Pointer to **[]String** | List of object types that can be used to resolve references on import. | [optional] 
**ExcludeBackup** |  Pointer to **Boolean** | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ImportOptions = Initialize-BetaImportOptions  -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}} `
 -DefaultReferences null `
 -ExcludeBackup false
```

- Convert the resource to JSON
```powershell
$ImportOptions | ConvertTo-JSON
```


[[Back to top]](#) 

