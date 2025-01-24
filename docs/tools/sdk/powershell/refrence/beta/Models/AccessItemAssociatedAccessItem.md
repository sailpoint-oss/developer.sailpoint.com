---
id: access-item-associated-access-item
title: AccessItemAssociatedAccessItem
pagination_label: AccessItemAssociatedAccessItem
sidebar_label: AccessItemAssociatedAccessItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAssociatedAccessItem'] 
slug: /tools/sdk/powershell/beta/models/access-item-associated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociatedAccessItem']
---


# AccessItemAssociatedAccessItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** |  Pointer to **String** | the access item type. role in this case | [optional] 
**Id** |  Pointer to **String** | the access item id | [optional] 
**Name** |  Pointer to **String** | the access profile name | [optional] 
**SourceName** |  Pointer to **String** | the associated source name if it exists | [optional] 
**SourceId** |  Pointer to **String** | the id of the source | [optional] 
**Description** |  Pointer to **String** | the description for the role | [optional] 
**DisplayName** |  Pointer to **String** | the role display name | [optional] 
**EntitlementCount** |  Pointer to **String** | the number of entitlements the account will create | [optional] 
**AppDisplayName** |  Pointer to **String** | the name of | [optional] 
**RemoveDate** |  Pointer to **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Standalone** |  **Boolean** | indicates whether the entitlement is standalone | [required]
**Revocable** |  **Boolean** | indicates whether the role is revocable | [required]
**NativeIdentity** |  Pointer to **String** | the native identifier used to uniquely identify an acccount | [optional] 
**AppRoleId** |  Pointer to **String** | the app role id | [optional] 
**Attribute** |  Pointer to **String** | the entitlement attribute | [optional] 
**Value** |  Pointer to **String** | the associated value | [optional] 
**EntitlementType** |  Pointer to **String** | the type of entitlement | [optional] 
**Privileged** |  **Boolean** | indicates whether the entitlement is privileged | [required]
**CloudGoverned** |  **Boolean** | indicates whether the entitlement is cloud governed | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemAssociatedAccessItem = Initialize-PSSailpoint.BetaAccessItemAssociatedAccessItem  -AccessType role `
 -Id 2c918087763e69d901763e72e97f006f `
 -Name sample `
 -SourceName Source Name `
 -SourceId 2793o32dwd `
 -Description Role - Workday/Citizenship access `
 -DisplayName sample `
 -EntitlementCount 12 `
 -AppDisplayName AppName `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Standalone true `
 -Revocable true `
 -NativeIdentity dr.arden.ogahn.d `
 -AppRoleId 2c918087763e69d901763e72e97f006f `
 -Attribute groups `
 -Value Upward mobility access `
 -EntitlementType entitlement `
 -Privileged false `
 -CloudGoverned true
```

- Convert the resource to JSON
```powershell
$AccessItemAssociatedAccessItem | ConvertTo-JSON
```


[[Back to top]](#) 

