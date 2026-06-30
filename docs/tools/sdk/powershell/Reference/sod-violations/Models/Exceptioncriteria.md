---
id: exceptioncriteria
title: Exceptioncriteria
pagination_label: Exceptioncriteria
sidebar_label: Exceptioncriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Exceptioncriteria', 'Exceptioncriteria'] 
slug: /tools/sdk/powershell/sodviolations/models/exceptioncriteria
tags: ['SDK', 'Software Development Kit', 'Exceptioncriteria', 'Exceptioncriteria']
---


# Exceptioncriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** | [**[]ExceptioncriteriaCriteriaListInner**](exceptioncriteria-criteria-list-inner) | List of exception criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Examples

- Prepare the resource
```powershell
$Exceptioncriteria = Initialize-Exceptioncriteria  -CriteriaList [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}]
```

- Convert the resource to JSON
```powershell
$Exceptioncriteria | ConvertTo-JSON
```


[[Back to top]](#) 

