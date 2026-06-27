---
id: import-sp-config-v1-request
title: ImportSpConfigV1Request
pagination_label: ImportSpConfigV1Request
sidebar_label: ImportSpConfigV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportSpConfigV1Request', 'ImportSpConfigV1Request'] 
slug: /tools/sdk/powershell/spconfig/models/import-sp-config-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigV1Request', 'ImportSpConfigV1Request']
---


# ImportSpConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Options** | [**Importoptions**](importoptions) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportSpConfigV1Request = Initialize-ImportSpConfigV1Request  -VarData null `
 -Options null
```

- Convert the resource to JSON
```powershell
$ImportSpConfigV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

