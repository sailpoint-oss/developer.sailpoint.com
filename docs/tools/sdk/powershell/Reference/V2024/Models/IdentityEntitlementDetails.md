---
id: v2024-identity-entitlement-details
title: IdentityEntitlementDetails
pagination_label: IdentityEntitlementDetails
sidebar_label: IdentityEntitlementDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityEntitlementDetails', 'V2024IdentityEntitlementDetails'] 
slug: /tools/sdk/powershell/v2024/models/identity-entitlement-details
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetails', 'V2024IdentityEntitlementDetails']
---


# IdentityEntitlementDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Id of Identity | [optional] 
**Entitlement** | [**IdentityEntitlementDetailsEntitlementDto**](identity-entitlement-details-entitlement-dto) |  | [optional] 
**SourceId** | **String** | Id of Source | [optional] 
**AccountTargets** | [**[]IdentityEntitlementDetailsAccountTarget**](identity-entitlement-details-account-target) | A list of account targets on the identity provisioned with the requested entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityEntitlementDetails = Initialize-V2024IdentityEntitlementDetails  -IdentityId 5928c61f-3f2e-417a-8d65-f76451e2050a `
 -Entitlement null `
 -SourceId b56728da-a24d-4177-a207-2bc4d42cba27 `
 -AccountTargets [{accountId=e7ef11cee24542b78618ce017117699f, accountName=Adalberto.XYZ, accountUUID=null, sourceId=0108906b66634d9ab7819a03eb263a88, sourceName=ODS-AD-FF-Source [source-XYZ], removeDate=null, assignmentId=null, revocable=true}]
```

- Convert the resource to JSON
```powershell
$IdentityEntitlementDetails | ConvertTo-JSON
```


[[Back to top]](#) 

