---
id: v2025-identity-entitlement-details-entitlement-dto
title: IdentityEntitlementDetailsEntitlementDto
pagination_label: IdentityEntitlementDetailsEntitlementDto
sidebar_label: IdentityEntitlementDetailsEntitlementDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityEntitlementDetailsEntitlementDto', 'V2025IdentityEntitlementDetailsEntitlementDto'] 
slug: /tools/sdk/powershell/v2025/models/identity-entitlement-details-entitlement-dto
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetailsEntitlementDto', 'V2025IdentityEntitlementDetailsEntitlementDto']
---


# IdentityEntitlementDetailsEntitlementDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The entitlement id | [optional] 
**Name** | **String** | The entitlement name | [optional] 
**Created** | **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Modified** | **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Description** | **String** | The description of the entitlement | [optional] 
**Type** | **String** | The type of the object, will always be ""ENTITLEMENT"" | [optional] 
**SourceId** | **String** | The source ID | [optional] 
**SourceName** | **String** | The source name | [optional] 
**Owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**Value** | **String** | The value of the entitlement | [optional] 
**Flags** | **[]String** | a list of properties informing the viewer about the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityEntitlementDetailsEntitlementDto = Initialize-V2025IdentityEntitlementDetailsEntitlementDto  -Id 2c91808874ff91550175097daaec161c `
 -Name LauncherTest2 `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Description CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -Type ENTITLEMENT `
 -SourceId 2c9180827ca885d7017ca8ce28a000eb `
 -SourceName ODS-AD-Source `
 -Owner null `
 -Value CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -Flags [privileged]
```

- Convert the resource to JSON
```powershell
$IdentityEntitlementDetailsEntitlementDto | ConvertTo-JSON
```


[[Back to top]](#) 

