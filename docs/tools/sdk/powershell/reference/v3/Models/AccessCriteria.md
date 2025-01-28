---
id: access-criteria
title: AccessCriteria
pagination_label: AccessCriteria
sidebar_label: AccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessCriteria', 'AccessCriteria'] 
slug: /tools/sdk/powershell/v3/models/access-criteria
tags: ['SDK', 'Software Development Kit', 'AccessCriteria', 'AccessCriteria']
---


# AccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Business name for the access construct list | [optional] 
**CriteriaList** |  Pointer to [**[]AccessCriteriaCriteriaListInner**](access-criteria-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessCriteria = Initialize-PSSailpoint.V3AccessCriteria  -Name money-in `
 -CriteriaList [{type&#x3D;ENTITLEMENT, id&#x3D;2c9180866166b5b0016167c32ef31a66, name&#x3D;Administrator}, {type&#x3D;ENTITLEMENT, id&#x3D;2c9180866166b5b0016167c32ef31a67, name&#x3D;Administrator}]
```

- Convert the resource to JSON
```powershell
$AccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

