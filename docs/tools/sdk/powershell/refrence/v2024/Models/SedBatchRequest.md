---
id: sed-batch-request
title: SedBatchRequest
pagination_label: SedBatchRequest
sidebar_label: SedBatchRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedBatchRequest'] 
slug: /tools/sdk/powershell/v2024/models/sed-batch-request
tags: ['SDK', 'Software Development Kit', 'SedBatchRequest']
---


# SedBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** |  Pointer to **[]String** | list of entitlement ids | [optional] 
**Seds** |  Pointer to **[]String** | list of sed ids | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchRequest = Initialize-PSSailpoint.V2024SedBatchRequest  -Entitlements null `
 -Seds null
```

- Convert the resource to JSON
```powershell
$SedBatchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

