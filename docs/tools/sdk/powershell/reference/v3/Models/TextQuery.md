---
id: text-query
title: TextQuery
pagination_label: TextQuery
sidebar_label: TextQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TextQuery'] 
slug: /tools/sdk/powershell/v3/models/text-query
tags: ['SDK', 'Software Development Kit', 'TextQuery']
---


# TextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** |  **[]String** | Words or characters that specify a particular thing to be searched for. | [required]
**Fields** |  **[]String** | The fields to be searched. | [required]
**MatchAny** |  Pointer to **Boolean** | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [optional] [default to $false]
**Contains** |  Pointer to **Boolean** | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$TextQuery = Initialize-PSSailpoint.V3TextQuery  -Terms [The quick brown fox, 3141592, 7] `
 -Fields [displayName, employeeNumber, roleCount] `
 -MatchAny false `
 -Contains true
```

- Convert the resource to JSON
```powershell
$TextQuery | ConvertTo-JSON
```


[[Back to top]](#) 

