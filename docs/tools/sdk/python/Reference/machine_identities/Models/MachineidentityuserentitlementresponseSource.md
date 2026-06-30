---
id: machineidentityuserentitlementresponse-source
title: MachineidentityuserentitlementresponseSource
pagination_label: MachineidentityuserentitlementresponseSource
sidebar_label: MachineidentityuserentitlementresponseSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineidentityuserentitlementresponseSource', 'MachineidentityuserentitlementresponseSource'] 
slug: /tools/sdk/python/machine-identities/models/machineidentityuserentitlementresponse-source
tags: ['SDK', 'Software Development Kit', 'MachineidentityuserentitlementresponseSource', 'MachineidentityuserentitlementresponseSource']
---

# MachineidentityuserentitlementresponseSource

The source of the user entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.machine_identities.models.machineidentityuserentitlementresponse_source import MachineidentityuserentitlementresponseSource

machineidentityuserentitlementresponse_source = MachineidentityuserentitlementresponseSource(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

