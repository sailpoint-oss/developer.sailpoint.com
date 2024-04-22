---
id: sed-batch-request
title: SedBatchRequest
pagination_label: SedBatchRequest
sidebar_label: SedBatchRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SedBatchRequest'] 
slug: /tools/sdk/powershell/beta/models/sed-batch-request
tags: ['SDK', 'Software Development Kit', 'SedBatchRequest']
---


# SedBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** |  Pointer to **[]String** | list of entitlement ids | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchRequest = Initialize-BetaSedBatchRequest  -Entitlements null
```

- Convert the resource to JSON
```powershell
$SedBatchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

