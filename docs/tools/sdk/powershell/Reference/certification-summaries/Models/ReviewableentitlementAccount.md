---
id: reviewableentitlement-account
title: ReviewableentitlementAccount
pagination_label: ReviewableentitlementAccount
sidebar_label: ReviewableentitlementAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableentitlementAccount', 'ReviewableentitlementAccount'] 
slug: /tools/sdk/powershell/certificationsummaries/models/reviewableentitlement-account
tags: ['SDK', 'Software Development Kit', 'ReviewableentitlementAccount', 'ReviewableentitlementAccount']
---


# ReviewableentitlementAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeIdentity** | **String** | The native identity for this account | [optional] 
**Disabled** | **Boolean** | Indicates whether this account is currently disabled | [optional] [default to $false]
**Locked** | **Boolean** | Indicates whether this account is currently locked | [optional] [default to $false]
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | The id associated with the account | [optional] 
**Name** | **String** | The account name | [optional] 
**Created** | **System.DateTime** | When the account was created | [optional] 
**Modified** | **System.DateTime** | When the account was last modified | [optional] 
**ActivityInsights** | [**Activityinsights**](activityinsights) |  | [optional] 
**Description** | **String** | Information about the account | [optional] 
**GovernanceGroupId** | **String** | The id associated with the machine Account Governance Group | [optional] 
**Owner** | [**ReviewableentitlementAccountOwner**](reviewableentitlement-account-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableentitlementAccount = Initialize-ReviewableentitlementAccount  -NativeIdentity CN=Alison Ferguso `
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
$ReviewableentitlementAccount | ConvertTo-JSON
```


[[Back to top]](#) 

