---
id: dimensioncriterialevel2
title: Dimensioncriterialevel2
pagination_label: Dimensioncriterialevel2
sidebar_label: Dimensioncriterialevel2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensioncriterialevel2', 'Dimensioncriterialevel2'] 
slug: /tools/sdk/powershell/dimensions/models/dimensioncriterialevel2
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel2', 'Dimensioncriterialevel2']
---


# Dimensioncriterialevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**Key** | [**Dimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | [**[]Dimensioncriterialevel3**](dimensioncriterialevel3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Examples

- Prepare the resource
```powershell
$Dimensioncriterialevel2 = Initialize-Dimensioncriterialevel2  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$Dimensioncriterialevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

