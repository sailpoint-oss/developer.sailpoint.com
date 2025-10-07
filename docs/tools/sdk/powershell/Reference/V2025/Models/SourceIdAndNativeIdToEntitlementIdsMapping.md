---
id: v2025-source-id-and-native-id-to-entitlement-ids-mapping
title: SourceIdAndNativeIdToEntitlementIdsMapping
pagination_label: SourceIdAndNativeIdToEntitlementIdsMapping
sidebar_label: SourceIdAndNativeIdToEntitlementIdsMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceIdAndNativeIdToEntitlementIdsMapping', 'V2025SourceIdAndNativeIdToEntitlementIdsMapping'] 
slug: /tools/sdk/powershell/v2025/models/source-id-and-native-id-to-entitlement-ids-mapping
tags: ['SDK', 'Software Development Kit', 'SourceIdAndNativeIdToEntitlementIdsMapping', 'V2025SourceIdAndNativeIdToEntitlementIdsMapping']
---


# SourceIdAndNativeIdToEntitlementIdsMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The ID of the source system. | [required]
**NativeIdToEntitlementIdsMappings** | [**[]NativeIdToEntitlementIdsMapping**](native-id-to-entitlement-ids-mapping) | The native ID and entitlement IDs mapping in the source system. | [required]

## Examples

- Prepare the resource
```powershell
$SourceIdAndNativeIdToEntitlementIdsMapping = Initialize-V2025SourceIdAndNativeIdToEntitlementIdsMapping  -SourceId 2c91809773dee32014e13e122092014e `
 -NativeIdToEntitlementIdsMappings null
```

- Convert the resource to JSON
```powershell
$SourceIdAndNativeIdToEntitlementIdsMapping | ConvertTo-JSON
```


[[Back to top]](#) 

