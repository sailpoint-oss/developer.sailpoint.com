---
id: column
title: Column
pagination_label: Column
sidebar_label: Column
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Column'] 
slug: /tools/sdk/powershell/v3/models/column
tags: ['SDK', 'Software Development Kit', 'Column']
---


# Column

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** |  **String** | The name of the field.  | [required]
**Header** |  Pointer to **String** | The value of the header.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Column = Initialize-PSSailpoint.V3Column  -Field email `
 -Header Work Email
```

- Convert the resource to JSON
```powershell
$Column | ConvertTo-JSON
```


[[Back to top]](#) 

