---
id: beta-account-activity-item
title: AccountActivityItem
pagination_label: AccountActivityItem
sidebar_label: AccountActivityItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountActivityItem', 'BetaAccountActivityItem'] 
slug: /tools/sdk/powershell/beta/models/account-activity-item
tags: ['SDK', 'Software Development Kit', 'AccountActivityItem', 'BetaAccountActivityItem']
---


# AccountActivityItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Item id | [optional] 
**Name** | **String** | Human-readable display name of item | [optional] 
**Requested** | **System.DateTime** | Date and time item was requested | [optional] 
**ApprovalStatus** | [**AccountActivityApprovalStatus**](account-activity-approval-status) |  | [optional] 
**ProvisioningStatus** | [**ProvisioningState**](provisioning-state) |  | [optional] 
**RequesterComment** | [**Comment**](comment) |  | [optional] 
**ReviewerIdentitySummary** | [**IdentitySummary**](identity-summary) |  | [optional] 
**ReviewerComment** | [**Comment**](comment) |  | [optional] 
**Operation** | [**AccountActivityItemOperation**](account-activity-item-operation) |  | [optional] 
**Attribute** | **String** | Attribute to which account activity applies | [optional] 
**Value** | **String** | Value of attribute | [optional] 
**NativeIdentity** | **String** | Native identity in the target system to which the account activity applies | [optional] 
**SourceId** | **String** | Id of Source to which account activity applies | [optional] 
**AccountRequestInfo** | [**AccountRequestInfo**](account-request-info) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountActivityItem = Initialize-PSSailpoint.BetaAccountActivityItem  -Id 48c545831b264409a81befcabb0e3c5a `
 -Name 48c545831b264409a81befcabb0e3c5a `
 -Requested 2017-07-11T18:45:37.098Z `
 -ApprovalStatus null `
 -ProvisioningStatus null `
 -RequesterComment null `
 -ReviewerIdentitySummary null `
 -ReviewerComment null `
 -Operation null `
 -Attribute detectedRoles `
 -Value Treasury Analyst [AccessProfile-1529010191212] `
 -NativeIdentity Sandie.Camero `
 -SourceId 2c91808363ef85290164000587130c0c `
 -AccountRequestInfo null `
 -ClientMetadata {customKey1=custom value 1, customKey2=custom value 2} `
 -RemoveDate 2020-07-11T00:00Z
```

- Convert the resource to JSON
```powershell
$AccountActivityItem | ConvertTo-JSON
```


[[Back to top]](#) 

