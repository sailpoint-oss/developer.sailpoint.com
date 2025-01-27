---
id: beta-lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleState'] 
slug: /tools/sdk/powershell/beta/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState']
---


# LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Lifecycle state ID. | [optional] [readonly] 
**Name** |  Pointer to **String** | Lifecycle state name. | [optional] [readonly] 
**TechnicalName** |  Pointer to **String** | Lifecycle state technical name. This is for internal use. | [optional] [readonly] 
**Description** |  Pointer to **String** | Lifecycle state description. | [optional] 
**Created** |  Pointer to **System.DateTime** | Lifecycle state created date. | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Lifecycle state modified date. | [optional] [readonly] 
**Enabled** |  Pointer to **Boolean** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to $false]
**IdentityCount** |  Pointer to **Int32** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**EmailNotificationOption** |  Pointer to [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**AccountActions** |  Pointer to [**[]AccountAction**](account-action) |  | [optional] 
**AccessProfileIds** |  Pointer to **[]String** | List of access-profile IDs that are associated with the lifecycle state. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleState = Initialize-PSSailpoint.BetaLifecycleState  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Lifecycle Name `
 -TechnicalName lifecycleTechnicalName `
 -Description LifecycleDescription `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Enabled true `
 -IdentityCount 12 `
 -EmailNotificationOption null `
 -AccountActions null `
 -AccessProfileIds [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500]
```

- Convert the resource to JSON
```powershell
$LifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

