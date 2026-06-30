---
id: roleminingentitlement
title: Roleminingentitlement
pagination_label: Roleminingentitlement
sidebar_label: Roleminingentitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingentitlement', 'Roleminingentitlement'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingentitlement
tags: ['SDK', 'Software Development Kit', 'Roleminingentitlement', 'Roleminingentitlement']
---


# Roleminingentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementRef** | [**Roleminingentitlementref**](roleminingentitlementref) |  | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 
**ApplicationName** | **String** | Application name of the entitlement | [optional] 
**IdentityCount** | **Int32** | The number of identities with this entitlement in a role. | [optional] 
**Popularity** | **Double** | The % popularity of this entitlement in a role. | [optional] 
**PopularityInOrg** | **Double** | The % popularity of this entitlement in the org. | [optional] 
**SourceId** | **String** | The ID of the source/application. | [optional] 
**ActivitySourceState** | **String** | The status of activity data for the source.   Value is complete or notComplete. | [optional] 
**SourceUsagePercent** | **Double** | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingentitlement = Initialize-Roleminingentitlement  -EntitlementRef null `
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
$Roleminingentitlement | ConvertTo-JSON
```


[[Back to top]](#) 

