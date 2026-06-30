---
id: machineidentityupdated-owner-changes
title: MachineidentityupdatedOwnerChanges
pagination_label: MachineidentityupdatedOwnerChanges
sidebar_label: MachineidentityupdatedOwnerChanges
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineidentityupdatedOwnerChanges', 'MachineidentityupdatedOwnerChanges'] 
slug: /tools/sdk/python/triggers/models/machineidentityupdated-owner-changes
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedOwnerChanges', 'MachineidentityupdatedOwnerChanges']
---

# MachineidentityupdatedOwnerChanges

Changes to owners.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Name of the attribute that changed. | [optional] 
**added** | [**[]Machineidentityownerreference**](machineidentityownerreference) | Owners that were added. | [optional] 
**removed** | [**[]Machineidentityownerreference**](machineidentityownerreference) | Owners that were removed. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.machineidentityupdated_owner_changes import MachineidentityupdatedOwnerChanges

machineidentityupdated_owner_changes = MachineidentityupdatedOwnerChanges(
attribute_name='owners',
added=[
                    {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                    ],
removed=[
                    {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                    ]
)

```
[[Back to top]](#) 

