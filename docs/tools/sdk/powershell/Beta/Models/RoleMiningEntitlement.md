---
id: role-mining-entitlement
title: RoleMiningEntitlement
pagination_label: RoleMiningEntitlement
sidebar_label: RoleMiningEntitlement
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningEntitlement'] 
slug: /tools/sdk/powershell/beta/models/role-mining-entitlement
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlement']
---


# RoleMiningEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementRef** |  Pointer to [**RoleMiningEntitlementRef**](role-mining-entitlement-ref) |  | [optional] 
**Name** |  Pointer to **String** | Name of the entitlement | [optional] 
**ApplicationName** |  Pointer to **String** | Application name of the entitlement | [optional] 
**IdentityCount** |  Pointer to **Int32** | The number of identities with this entitlement in a role. | [optional] 
**Popularity** |  Pointer to **Double** | The % popularity of this entitlement in a role. | [optional] 
**PopularityInOrg** |  Pointer to **Double** | The % popularity of this entitlement in the org. | [optional] 
**SourceId** |  Pointer to **String** | The ID of the source/application. | [optional] 
**ActivitySourceState** |  Pointer to **String** | The status of activity data for the source.   Value is complete or notComplete. | [optional] 
**SourceUsagePercent** |  Pointer to **Double** | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningEntitlement = Initialize-PSSailpointBetaRoleMiningEntitlement  -EntitlementRef null `
 -Name Add/modify/delete users `
 -ApplicationName AppName `
 -IdentityCount 45 `
 -Popularity 65.2 `
 -PopularityInOrg 35.8 `
 -SourceId 2c9180877620c1460176267f336a106f `
 -ActivitySourceState complete `
 -SourceUsagePercent 65.6
```

- Convert the resource to JSON
```powershell
$RoleMiningEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

