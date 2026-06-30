---
id: rolecriterialevel3
title: Rolecriterialevel3
pagination_label: Rolecriterialevel3
sidebar_label: Rolecriterialevel3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolecriterialevel3', 'Rolecriterialevel3'] 
slug: /tools/sdk/powershell/roles/models/rolecriterialevel3
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel3', 'Rolecriterialevel3']
---


# Rolecriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**Rolecriteriaoperation**](rolecriteriaoperation) |  | [optional] 
**Key** | [**Rolecriteriakey**](rolecriteriakey) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolecriterialevel3 = Initialize-Rolecriterialevel3  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com
```

- Convert the resource to JSON
```powershell
$Rolecriterialevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

