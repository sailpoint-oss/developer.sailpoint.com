---
id: v2024-access-item-associated-access-item
title: AccessItemAssociatedAccessItem
pagination_label: AccessItemAssociatedAccessItem
sidebar_label: AccessItemAssociatedAccessItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAssociatedAccessItem', 'V2024AccessItemAssociatedAccessItem'] 
slug: /tools/sdk/powershell/v2024/models/access-item-associated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociatedAccessItem', 'V2024AccessItemAssociatedAccessItem']
---


# AccessItemAssociatedAccessItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | **String** | the access item type. role in this case | [optional] 
**Id** | **String** | the access item id | [optional] 
**Name** | **String** | the access profile name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**Description** | **String** | the description for the role | [optional] 
**DisplayName** | **String** | the role display name | [optional] 
**EntitlementCount** | **String** | the number of entitlements the account will create | [optional] 
**AppDisplayName** | **String** | the name of | [optional] 
**RemoveDate** | **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Standalone** | **Boolean** | indicates whether the entitlement is standalone | [required]
**Revocable** | **Boolean** | indicates whether the role is revocable | [required]
**NativeIdentity** | **String** | the native identifier used to uniquely identify an acccount | [optional] 
**AppRoleId** | **String** | the app role id | [optional] 
**Attribute** | **String** | the entitlement attribute | [optional] 
**Value** | **String** | the associated value | [optional] 
**EntitlementType** | **String** | the type of entitlement | [optional] 
**Privileged** | **Boolean** | indicates whether the entitlement is privileged | [required]
**CloudGoverned** | **Boolean** | indicates whether the entitlement is cloud governed | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemAssociatedAccessItem = Initialize-PSSailpoint.V2024AccessItemAssociatedAccessItem  -AccessType role `
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

