---
id: machineidentityuserentitlementresponse-source
title: MachineidentityuserentitlementresponseSource
pagination_label: MachineidentityuserentitlementresponseSource
sidebar_label: MachineidentityuserentitlementresponseSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentityuserentitlementresponseSource', 'MachineidentityuserentitlementresponseSource'] 
slug: /tools/sdk/powershell/machineidentities/models/machineidentityuserentitlementresponse-source
tags: ['SDK', 'Software Development Kit', 'MachineidentityuserentitlementresponseSource', 'MachineidentityuserentitlementresponseSource']
---


# MachineidentityuserentitlementresponseSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineidentityuserentitlementresponseSource = Initialize-MachineidentityuserentitlementresponseSource  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$MachineidentityuserentitlementresponseSource | ConvertTo-JSON
```


[[Back to top]](#) 

