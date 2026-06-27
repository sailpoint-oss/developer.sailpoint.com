---
id: export-sp-config-v1401-response
title: ExportSpConfigV1401Response
pagination_label: ExportSpConfigV1401Response
sidebar_label: ExportSpConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportSpConfigV1401Response', 'ExportSpConfigV1401Response'] 
slug: /tools/sdk/powershell/spconfig/models/export-sp-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'ExportSpConfigV1401Response', 'ExportSpConfigV1401Response']
---


# ExportSpConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportSpConfigV1401Response = Initialize-ExportSpConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ExportSpConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

