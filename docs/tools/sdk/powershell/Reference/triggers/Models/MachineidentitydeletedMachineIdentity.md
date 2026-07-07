---
id: machineidentitydeleted-machine-identity
title: MachineidentitydeletedMachineIdentity
pagination_label: MachineidentitydeletedMachineIdentity
sidebar_label: MachineidentitydeletedMachineIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentitydeletedMachineIdentity', 'MachineidentitydeletedMachineIdentity'] 
slug: /tools/sdk/powershell/triggers/models/machineidentitydeleted-machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineidentitydeletedMachineIdentity', 'MachineidentitydeletedMachineIdentity']
---


# MachineidentitydeletedMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the machine identity. | [required]
**Name** | **String** | Name of the machine identity. | [optional] 
**Created** | **System.DateTime** | Creation timestamp. | [required]
**Modified** | **System.DateTime** | Last modified timestamp. | [required]
**BusinessApplication** | **String** | Associated business application. | [optional] 
**Description** | **String** | Description of the machine identity. | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The attributes assigned to the identity. | [optional] 
**Subtype** |  **Enum** [  "AI Agent",    "Application" ] | Subtype of the machine identity. | [required]
**Owners** | [**[]Machineidentityownerreference**](machineidentityownerreference) | List of owners. | [optional] 
**SourceId** | **String** | Source identifier. | [optional] 
**Uuid** | **String** | UUID of the machine identity. | [optional] 
**NativeIdentity** | **String** | Native identity value. | [optional] 
**ManuallyEdited** | **Boolean** | Indicates if manually edited. | [required][default to $false]
**ManuallyCreated** | **Boolean** | Indicates if manually created. | [optional] [default to $false]
**DatasetId** | **String** | Dataset identifier. | [optional] 
**Source** | [**Machineidentitysourcereference**](machineidentitysourcereference) |  | [optional] 
**UserEntitlements** | [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | List of user entitlements. | [optional] 
**ExistsOnSource** | **String** | Existence status on source. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineidentitydeletedMachineIdentity = Initialize-MachineidentitydeletedMachineIdentity  -Id 8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6 `
 -Name TestName `
 -Created 2025-08-08T12:42:21.491666Z `
 -Modified 2025-09-01T06:36:54.401476Z `
 -BusinessApplication MyBusinessApplication2 `
 -Description test description event `
 -Attributes {"botUserId":"005KV00000BLoMCYA1"} `
 -Subtype AI Agent `
 -Owners null `
 -SourceId c0201251a6ce4d268aba536cdd60a7f2 `
 -Uuid f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -NativeIdentity abc:123:dddd1 `
 -ManuallyEdited true `
 -ManuallyCreated true `
 -DatasetId agentforce:agents `
 -Source null `
 -UserEntitlements null `
 -ExistsOnSource NOT_APPLICABLE
```

- Convert the resource to JSON
```powershell
$MachineidentitydeletedMachineIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

