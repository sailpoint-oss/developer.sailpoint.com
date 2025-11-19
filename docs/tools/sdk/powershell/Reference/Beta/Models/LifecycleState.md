---
id: beta-lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleState', 'BetaLifecycleState'] 
slug: /tools/sdk/powershell/beta/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState', 'BetaLifecycleState']
---


# LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Lifecycle state ID. | [optional] [readonly] 
**Name** | **String** | Lifecycle state name. | [optional] [readonly] 
**TechnicalName** | **String** | Lifecycle state technical name. This is for internal use. | [optional] [readonly] 
**Description** | **String** | Lifecycle state description. | [optional] 
**Created** | **System.DateTime** | Lifecycle state created date. | [optional] [readonly] 
**Modified** | **System.DateTime** | Lifecycle state modified date. | [optional] [readonly] 
**Enabled** | **Boolean** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to $false]
**IdentityCount** | **Int32** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**EmailNotificationOption** | [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**AccountActions** | [**[]AccountAction**](account-action) |  | [optional] 
**AccessProfileIds** | **[]String** | List of access-profile IDs that are associated with the lifecycle state. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleState = Initialize-BetaLifecycleState  -Id 2c9180835d2e5168015d32f890ca1581 `
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

