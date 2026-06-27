---
id: appaccessprofileselector-account-match-config-match-expression
title: AppaccessprofileselectorAccountMatchConfigMatchExpression
pagination_label: AppaccessprofileselectorAccountMatchConfigMatchExpression
sidebar_label: AppaccessprofileselectorAccountMatchConfigMatchExpression
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AppaccessprofileselectorAccountMatchConfigMatchExpression', 'AppaccessprofileselectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/powershell/apps/models/appaccessprofileselector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'AppaccessprofileselectorAccountMatchConfigMatchExpression', 'AppaccessprofileselectorAccountMatchConfigMatchExpression']
---


# AppaccessprofileselectorAccountMatchConfigMatchExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchTerms** | [**[]Matchterm**](matchterm) |  | [optional] 
**And** | **Boolean** | If it is AND operators for match terms | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$AppaccessprofileselectorAccountMatchConfigMatchExpression = Initialize-AppaccessprofileselectorAccountMatchConfigMatchExpression  -MatchTerms [{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}] `
 -And true
```

- Convert the resource to JSON
```powershell
$AppaccessprofileselectorAccountMatchConfigMatchExpression | ConvertTo-JSON
```


[[Back to top]](#) 

