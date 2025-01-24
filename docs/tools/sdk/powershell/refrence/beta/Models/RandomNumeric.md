---
id: random-numeric
title: RandomNumeric
pagination_label: RandomNumeric
sidebar_label: RandomNumeric
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RandomNumeric'] 
slug: /tools/sdk/powershell/beta/models/random-numeric
tags: ['SDK', 'Software Development Kit', 'RandomNumeric']
---


# RandomNumeric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Length** |  Pointer to **String** | This is an integer value specifying the size/number of characters the random string must contain   * This value must be a positive number and cannot be blank   * If no length is provided, the transform will default to a value of `32`   * Due to identity attribute data constraints, the maximum allowable value is `450` characters  | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$RandomNumeric = Initialize-PSSailpoint.BetaRandomNumeric  -Length 10 `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$RandomNumeric | ConvertTo-JSON
```


[[Back to top]](#) 

