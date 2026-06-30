---
id: machineaccountcreateaccessdto
title: Machineaccountcreateaccessdto
pagination_label: Machineaccountcreateaccessdto
sidebar_label: Machineaccountcreateaccessdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineaccountcreateaccessdto', 'Machineaccountcreateaccessdto'] 
slug: /tools/sdk/python/machine-account-creation-request/models/machineaccountcreateaccessdto
tags: ['SDK', 'Software Development Kit', 'Machineaccountcreateaccessdto', 'Machineaccountcreateaccessdto']
---

# Machineaccountcreateaccessdto

A summary endpoint which returns list of sources and subtypes for which user has an entitlement to request machine accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | Source ID. | [optional] 
**source_name** | **str** | Source name. | [optional] 
**subtypes** | [**[]MachineaccountcreateaccessdtoSubtypesInner**](machineaccountcreateaccessdto-subtypes-inner) | List of subtypes for which the user has an entitlement to request machine accounts. | [optional] 
}

## Example

```python
from sailpoint.machine_account_creation_request.models.machineaccountcreateaccessdto import Machineaccountcreateaccessdto

machineaccountcreateaccessdto = Machineaccountcreateaccessdto(
source_id='1419fc28a8ed4a079f5c0cb5dfad6311',
source_name='Source name',
subtypes=[
                    sailpoint.machine_account_creation_request.models.machineaccountcreateaccessdto_subtypes_inner.machineaccountcreateaccessdto_subtypes_inner(
                        subtype_id = 'd7ae9ea3-507f-4d00-9d4f-b4464b344b88', 
                        entitlement_id = 'a03caa629a624cee90f94048252034cf', 
                        subtype_display_name = 'Subtype Display Name', 
                        subtype_technical_name = 'Subtype Technical Name', )
                    ]
)

```
[[Back to top]](#) 

