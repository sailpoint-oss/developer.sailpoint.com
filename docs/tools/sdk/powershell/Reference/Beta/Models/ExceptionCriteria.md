---
id: beta-exception-criteria
title: ExceptionCriteria
pagination_label: ExceptionCriteria
sidebar_label: ExceptionCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExceptionCriteria', 'BetaExceptionCriteria'] 
slug: /tools/sdk/powershell/beta/models/exception-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteria', 'BetaExceptionCriteria']
---


# ExceptionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** | [**[]ExceptionCriteriaCriteriaListInner**](exception-criteria-criteria-list-inner) | List of exception criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Examples

- Prepare the resource
```powershell
$ExceptionCriteria = Initialize-BetaExceptionCriteria  -CriteriaList [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, existing=true}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, existing=false}]
```

- Convert the resource to JSON
```powershell
$ExceptionCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

