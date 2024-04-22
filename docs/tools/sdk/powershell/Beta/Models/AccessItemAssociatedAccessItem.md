---
id: access-item-associated-access-item
title: AccessItemAssociatedAccessItem
pagination_label: AccessItemAssociatedAccessItem
sidebar_label: AccessItemAssociatedAccessItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemAssociatedAccessItem'] 
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
**AppDisplayName** |  Pointer to **String** | the name of app | [optional] 
**NativeIdentity** |  Pointer to **String** | the native identifier used to uniquely identify an acccount | [optional] 
**Attribute** |  Pointer to **String** | the entitlement attribute | [optional] 
**Value** |  Pointer to **String** | the associated value | [optional] 
**EntitlementType** |  Pointer to **String** | the type of entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAssociatedAccessItem = Initialize-BetaAccessItemAssociatedAccessItem  -AccessType role `
 -Id 2c918087763e69d901763e72e97f006f `
 -Name sample `
 -SourceName Source Name `
 -SourceId 2793o32dwd `
 -Description Role - Workday/Citizenship access `
 -DisplayName sample `
 -EntitlementCount 12 `
 -AppDisplayName AppName `
 -NativeIdentity dr.arden.ogahn.d `
 -Attribute groups `
 -Value Upward mobility access `
 -EntitlementType entitlement
```

- Convert the resource to JSON
```powershell
$AccessItemAssociatedAccessItem | ConvertTo-JSON
```


[[Back to top]](#) 

