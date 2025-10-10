---
id: v2025-parameter-storage-parameter
title: ParameterStorageParameter
pagination_label: ParameterStorageParameter
sidebar_label: ParameterStorageParameter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ParameterStorageParameter', 'V2025ParameterStorageParameter'] 
slug: /tools/sdk/python/v2025/models/parameter-storage-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageParameter', 'V2025ParameterStorageParameter']
---

# ParameterStorageParameter

A parameter that has been retrieved from the store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the reference | [required]
**owner_id** | **str** | The ID of the user who owns the parameter. | [required]
**type** | **str** | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [optional] 
**name** | **str** | The human-readable name of the parameter. | [required]
**primary_field** | **str** | The name of the primary field in the public fields. | [optional] 
**public_fields** | **object** | The public fields stored for this parameter. See the types document for information about what can be stored. | [required]
**description** | **str** | Describe the parameter | [optional] 
**last_modified_at** | **str** | ISO8606 format datetime of the last time any field of the parameter was changed. | [optional] 
**last_modified_by** | **str** | The ID of the user who last modified the parameter. Empty when identity is not known. | [optional] 
**private_fields_last_modified_at** | **str** | ISO8606 format datetime of the time the secret fields were changed on the parameter. | [optional] 
**private_fields_last_modified_by** | **str** | The ID of the user who last modified the private fields. Empty when identity is not known. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.parameter_storage_parameter import ParameterStorageParameter

parameter_storage_parameter = ParameterStorageParameter(
id='58de858b-83d9-4563-9e15-7393594c684a',
owner_id='c0b4568a4fe7458c434ee77d1fbt156b',
type='1.1',
name='Credentials for server',
primary_field='username',
public_fields={"username": "username"},
description='Credentials for server.',
last_modified_at='2025-09-16T12:47:08Z',
last_modified_by='c0b4568a4fe7458c434ee77d1fbt156b',
private_fields_last_modified_at='2025-09-16T12:47:08Z',
private_fields_last_modified_by='c0b4568a4fe7458c434ee77d1fbt156b'
)

```
[[Back to top]](#) 

