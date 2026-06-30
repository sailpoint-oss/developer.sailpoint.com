---
id: load-bulk-source-subtypes-v1401-response
title: LoadBulkSourceSubtypesV1401Response
pagination_label: LoadBulkSourceSubtypesV1401Response
sidebar_label: LoadBulkSourceSubtypesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadBulkSourceSubtypesV1401Response', 'LoadBulkSourceSubtypesV1401Response'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/load-bulk-source-subtypes-v1401-response
tags: ['SDK', 'Software Development Kit', 'LoadBulkSourceSubtypesV1401Response', 'LoadBulkSourceSubtypesV1401Response']
---


# LoadBulkSourceSubtypesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadBulkSourceSubtypesV1401Response = Initialize-LoadBulkSourceSubtypesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$LoadBulkSourceSubtypesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

