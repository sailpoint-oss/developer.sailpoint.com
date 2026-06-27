---
id: machineidentitydeleted
title: Machineidentitydeleted
pagination_label: Machineidentitydeleted
sidebar_label: Machineidentitydeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentitydeleted', 'Machineidentitydeleted'] 
slug: /tools/sdk/powershell/triggers/models/machineidentitydeleted
tags: ['SDK', 'Software Development Kit', 'Machineidentitydeleted', 'Machineidentitydeleted']
---


# Machineidentitydeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  **Enum** [  "MACHINE_IDENTITY_DELETED" ] | Type of the event. | [required]
**MachineIdentity** | [**MachineidentitydeletedMachineIdentity**](machineidentitydeleted-machine-identity) |  | [required]

## Examples

- Prepare the resource
```powershell
$Machineidentitydeleted = Initialize-Machineidentitydeleted  -EventType MACHINE_IDENTITY_DELETED `
 -MachineIdentity null
```

- Convert the resource to JSON
```powershell
$Machineidentitydeleted | ConvertTo-JSON
```


[[Back to top]](#) 

