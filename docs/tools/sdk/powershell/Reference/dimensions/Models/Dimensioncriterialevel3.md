---
id: dimensioncriterialevel3
title: Dimensioncriterialevel3
pagination_label: Dimensioncriterialevel3
sidebar_label: Dimensioncriterialevel3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensioncriterialevel3', 'Dimensioncriterialevel3'] 
slug: /tools/sdk/powershell/dimensions/models/dimensioncriterialevel3
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel3', 'Dimensioncriterialevel3']
---


# Dimensioncriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**Key** | [**Dimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 

## Examples

- Prepare the resource
```powershell
$Dimensioncriterialevel3 = Initialize-Dimensioncriterialevel3  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com
```

- Convert the resource to JSON
```powershell
$Dimensioncriterialevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

