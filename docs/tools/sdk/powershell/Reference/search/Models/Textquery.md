---
id: textquery
title: Textquery
pagination_label: Textquery
sidebar_label: Textquery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Textquery', 'Textquery'] 
slug: /tools/sdk/powershell/search/models/textquery
tags: ['SDK', 'Software Development Kit', 'Textquery', 'Textquery']
---


# Textquery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | **[]String** | Words or characters that specify a particular thing to be searched for. | [required]
**Fields** | **[]String** | The fields to be searched. | [required]
**MatchAny** | **Boolean** | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [optional] [default to $false]
**Contains** | **Boolean** | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Textquery = Initialize-Textquery  -Terms ["The quick brown fox","3141592","7"] `
 -Fields ["displayName","employeeNumber","roleCount"] `
 -MatchAny false `
 -Contains true
```

- Convert the resource to JSON
```powershell
$Textquery | ConvertTo-JSON
```


[[Back to top]](#) 

