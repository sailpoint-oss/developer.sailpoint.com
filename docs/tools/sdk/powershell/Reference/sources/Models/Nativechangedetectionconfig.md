---
id: nativechangedetectionconfig
title: Nativechangedetectionconfig
pagination_label: Nativechangedetectionconfig
sidebar_label: Nativechangedetectionconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nativechangedetectionconfig', 'Nativechangedetectionconfig'] 
slug: /tools/sdk/powershell/sources/models/nativechangedetectionconfig
tags: ['SDK', 'Software Development Kit', 'Nativechangedetectionconfig', 'Nativechangedetectionconfig']
---


# Nativechangedetectionconfig

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
$Nativechangedetectionconfig = Initialize-Nativechangedetectionconfig  -Enabled true `
 -Operations ["ACCOUNT_UPDATED","ACCOUNT_DELETED"] `
 -AllEntitlements false `
 -AllNonEntitlementAttributes false `
 -SelectedEntitlements ["memberOf","memberOfSharedMailbox"] `
 -SelectedNonEntitlementAttributes ["lastName","phoneNumber","objectType","servicePrincipalName"]
```

- Convert the resource to JSON
```powershell
$Nativechangedetectionconfig | ConvertTo-JSON
```


[[Back to top]](#) 

