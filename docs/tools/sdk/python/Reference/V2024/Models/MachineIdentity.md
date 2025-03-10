---
id: v2024-machine-identity
title: MachineIdentity
pagination_label: MachineIdentity
sidebar_label: MachineIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentity', 'V2024MachineIdentity'] 
slug: /tools/sdk/python/v2024/models/machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentity', 'V2024MachineIdentity']
---

# MachineIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**business_application** | **str** | The business application that the identity represents | [required]
**description** | **str** | Description of machine identity | [optional] 
**manually_edited** | **bool** | Indicates if the machine identity has been manually edited | [optional] [default to False]
**attributes** | **object** | A map of custom machine identity attributes | [optional] 
}

## Example

```python
from sailpoint.v2024.models.machine_identity import MachineIdentity

machine_identity = MachineIdentity(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
business_application='ADService',
description='',
manually_edited=True,
attributes={"Region":"EU"}
)

```
[[Back to top]](#) 

