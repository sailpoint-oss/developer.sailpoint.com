---
id: parameterstorageupdateparameter
title: Parameterstorageupdateparameter
pagination_label: Parameterstorageupdateparameter
sidebar_label: Parameterstorageupdateparameter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Parameterstorageupdateparameter', 'Parameterstorageupdateparameter'] 
slug: /tools/sdk/python/parameter-storage/models/parameterstorageupdateparameter
tags: ['SDK', 'Software Development Kit', 'Parameterstorageupdateparameter', 'Parameterstorageupdateparameter']
---

# Parameterstorageupdateparameter

An existing parameter that needs to be updated. The type cannot be changed once the parameter is created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_id** | **str** | The UUID of the parameter owner. | [optional] 
**name** | **str** | The human-readable name for the parameter. | [optional] 
**public_fields** | **object** | The public fields that can be stored with this parameter. | [optional] 
**private_fields** | **str** | The private fields that can be stored with this parameter. | [optional] 
**description** | **str** | Describe the parameter | [optional] 
}

## Example

```python
from sailpoint.parameter_storage.models.parameterstorageupdateparameter import Parameterstorageupdateparameter

parameterstorageupdateparameter = Parameterstorageupdateparameter(
owner_id='c0b4568a4fe7458c434ee77d1fbt156b',
name='Credentials for server.',
public_fields={"username": "username"},
private_fields='ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu',
description='Credentials for server.'
)

```
[[Back to top]](#) 

