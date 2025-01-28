---
id: v2024-reviewable-entitlement-account
title: ReviewableEntitlementAccount
pagination_label: ReviewableEntitlementAccount
sidebar_label: ReviewableEntitlementAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableEntitlementAccount'] 
slug: /tools/sdk/powershell/v2024/models/reviewable-entitlement-account
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlementAccount']
---


# ReviewableEntitlementAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeIdentity** |  Pointer to **String** | The native identity for this account | [optional] 
**Disabled** |  Pointer to **Boolean** | Indicates whether this account is currently disabled | [optional] [default to $false]
**Locked** |  Pointer to **Boolean** | Indicates whether this account is currently locked | [optional] [default to $false]
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | The id associated with the account | [optional] 
**Name** |  Pointer to **String** | The account name | [optional] 
**Created** |  Pointer to **System.DateTime** | When the account was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the account was last modified | [optional] 
**ActivityInsights** |  Pointer to [**ActivityInsights**](activity-insights) |  | [optional] 
**Description** |  Pointer to **String** | Information about the account | [optional] 
**GovernanceGroupId** |  Pointer to **String** | The id associated with the machine Account Governance Group | [optional] 
**Owner** |  Pointer to [**ReviewableEntitlementAccountOwner**](reviewable-entitlement-account-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableEntitlementAccount = Initialize-PSSailpoint.V2024ReviewableEntitlementAccount  -NativeIdentity CN&#x3D;Alison Ferguso `
 -Disabled false `
 -Locked false `
 -Type null `
 -Id 2c9180857182305e0171993737eb29e6 `
 -Name Alison Ferguso `
 -Created 2020-04-20T20:11:05.067Z `
 -Modified 2020-05-20T18:57:16.987Z `
 -ActivityInsights null `
 -Description Account for Read/write to the company database `
 -GovernanceGroupId 2c9180857182305e0171993737eb29e6 `
 -Owner null
```

- Convert the resource to JSON
```powershell
$ReviewableEntitlementAccount | ConvertTo-JSON
```


[[Back to top]](#) 

