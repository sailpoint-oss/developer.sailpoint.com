---
id: machineidentityaggregationresponse-target
title: MachineidentityaggregationresponseTarget
pagination_label: MachineidentityaggregationresponseTarget
sidebar_label: MachineidentityaggregationresponseTarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineidentityaggregationresponseTarget', 'MachineidentityaggregationresponseTarget'] 
slug: /tools/sdk/python/machine-identities/models/machineidentityaggregationresponse-target
tags: ['SDK', 'Software Development Kit', 'MachineidentityaggregationresponseTarget', 'MachineidentityaggregationresponseTarget']
---

# MachineidentityaggregationresponseTarget

The target(source) of the aggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.machine_identities.models.machineidentityaggregationresponse_target import MachineidentityaggregationresponseTarget

machineidentityaggregationresponse_target = MachineidentityaggregationresponseTarget(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

