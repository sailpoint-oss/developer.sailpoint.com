---
id: v2025-lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleState', 'V2025LifecycleState'] 
slug: /tools/sdk/powershell/v2025/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState', 'V2025LifecycleState']
---


# LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Enabled** | **Boolean** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to $false]
**TechnicalName** | **String** | The lifecycle state's technical name. This is for internal use. | [required]
**Description** | **String** | Lifecycle state's description. | [optional] 
**IdentityCount** | **Int32** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**EmailNotificationOption** | [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**AccountActions** | [**[]AccountAction**](account-action) |  | [optional] 
**AccessProfileIds** | **[]String** | List of unique access-profile IDs that are associated with the lifecycle state. | [optional] 
**IdentityState** |  **Enum** [  "ACTIVE",    "INACTIVE_SHORT_TERM",    "INACTIVE_LONG_TERM" ] | The lifecycle state's associated identity state. This field is generally 'null'. | [optional] 
**AccessActionConfiguration** | [**AccessActionConfiguration**](access-action-configuration) |  | [optional] 
**Priority** | **Int32** | Priority level used to determine which profile to assign when a user exists in multiple profiles. Lower numeric values have higher priority.  By default, new profiles are assigned the lowest priority. The assigned profile also controls access granted or removed during provisioning based on lifecycle state changes. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleState = Initialize-V2025LifecycleState  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Enabled true `
 -TechnicalName Technical Name `
 -Description Lifecycle description `
 -IdentityCount 42 `
 -EmailNotificationOption null `
 -AccountActions null `
 -AccessProfileIds [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500] `
 -IdentityState INACTIVE_LONG_TERM `
 -AccessActionConfiguration null `
 -Priority 10
```

- Convert the resource to JSON
```powershell
$LifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

