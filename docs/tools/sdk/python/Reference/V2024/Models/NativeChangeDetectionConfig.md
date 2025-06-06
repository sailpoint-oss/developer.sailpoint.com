---
id: v2024-native-change-detection-config
title: NativeChangeDetectionConfig
pagination_label: NativeChangeDetectionConfig
sidebar_label: NativeChangeDetectionConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NativeChangeDetectionConfig', 'V2024NativeChangeDetectionConfig'] 
slug: /tools/sdk/python/v2024/models/native-change-detection-config
tags: ['SDK', 'Software Development Kit', 'NativeChangeDetectionConfig', 'V2024NativeChangeDetectionConfig']
---

# NativeChangeDetectionConfig

Source configuration information for Native Change Detection that is read and used by account aggregation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | A flag indicating if Native Change Detection is enabled for a source. | [optional] [default to False]
**operations** | **[]str** | Operation types for which Native Change Detection is enabled for a source. | [optional] 
**all_entitlements** | **bool** | A flag indicating that all entitlements participate in Native Change Detection. | [optional] [default to False]
**all_non_entitlement_attributes** | **bool** | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [optional] [default to False]
**selected_entitlements** | **[]str** | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [optional] 
**selected_non_entitlement_attributes** | **[]str** | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.native_change_detection_config import NativeChangeDetectionConfig

native_change_detection_config = NativeChangeDetectionConfig(
enabled=True,
operations=[ACCOUNT_UPDATED, ACCOUNT_DELETED],
all_entitlements=False,
all_non_entitlement_attributes=False,
selected_entitlements=[memberOf, memberOfSharedMailbox],
selected_non_entitlement_attributes=[lastName, phoneNumber, objectType, servicePrincipalName]
)

```
[[Back to top]](#) 

