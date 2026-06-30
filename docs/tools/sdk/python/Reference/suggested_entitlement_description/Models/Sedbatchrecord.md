---
id: sedbatchrecord
title: Sedbatchrecord
pagination_label: Sedbatchrecord
sidebar_label: Sedbatchrecord
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sedbatchrecord', 'Sedbatchrecord'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/sedbatchrecord
tags: ['SDK', 'Software Development Kit', 'Sedbatchrecord', 'Sedbatchrecord']
---

# Sedbatchrecord

Sed Batch Record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | The tenant ID associated with the batch. | [optional] 
**batch_id** | **str** | The unique ID of the batch. | [optional] 
**name** | **str** | The name of the batch. | [optional] 
**processed_state** | **str** | The current state of the batch (e.g., submitted, materialized, completed). | [optional] 
**requested_by** | **str** | The ID of the user who requested the batch. | [optional] 
**materialized_count** | **int** | The number of items materialized in the batch. | [optional] 
**processed_count** | **int** | The number of items processed in the batch. | [optional] 
**created_at** | **datetime** | The timestamp when the batch was created. | [optional] 
**updated_at** | **datetime** | The timestamp when the batch was last updated. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sedbatchrecord import Sedbatchrecord

sedbatchrecord = Sedbatchrecord(
tenant_id='123e4567-e89b-12d3-a456-426614174000',
batch_id='016629d1-1d25-463f-97f3-0c6686846650',
name='Example Batch Name',
processed_state='submitted | materialized | completed | failed',
requested_by='987e6543-e21b-45d3-b123-123456789abc',
materialized_count=50,
processed_count=45,
created_at='2023-10-01T12:00Z',
updated_at='2023-10-02T15:30Z'
)

```
[[Back to top]](#) 

