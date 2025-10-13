---
id: v2025-parameter-storage-new-parameter
title: ParameterStorageNewParameter
pagination_label: ParameterStorageNewParameter
sidebar_label: ParameterStorageNewParameter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ParameterStorageNewParameter', 'V2025ParameterStorageNewParameter'] 
slug: /tools/sdk/python/v2025/models/parameter-storage-new-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageNewParameter', 'V2025ParameterStorageNewParameter']
---

# ParameterStorageNewParameter

A parameter to add to parameter storage. The public and private fields must match the type specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_id** | **str** | The UUID of the parameter owner. | [required]
**name** | **str** | The human-readable name for the parameter. | [required]
**type** | **str** | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [required]
**public_fields** | **object** | The content must be a JSON object containing the public fields that can be stored with this parameter. | [optional] 
**private_fields** | **str** | Must be a JWE AES256 encrypted blob. The content of the blob must be a JSON object containing the private fields that can be stored with this parameter.  | [optional] 
**description** | **str** | Describe the parameter | [optional] 
}

## Example

```python
from sailpoint.v2025.models.parameter_storage_new_parameter import ParameterStorageNewParameter

parameter_storage_new_parameter = ParameterStorageNewParameter(
owner_id='c0b4568a4fe7458c434ee77d1fbt156b',
name='Credentials for server.',
type='1.1',
public_fields={"username": "username"},
private_fields='ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu',
description='Credentials for server.'
)

```
[[Back to top]](#) 

