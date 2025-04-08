---
id: v2024-identity-attribute1
title: IdentityAttribute1
pagination_label: IdentityAttribute1
sidebar_label: IdentityAttribute1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttribute1', 'V2024IdentityAttribute1'] 
slug: /tools/sdk/powershell/v2024/models/identity-attribute1
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute1', 'V2024IdentityAttribute1']
---


# IdentityAttribute1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The system (camel-cased) name of the identity attribute to bring in | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute1 = Initialize-PSSailpoint.V2024IdentityAttribute1  -Name email `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$IdentityAttribute1 | ConvertTo-JSON
```


[[Back to top]](#) 

