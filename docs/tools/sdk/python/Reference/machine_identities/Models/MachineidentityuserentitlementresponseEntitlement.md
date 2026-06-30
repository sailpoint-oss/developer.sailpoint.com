---
id: machineidentityuserentitlementresponse-entitlement
title: MachineidentityuserentitlementresponseEntitlement
pagination_label: MachineidentityuserentitlementresponseEntitlement
sidebar_label: MachineidentityuserentitlementresponseEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineidentityuserentitlementresponseEntitlement', 'MachineidentityuserentitlementresponseEntitlement'] 
slug: /tools/sdk/python/machine-identities/models/machineidentityuserentitlementresponse-entitlement
tags: ['SDK', 'Software Development Kit', 'MachineidentityuserentitlementresponseEntitlement', 'MachineidentityuserentitlementresponseEntitlement']
---

# MachineidentityuserentitlementresponseEntitlement

The user entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.machine_identities.models.machineidentityuserentitlementresponse_entitlement import MachineidentityuserentitlementresponseEntitlement

machineidentityuserentitlementresponse_entitlement = MachineidentityuserentitlementresponseEntitlement(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

