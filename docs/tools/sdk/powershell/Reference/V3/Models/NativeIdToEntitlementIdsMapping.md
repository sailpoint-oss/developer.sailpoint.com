---
id: native-id-to-entitlement-ids-mapping
title: NativeIdToEntitlementIdsMapping
pagination_label: NativeIdToEntitlementIdsMapping
sidebar_label: NativeIdToEntitlementIdsMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NativeIdToEntitlementIdsMapping', 'NativeIdToEntitlementIdsMapping'] 
slug: /tools/sdk/powershell/v3/models/native-id-to-entitlement-ids-mapping
tags: ['SDK', 'Software Development Kit', 'NativeIdToEntitlementIdsMapping', 'NativeIdToEntitlementIdsMapping']
---


# NativeIdToEntitlementIdsMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeId** | **String** | The native ID in the source system. | [required]
**EntitlementIds** | **[]String** | The list of entitlement IDs associated with the native ID in the source system. | [required]

## Examples

- Prepare the resource
```powershell
$NativeIdToEntitlementIdsMapping = Initialize-NativeIdToEntitlementIdsMapping  -NativeId jdoe `
 -EntitlementIds null
```

- Convert the resource to JSON
```powershell
$NativeIdToEntitlementIdsMapping | ConvertTo-JSON
```


[[Back to top]](#) 

