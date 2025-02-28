---
id: v2024-machine-identity
title: MachineIdentity
pagination_label: MachineIdentity
sidebar_label: MachineIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentity', 'V2024MachineIdentity'] 
slug: /tools/sdk/powershell/v2024/models/machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentity', 'V2024MachineIdentity']
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
**ManuallyEdited** | **Boolean** | Indicates if the machine identity has been manually edited | [optional] [default to $false]
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A map of custom machine identity attributes | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentity = Initialize-PSSailpoint.V2024MachineIdentity  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -BusinessApplication ADService `
 -Description  `
 -ManuallyEdited true `
 -Attributes {"Region":"EU"}
```

- Convert the resource to JSON
```powershell
$MachineIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

