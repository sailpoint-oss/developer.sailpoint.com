---
id: e164phone
title: E164phone
pagination_label: E164phone
sidebar_label: E164phone
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'E164phone'] 
slug: /tools/sdk/powershell/beta/models/e164phone
tags: ['SDK', 'Software Development Kit', 'E164phone']
---


# E164phone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultRegion** |  Pointer to **String** | This is an optional attribute that can be used to define the region of the phone number to format into.   If defaultRegion is not provided, it will take US as the default country.   The format of the country code should be in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)  | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$E164phone = Initialize-PSSailpoint.BetaE164phone  -DefaultRegion US `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$E164phone | ConvertTo-JSON
```


[[Back to top]](#) 

