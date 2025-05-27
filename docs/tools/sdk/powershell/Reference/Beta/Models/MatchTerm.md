---
id: beta-match-term
title: MatchTerm
pagination_label: MatchTerm
sidebar_label: MatchTerm
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MatchTerm', 'BetaMatchTerm'] 
slug: /tools/sdk/powershell/beta/models/match-term
tags: ['SDK', 'Software Development Kit', 'MatchTerm', 'BetaMatchTerm']
---


# MatchTerm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The attribute name | [optional] 
**Value** | **String** | The attribute value | [optional] 
**Op** | **String** | The operator between name and value | [optional] 
**Container** | **Boolean** | If it is a container or a real match term | [optional] [default to $false]
**And** | **Boolean** | If it is AND logical operator for the children match terms | [optional] [default to $false]
**Children** | [**[]System.Collections.Hashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The children under this match term | [optional] 

## Examples

- Prepare the resource
```powershell
$MatchTerm = Initialize-BetaMatchTerm  -Name mail `
 -Value 1234 Albany Dr `
 -Op eq `
 -Container true `
 -And false `
 -Children [{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]
```

- Convert the resource to JSON
```powershell
$MatchTerm | ConvertTo-JSON
```


[[Back to top]](#) 

