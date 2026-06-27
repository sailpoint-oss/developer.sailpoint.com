---
id: rolecriterialevel2
title: Rolecriterialevel2
pagination_label: Rolecriterialevel2
sidebar_label: Rolecriterialevel2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolecriterialevel2', 'Rolecriterialevel2'] 
slug: /tools/sdk/powershell/roles/models/rolecriterialevel2
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel2', 'Rolecriterialevel2']
---


# Rolecriterialevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**Rolecriteriaoperation**](rolecriteriaoperation) |  | [optional] 
**Key** | [**Rolecriteriakey**](rolecriteriakey) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | [**[]Rolecriterialevel3**](rolecriterialevel3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolecriterialevel2 = Initialize-Rolecriterialevel2  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$Rolecriterialevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

