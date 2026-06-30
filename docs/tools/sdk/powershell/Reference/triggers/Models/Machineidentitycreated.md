---
id: machineidentitycreated
title: Machineidentitycreated
pagination_label: Machineidentitycreated
sidebar_label: Machineidentitycreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentitycreated', 'Machineidentitycreated'] 
slug: /tools/sdk/powershell/triggers/models/machineidentitycreated
tags: ['SDK', 'Software Development Kit', 'Machineidentitycreated', 'Machineidentitycreated']
---


# Machineidentitycreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  **Enum** [  "MACHINE_IDENTITY_CREATED" ] | Type of the event. | [required]
**MachineIdentity** | [**MachineidentitycreatedMachineIdentity**](machineidentitycreated-machine-identity) |  | [required]

## Examples

- Prepare the resource
```powershell
$Machineidentitycreated = Initialize-Machineidentitycreated  -EventType MACHINE_IDENTITY_CREATED `
 -MachineIdentity null
```

- Convert the resource to JSON
```powershell
$Machineidentitycreated | ConvertTo-JSON
```


[[Back to top]](#) 

