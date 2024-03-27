---
id: random-numeric
title: RandomNumeric
pagination_label: RandomNumeric
sidebar_label: RandomNumeric
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RandomNumeric'] 
slug: /tools/sdk/powershell/v3/models/random-numeric
tags: ['SDK', 'Software Development Kit', 'RandomNumeric']
---


# RandomNumeric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Length** |  Pointer to **String** | This is an integer value specifying the size/number of characters the random string must contain   * This value must be a positive number and cannot be blank   * If no length is provided, the transform will default to a value of &#x60;32&#x60;   * Due to identity attribute data constraints, the maximum allowable value is &#x60;450&#x60; characters  | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$RandomNumeric = Initialize-PSSailpointRandomNumeric  -Length 10 `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$RandomNumeric | ConvertTo-JSON
```


[[Back to top]](#) 

