---
id: lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleState'] 
slug: /tools/sdk/powershell/v2024/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState']
---


# LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | [required]
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Enabled** |  Pointer to **Boolean** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to $false]
**TechnicalName** |  **String** | The lifecycle state's technical name. This is for internal use. | [required]
**Description** |  Pointer to **String** | Lifecycle state's description. | [optional] 
**IdentityCount** |  Pointer to **Int32** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**EmailNotificationOption** |  Pointer to [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**AccountActions** |  Pointer to [**[]AccountAction**](account-action) |  | [optional] 
**AccessProfileIds** |  Pointer to **[]String** | List of unique access-profile IDs that are associated with the lifecycle state. | [optional] 
**IdentityState** |  Pointer to **String** | The lifecycle state's associated identity state. This field is generally 'null'. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleState = Initialize-PSSailpoint.V2024LifecycleState  -Id id12345 `
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
 -IdentityState null
```

- Convert the resource to JSON
```powershell
$LifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

