---
id: beta-native-change-detection-config
title: NativeChangeDetectionConfig
pagination_label: NativeChangeDetectionConfig
sidebar_label: NativeChangeDetectionConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NativeChangeDetectionConfig', 'BetaNativeChangeDetectionConfig'] 
slug: /tools/sdk/powershell/beta/models/native-change-detection-config
tags: ['SDK', 'Software Development Kit', 'NativeChangeDetectionConfig', 'BetaNativeChangeDetectionConfig']
---


# NativeChangeDetectionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | A flag indicating if Native Change Detection is enabled for a source. | [optional] [default to $false]
**Operations** | **[]String** | Operation types for which Native Change Detection is enabled for a source. | [optional] 
**AllEntitlements** | **Boolean** | A flag indicating that all entitlements participate in Native Change Detection. | [optional] [default to $false]
**AllNonEntitlementAttributes** | **Boolean** | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [optional] [default to $false]
**SelectedEntitlements** | **[]String** | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [optional] 
**SelectedNonEntitlementAttributes** | **[]String** | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [optional] 

## Examples

- Prepare the resource
```powershell
$NativeChangeDetectionConfig = Initialize-BetaNativeChangeDetectionConfig  -Enabled true `
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

