---
id: beta-import-sp-config-request
title: ImportSpConfigRequest
pagination_label: ImportSpConfigRequest
sidebar_label: ImportSpConfigRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportSpConfigRequest', 'BetaImportSpConfigRequest'] 
slug: /tools/sdk/powershell/beta/models/import-sp-config-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigRequest', 'BetaImportSpConfigRequest']
---


# ImportSpConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** |  **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Options** |  Pointer to [**ImportOptions**](import-options) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportSpConfigRequest = Initialize-PSSailpoint.BetaImportSpConfigRequest  -VarData null `
 -Options null
```

- Convert the resource to JSON
```powershell
$ImportSpConfigRequest | ConvertTo-JSON
```


[[Back to top]](#) 

