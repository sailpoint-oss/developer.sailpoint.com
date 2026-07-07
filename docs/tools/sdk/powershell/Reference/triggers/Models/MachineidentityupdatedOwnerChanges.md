---
id: machineidentityupdated-owner-changes
title: MachineidentityupdatedOwnerChanges
pagination_label: MachineidentityupdatedOwnerChanges
sidebar_label: MachineidentityupdatedOwnerChanges
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentityupdatedOwnerChanges', 'MachineidentityupdatedOwnerChanges'] 
slug: /tools/sdk/powershell/triggers/models/machineidentityupdated-owner-changes
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedOwnerChanges', 'MachineidentityupdatedOwnerChanges']
---


# MachineidentityupdatedOwnerChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Name of the attribute that changed. | [optional] 
**Added** | [**[]Machineidentityownerreference**](machineidentityownerreference) | Owners that were added. | [optional] 
**Removed** | [**[]Machineidentityownerreference**](machineidentityownerreference) | Owners that were removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineidentityupdatedOwnerChanges = Initialize-MachineidentityupdatedOwnerChanges  -AttributeName owners `
 -Added null `
 -Removed null
```

- Convert the resource to JSON
```powershell
$MachineidentityupdatedOwnerChanges | ConvertTo-JSON
```


[[Back to top]](#) 

