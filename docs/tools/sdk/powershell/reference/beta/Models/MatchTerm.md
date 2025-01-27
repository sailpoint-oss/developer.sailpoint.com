---
id: match-term
title: MatchTerm
pagination_label: MatchTerm
sidebar_label: MatchTerm
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MatchTerm'] 
slug: /tools/sdk/powershell/beta/models/match-term
tags: ['SDK', 'Software Development Kit', 'MatchTerm']
---


# MatchTerm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The attribute name | [optional] 
**Value** |  Pointer to **String** | The attribute value | [optional] 
**Op** |  Pointer to **String** | The operator between name and value | [optional] 
**Container** |  Pointer to **Boolean** | If it is a container or a real match term | [optional] [default to $false]
**And** |  Pointer to **Boolean** | If it is AND logical operator for the children match terms | [optional] [default to $false]
**Children** |  Pointer to [**[]System.Collections.Hashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The children under this match term | [optional] 

## Examples

- Prepare the resource
```powershell
$MatchTerm = Initialize-PSSailpoint.BetaMatchTerm  -Name mail `
 -Value 1234 Albany Dr `
 -Op eq `
 -Container true `
 -And false `
 -Children [{name&#x3D;businessCategory, value&#x3D;Service, op&#x3D;eq, container&#x3D;false, and&#x3D;false, children&#x3D;null}]
```

- Convert the resource to JSON
```powershell
$MatchTerm | ConvertTo-JSON
```


[[Back to top]](#) 

