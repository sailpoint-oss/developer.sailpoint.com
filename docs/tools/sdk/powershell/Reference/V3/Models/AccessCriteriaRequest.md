---
id: access-criteria-request
title: AccessCriteriaRequest
pagination_label: AccessCriteriaRequest
sidebar_label: AccessCriteriaRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessCriteriaRequest', 'AccessCriteriaRequest'] 
slug: /tools/sdk/powershell/v3/models/access-criteria-request
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaRequest', 'AccessCriteriaRequest']
---


# AccessCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Business name for the access construct list | [optional] 
**CriteriaList** | [**[]AccessCriteriaRequestCriteriaListInner**](access-criteria-request-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessCriteriaRequest = Initialize-AccessCriteriaRequest  -Name money-in `
 -CriteriaList [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}]
```

- Convert the resource to JSON
```powershell
$AccessCriteriaRequest | ConvertTo-JSON
```


[[Back to top]](#) 

