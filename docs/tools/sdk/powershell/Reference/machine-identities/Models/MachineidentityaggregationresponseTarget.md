---
id: machineidentityaggregationresponse-target
title: MachineidentityaggregationresponseTarget
pagination_label: MachineidentityaggregationresponseTarget
sidebar_label: MachineidentityaggregationresponseTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentityaggregationresponseTarget', 'MachineidentityaggregationresponseTarget'] 
slug: /tools/sdk/powershell/machineidentities/models/machineidentityaggregationresponse-target
tags: ['SDK', 'Software Development Kit', 'MachineidentityaggregationresponseTarget', 'MachineidentityaggregationresponseTarget']
---


# MachineidentityaggregationresponseTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineidentityaggregationresponseTarget = Initialize-MachineidentityaggregationresponseTarget  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$MachineidentityaggregationresponseTarget | ConvertTo-JSON
```


[[Back to top]](#) 

