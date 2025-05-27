---
id: column
title: Column
pagination_label: Column
sidebar_label: Column
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Column', 'Column'] 
slug: /tools/sdk/powershell/v3/models/column
tags: ['SDK', 'Software Development Kit', 'Column', 'Column']
---


# Column

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** | **String** | The name of the field.  | [required]
**Header** | **String** | The value of the header.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Column = Initialize-Column  -Field email `
 -Header Work Email
```

- Convert the resource to JSON
```powershell
$Column | ConvertTo-JSON
```


[[Back to top]](#) 

