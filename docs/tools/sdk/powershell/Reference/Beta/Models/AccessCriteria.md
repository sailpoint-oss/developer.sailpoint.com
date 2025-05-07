---
id: beta-access-criteria
title: AccessCriteria
pagination_label: AccessCriteria
sidebar_label: AccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessCriteria', 'BetaAccessCriteria'] 
slug: /tools/sdk/powershell/beta/models/access-criteria
tags: ['SDK', 'Software Development Kit', 'AccessCriteria', 'BetaAccessCriteria']
---


# AccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Business name for the access construct list | [optional] 
**CriteriaList** | [**[]AccessCriteriaCriteriaListInner**](access-criteria-criteria-list-inner) | List of criteria.  There is a min of 1 and max of 50 items in the list. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessCriteria = Initialize-BetaAccessCriteria  -Name money-in `
 -CriteriaList [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}]
```

- Convert the resource to JSON
```powershell
$AccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

