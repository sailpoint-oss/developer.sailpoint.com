---
id: v2024-identity-entitlement-details-account-target
title: IdentityEntitlementDetailsAccountTarget
pagination_label: IdentityEntitlementDetailsAccountTarget
sidebar_label: IdentityEntitlementDetailsAccountTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityEntitlementDetailsAccountTarget', 'V2024IdentityEntitlementDetailsAccountTarget'] 
slug: /tools/sdk/powershell/v2024/models/identity-entitlement-details-account-target
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetailsAccountTarget', 'V2024IdentityEntitlementDetailsAccountTarget']
---


# IdentityEntitlementDetailsAccountTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | The id of account | [optional] 
**AccountName** | **String** | The name of account | [optional] 
**AccountUUID** | **String** | The UUID representation of the account if available | [optional] 
**SourceId** | **String** | The id of Source | [optional] 
**SourceName** | **String** | The name of Source | [optional] 
**RemoveDate** | **String** | The removal date scheduled for the entitlement on the Identity | [optional] 
**AssignmentId** | **String** | The assignmentId of the entitlement on the Identity | [optional] 
**Revocable** | **Boolean** | If the entitlement can be revoked | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$IdentityEntitlementDetailsAccountTarget = Initialize-V2024IdentityEntitlementDetailsAccountTarget  -AccountId c5ef070e-92c6-4276-a006-98490f132dec `
 -AccountName Adalberto.XYZ `
 -AccountUUID 2236c29e-68a6-494d-a469-d072172f46cf `
 -SourceId 9269d764-8358-4ab9-9748-d4b7418548ca `
 -SourceName JDBC XYZ Source `
 -RemoveDate 2035-01-01T12:00:00.000Z `
 -AssignmentId 77a5b7b4-262f-4b6a-a2aa-87f84f45f96f `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$IdentityEntitlementDetailsAccountTarget | ConvertTo-JSON
```


[[Back to top]](#) 

