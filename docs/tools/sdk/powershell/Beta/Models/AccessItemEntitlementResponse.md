---
id: access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemEntitlementResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse']
---


# AccessItemEntitlementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** |  Pointer to **String** | the access item type. entitlement in this case | [optional] 
**Id** |  Pointer to **String** | the access item id | [optional] 
**Attribute** |  Pointer to **String** | the entitlement attribute | [optional] 
**Value** |  Pointer to **String** | the associated value | [optional] 
**EntitlementType** |  Pointer to **String** | the type of entitlement | [optional] 
**SourceName** |  Pointer to **String** | the name of the source | [optional] 
**SourceId** |  Pointer to **String** | the id of the source | [optional] 
**Description** |  Pointer to **String** | the description for the entitlment | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemEntitlementResponse = Initialize-PSSailpointBetaAccessItemEntitlementResponse  -AccessType entitlement `
 -Id 2c918087763e69d901763e72e97f006f `
 -Attribute groups `
 -Value Upward mobility access `
 -EntitlementType entitlement `
 -SourceName DataScienceDataset `
 -SourceId 2793o32dwd `
 -Description Entitlement - Workday/Citizenship access `
 -DisplayName Dr. Arden Rogahn MD
```

- Convert the resource to JSON
```powershell
$AccessItemEntitlementResponse | ConvertTo-JSON
```


[[Back to top]](#) 

