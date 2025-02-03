---
id: v2024-native-change-detection-config
title: NativeChangeDetectionConfig
pagination_label: NativeChangeDetectionConfig
sidebar_label: NativeChangeDetectionConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NativeChangeDetectionConfig', 'V2024NativeChangeDetectionConfig'] 
slug: /tools/sdk/powershell/v2024/models/native-change-detection-config
tags: ['SDK', 'Software Development Kit', 'NativeChangeDetectionConfig', 'V2024NativeChangeDetectionConfig']
---


# NativeChangeDetectionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** |  Pointer to **Boolean** | A flag indicating if Native Change Detection is enabled for a source. | [optional] [default to $false]
**Operations** |  Pointer to **[]String** | Operation types for which Native Change Detection is enabled for a source. | [optional] 
**AllEntitlements** |  Pointer to **Boolean** | A flag indicating that all entitlements participate in Native Change Detection. | [optional] [default to $false]
**AllNonEntitlementAttributes** |  Pointer to **Boolean** | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [optional] [default to $false]
**SelectedEntitlements** |  Pointer to **[]String** | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [optional] 
**SelectedNonEntitlementAttributes** |  Pointer to **[]String** | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [optional] 

## Examples

- Prepare the resource
```powershell
$NativeChangeDetectionConfig = Initialize-PSSailpoint.V2024NativeChangeDetectionConfig  -Enabled true `
 -Operations [ACCOUNT_UPDATED, ACCOUNT_DELETED] `
 -AllEntitlements false `
 -AllNonEntitlementAttributes false `
 -SelectedEntitlements [memberOf, memberOfSharedMailbox] `
 -SelectedNonEntitlementAttributes [lastName, phoneNumber, objectType, servicePrincipalName]
```

- Convert the resource to JSON
```powershell
$NativeChangeDetectionConfig | ConvertTo-JSON
```


[[Back to top]](#) 

