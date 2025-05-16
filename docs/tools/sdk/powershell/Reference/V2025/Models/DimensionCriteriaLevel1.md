---
id: v2025-dimension-criteria-level1
title: DimensionCriteriaLevel1
pagination_label: DimensionCriteriaLevel1
sidebar_label: DimensionCriteriaLevel1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionCriteriaLevel1', 'V2025DimensionCriteriaLevel1'] 
slug: /tools/sdk/powershell/v2025/models/dimension-criteria-level1
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel1', 'V2025DimensionCriteriaLevel1']
---


# DimensionCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**DimensionCriteriaOperation**](dimension-criteria-operation) |  | [optional] 
**Key** | [**DimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | [**[]DimensionCriteriaLevel2**](dimension-criteria-level2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionCriteriaLevel1 = Initialize-V2025DimensionCriteriaLevel1  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$DimensionCriteriaLevel1 | ConvertTo-JSON
```


[[Back to top]](#) 

