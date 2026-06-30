---
id: load-bulk-source-subtypes-v1429-response
title: LoadBulkSourceSubtypesV1429Response
pagination_label: LoadBulkSourceSubtypesV1429Response
sidebar_label: LoadBulkSourceSubtypesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadBulkSourceSubtypesV1429Response', 'LoadBulkSourceSubtypesV1429Response'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/load-bulk-source-subtypes-v1429-response
tags: ['SDK', 'Software Development Kit', 'LoadBulkSourceSubtypesV1429Response', 'LoadBulkSourceSubtypesV1429Response']
---


# LoadBulkSourceSubtypesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadBulkSourceSubtypesV1429Response = Initialize-LoadBulkSourceSubtypesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$LoadBulkSourceSubtypesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

