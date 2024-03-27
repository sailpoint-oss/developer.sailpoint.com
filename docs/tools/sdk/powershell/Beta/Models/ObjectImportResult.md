---
id: object-import-result
title: ObjectImportResult
pagination_label: ObjectImportResult
sidebar_label: ObjectImportResult
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ObjectImportResult'] 
slug: /tools/sdk/powershell/beta/models/object-import-result
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult']
---


# ObjectImportResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** |  [**[]SpConfigMessage**](sp-config-message) | Informational messages returned from the target service on import. | 
**Warnings** |  [**[]SpConfigMessage**](sp-config-message) | Warning messages returned from the target service on import. | 
**Errors** |  [**[]SpConfigMessage**](sp-config-message) | Error messages returned from the target service on import. | 
**ImportedObjects** |  [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | 

## Examples

- Prepare the resource
```powershell
$ObjectImportResult = Initialize-PSSailpointBetaObjectImportResult  -Infos null `
 -Warnings null `
 -Errors null `
 -ImportedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectImportResult | ConvertTo-JSON
```


[[Back to top]](#) 

