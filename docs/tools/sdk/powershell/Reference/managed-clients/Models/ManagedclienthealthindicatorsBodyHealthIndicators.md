---
id: managedclienthealthindicators-body-health-indicators
title: ManagedclienthealthindicatorsBodyHealthIndicators
pagination_label: ManagedclienthealthindicatorsBodyHealthIndicators
sidebar_label: ManagedclienthealthindicatorsBodyHealthIndicators
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedclienthealthindicatorsBodyHealthIndicators', 'ManagedclienthealthindicatorsBodyHealthIndicators'] 
slug: /tools/sdk/powershell/managedclients/models/managedclienthealthindicators-body-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedclienthealthindicatorsBodyHealthIndicators', 'ManagedclienthealthindicatorsBodyHealthIndicators']
---


# ManagedclienthealthindicatorsBodyHealthIndicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Container** | [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
**Memory** | [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
**Cpu** | [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedclienthealthindicatorsBodyHealthIndicators = Initialize-ManagedclienthealthindicatorsBodyHealthIndicators  -Container null `
 -Memory null `
 -Cpu null
```

- Convert the resource to JSON
```powershell
$ManagedclienthealthindicatorsBodyHealthIndicators | ConvertTo-JSON
```


[[Back to top]](#) 

