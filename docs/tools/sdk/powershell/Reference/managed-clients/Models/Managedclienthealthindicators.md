---
id: managedclienthealthindicators
title: Managedclienthealthindicators
pagination_label: Managedclienthealthindicators
sidebar_label: Managedclienthealthindicators
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclienthealthindicators', 'Managedclienthealthindicators'] 
slug: /tools/sdk/powershell/managedclients/models/managedclienthealthindicators
tags: ['SDK', 'Software Development Kit', 'Managedclienthealthindicators', 'Managedclienthealthindicators']
---


# Managedclienthealthindicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | [**ManagedclienthealthindicatorsBody**](managedclienthealthindicators-body) |  | [required]
**Status** |  **Enum** [  "NORMAL",    "UNDEFINED",    "WARNING",    "ERROR",    "FAILED" ] | Top-level status of the Managed Client | [required]
**Type** |  **Enum** [  "VA",    "CCG" ] | Type of the Managed Client | [required]
**Timestamp** | **System.DateTime** | Timestamp when this report was generated | [required]

## Examples

- Prepare the resource
```powershell
$Managedclienthealthindicators = Initialize-Managedclienthealthindicators  -Body null `
 -Status NORMAL `
 -Type VA `
 -Timestamp 2025-08-06T07:35:28.722300Z
```

- Convert the resource to JSON
```powershell
$Managedclienthealthindicators | ConvertTo-JSON
```


[[Back to top]](#) 

