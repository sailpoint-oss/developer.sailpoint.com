---
id: v2025-machine-identity
title: MachineIdentity
pagination_label: MachineIdentity
sidebar_label: MachineIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentity', 'V2025MachineIdentity'] 
slug: /tools/sdk/powershell/v2025/models/machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentity', 'V2025MachineIdentity']
---


# MachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**BusinessApplication** | **String** | The business application that the identity represents | [required]
**Description** | **String** | Description of machine identity | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A map of custom machine identity attributes | [optional] 
**Subtype** | **String** | The subtype value associated to the machine identity | [required]
**Owners** | [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
**SourceId** | **String** | The source id associated to the machine identity | [optional] 
**Uuid** | **String** | The UUID associated to the machine identity directly aggregated from a source | [optional] 
**NativeIdentity** | **String** | The native identity associated to the machine identity directly aggregated from a source | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentity = Initialize-V2025MachineIdentity  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -BusinessApplication ADService `
 -Description  `
 -Attributes {"Region":"EU"} `
 -Subtype Application `
 -Owners null `
 -SourceId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -Uuid f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -NativeIdentity abc:123:dddd
```

- Convert the resource to JSON
```powershell
$MachineIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

