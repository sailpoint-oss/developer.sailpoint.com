---
id: object-import-result1
title: ObjectImportResult1
pagination_label: ObjectImportResult1
sidebar_label: ObjectImportResult1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectImportResult1'] 
slug: /tools/sdk/powershell/v2024/models/object-import-result1
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult1']
---


# ObjectImportResult1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** |  [**[]SpConfigMessage1**](sp-config-message1) | Informational messages returned from the target service on import. | [required]
**Warnings** |  [**[]SpConfigMessage1**](sp-config-message1) | Warning messages returned from the target service on import. | [required]
**Errors** |  [**[]SpConfigMessage1**](sp-config-message1) | Error messages returned from the target service on import. | [required]
**ImportedObjects** |  [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | [required]

## Examples

- Prepare the resource
```powershell
$ObjectImportResult1 = Initialize-PSSailpoint.V2024ObjectImportResult1  -Infos null `
 -Warnings null `
 -Errors null `
 -ImportedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectImportResult1 | ConvertTo-JSON
```


[[Back to top]](#) 

