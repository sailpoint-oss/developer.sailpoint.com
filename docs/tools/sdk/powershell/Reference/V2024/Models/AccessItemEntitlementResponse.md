---
id: v2024-access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemEntitlementResponse', 'V2024AccessItemEntitlementResponse'] 
slug: /tools/sdk/powershell/v2024/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse', 'V2024AccessItemEntitlementResponse']
---


# AccessItemEntitlementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | **String** | the access item type. entitlement in this case | [optional] 
**Id** | **String** | the access item id | [optional] 
**Attribute** | **String** | the entitlement attribute | [optional] 
**Value** | **String** | the associated value | [optional] 
**EntitlementType** | **String** | the type of entitlement | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**Description** | **String** | the description for the entitlment | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**Standalone** | **Boolean** | indicates whether the entitlement is standalone | [required]
**Privileged** | **Boolean** | indicates whether the entitlement is privileged | [required]
**CloudGoverned** | **Boolean** | indicates whether the entitlement is cloud governed | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemEntitlementResponse = Initialize-PSSailpoint.V2024AccessItemEntitlementResponse  -AccessType entitlement `
 -Id 2c918087763e69d901763e72e97f006f `
 -Attribute groups `
 -Value Upward mobility access `
 -EntitlementType entitlement `
 -SourceName DataScienceDataset `
 -SourceId 2793o32dwd `
 -Description Entitlement - Workday/Citizenship access `
 -DisplayName Dr. Arden Rogahn MD `
 -Standalone true `
 -Privileged false `
 -CloudGoverned true
```

- Convert the resource to JSON
```powershell
$AccessItemEntitlementResponse | ConvertTo-JSON
```


[[Back to top]](#) 

