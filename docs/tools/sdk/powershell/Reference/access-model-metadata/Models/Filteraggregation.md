---
id: filteraggregation
title: Filteraggregation
pagination_label: Filteraggregation
sidebar_label: Filteraggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Filteraggregation', 'Filteraggregation'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/filteraggregation
tags: ['SDK', 'Software Development Kit', 'Filteraggregation', 'Filteraggregation']
---


# Filteraggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the filter aggregate to be included in the result. | [required]
**Type** | [**Searchfiltertype**](searchfiltertype) |  | [optional] 
**Field** | **String** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | [required]
**Value** | **String** | The value to filter on. | [required]

## Examples

- Prepare the resource
```powershell
$Filteraggregation = Initialize-Filteraggregation  -Name Entitlements `
 -Type null `
 -Field access.type `
 -Value ENTITLEMENT
```

- Convert the resource to JSON
```powershell
$Filteraggregation | ConvertTo-JSON
```


[[Back to top]](#) 

