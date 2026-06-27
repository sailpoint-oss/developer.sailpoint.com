---
id: roleminingidentitydistribution
title: Roleminingidentitydistribution
pagination_label: Roleminingidentitydistribution
sidebar_label: Roleminingidentitydistribution
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingidentitydistribution', 'Roleminingidentitydistribution'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingidentitydistribution
tags: ['SDK', 'Software Development Kit', 'Roleminingidentitydistribution', 'Roleminingidentitydistribution']
---


# Roleminingidentitydistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Id of the potential role | [optional] 
**Distribution** | [**[]RoleminingidentitydistributionDistributionInner**](roleminingidentitydistribution-distribution-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingidentitydistribution = Initialize-Roleminingidentitydistribution  -AttributeName department `
 -Distribution null
```

- Convert the resource to JSON
```powershell
$Roleminingidentitydistribution | ConvertTo-JSON
```


[[Back to top]](#) 

