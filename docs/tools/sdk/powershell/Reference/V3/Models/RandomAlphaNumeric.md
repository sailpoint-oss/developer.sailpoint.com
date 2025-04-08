---
id: random-alpha-numeric
title: RandomAlphaNumeric
pagination_label: RandomAlphaNumeric
sidebar_label: RandomAlphaNumeric
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RandomAlphaNumeric', 'RandomAlphaNumeric'] 
slug: /tools/sdk/powershell/v3/models/random-alpha-numeric
tags: ['SDK', 'Software Development Kit', 'RandomAlphaNumeric', 'RandomAlphaNumeric']
---


# RandomAlphaNumeric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Length** | **String** | This is an integer value specifying the size/number of characters the random string must contain   * This value must be a positive number and cannot be blank   * If no length is provided, the transform will default to a value of `32`   * Due to identity attribute data constraints, the maximum allowable value is `450` characters  | [optional] 
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$RandomAlphaNumeric = Initialize-PSSailpoint.V3RandomAlphaNumeric  -Length 10 `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$RandomAlphaNumeric | ConvertTo-JSON
```


[[Back to top]](#) 

