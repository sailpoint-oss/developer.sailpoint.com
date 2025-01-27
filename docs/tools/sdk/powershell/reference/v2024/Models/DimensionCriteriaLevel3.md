---
id: v2024-dimension-criteria-level3
title: DimensionCriteriaLevel3
pagination_label: DimensionCriteriaLevel3
sidebar_label: DimensionCriteriaLevel3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionCriteriaLevel3'] 
slug: /tools/sdk/powershell/v2024/models/dimension-criteria-level3
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel3']
---


# DimensionCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** |  Pointer to [**DimensionCriteriaOperation**](dimension-criteria-operation) |  | [optional] 
**Key** |  Pointer to [**DimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**StringValue** |  Pointer to **String** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionCriteriaLevel3 = Initialize-PSSailpoint.V2024DimensionCriteriaLevel3  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com
```

- Convert the resource to JSON
```powershell
$DimensionCriteriaLevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

