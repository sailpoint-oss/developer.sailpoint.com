---
id: accesscriteria
title: Accesscriteria
pagination_label: Accesscriteria
sidebar_label: Accesscriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accesscriteria', 'Accesscriteria'] 
slug: /tools/sdk/powershell/sodpolicies/models/accesscriteria
tags: ['SDK', 'Software Development Kit', 'Accesscriteria', 'Accesscriteria']
---


# Accesscriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Business name for the access construct list | [optional] 
**CriteriaList** | [**[]AccesscriteriaCriteriaListInner**](accesscriteria-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accesscriteria = Initialize-Accesscriteria  -Name money-in `
 -CriteriaList [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}]
```

- Convert the resource to JSON
```powershell
$Accesscriteria | ConvertTo-JSON
```


[[Back to top]](#) 

