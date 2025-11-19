---
id: v2025-parameter-storage-reference
title: ParameterStorageReference
pagination_label: ParameterStorageReference
sidebar_label: ParameterStorageReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ParameterStorageReference', 'V2025ParameterStorageReference'] 
slug: /tools/sdk/python/v2025/models/parameter-storage-reference
tags: ['SDK', 'Software Development Kit', 'ParameterStorageReference', 'V2025ParameterStorageReference']
---

# ParameterStorageReference

Reference information returned in response to a request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the reference | [required]
**consumer_id** | **str** | The ID of the consumer holding the reference | [required]
**parameter_id** | **str** | The ID of the parameter that the reference is pointing to. | [required]
**name** | **str** | The human-readable name of the reference | [required]
**usage_hint** | **str** | The hint string used to validate the reference | [optional] 
}

## Example

```python
from sailpoint.v2025.models.parameter_storage_reference import ParameterStorageReference

parameter_storage_reference = ParameterStorageReference(
id='4018c3ec-2714-42b5-92e8-232b17333b52',
consumer_id='sp-workflow-config',
parameter_id='58de858b-83d9-4563-9e15-7393594c684a',
name='Workflow 6d3d0677-b6fb-470c-b931-89195bedcebe',
usage_hint='{"workflowId": "6d3d0677-b6fb-470c-b931-89195bedcebe"}'
)

```
[[Back to top]](#) 

