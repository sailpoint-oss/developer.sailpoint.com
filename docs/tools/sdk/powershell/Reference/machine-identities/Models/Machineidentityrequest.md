---
id: machineidentityrequest
title: Machineidentityrequest
pagination_label: Machineidentityrequest
sidebar_label: Machineidentityrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentityrequest', 'Machineidentityrequest'] 
slug: /tools/sdk/powershell/machineidentities/models/machineidentityrequest
tags: ['SDK', 'Software Development Kit', 'Machineidentityrequest', 'Machineidentityrequest']
---


# Machineidentityrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | **String** | The native identity associated to the machine identity directly aggregated from a source | [required]
**Description** | **String** | Description of machine identity | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A map of custom machine identity attributes | [optional] 
**Subtype** | **String** | The subtype value associated to the machine identity | [required]
**Owners** | [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
**SourceId** | **String** | The source id associated to the machine identity | [optional] 
**Uuid** | **String** | The UUID associated to the machine identity directly aggregated from a source | [optional] 
**UserEntitlements** | [**[]MachineIdentityRequestUserEntitlements**](machine-identity-request-user-entitlements) | The user entitlements associated to the machine identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineidentityrequest = Initialize-Machineidentityrequest  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -NativeIdentity abc:123:dddd `
 -Description  `
 -Attributes {"Region":"EU"} `
 -Subtype Application `
 -Owners null `
 -SourceId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -Uuid f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -UserEntitlements null
```

- Convert the resource to JSON
```powershell
$Machineidentityrequest | ConvertTo-JSON
```


[[Back to top]](#) 

