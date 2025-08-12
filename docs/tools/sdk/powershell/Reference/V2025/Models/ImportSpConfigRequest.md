---
id: v2025-import-sp-config-request
title: ImportSpConfigRequest
pagination_label: ImportSpConfigRequest
sidebar_label: ImportSpConfigRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportSpConfigRequest', 'V2025ImportSpConfigRequest'] 
slug: /tools/sdk/powershell/v2025/models/import-sp-config-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigRequest', 'V2025ImportSpConfigRequest']
---


# ImportSpConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Options** | [**ImportOptions**](import-options) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportSpConfigRequest = Initialize-V2025ImportSpConfigRequest  -VarData null `
 -Options null
```

- Convert the resource to JSON
```powershell
$ImportSpConfigRequest | ConvertTo-JSON
```


[[Back to top]](#) 

