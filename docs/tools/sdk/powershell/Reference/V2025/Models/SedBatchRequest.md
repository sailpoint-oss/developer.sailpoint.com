---
id: v2025-sed-batch-request
title: SedBatchRequest
pagination_label: SedBatchRequest
sidebar_label: SedBatchRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedBatchRequest', 'V2025SedBatchRequest'] 
slug: /tools/sdk/powershell/v2025/models/sed-batch-request
tags: ['SDK', 'Software Development Kit', 'SedBatchRequest', 'V2025SedBatchRequest']
---


# SedBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | list of entitlement ids | [optional] 
**Seds** | **[]String** | list of sed ids | [optional] 
**SearchCriteria** | [**map[string]SearchCriteria**](search-criteria) | Search criteria for the batch request. | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchRequest = Initialize-V2025SedBatchRequest  -Entitlements null `
 -Seds null `
 -SearchCriteria null
```

- Convert the resource to JSON
```powershell
$SedBatchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

