---
id: v2025-dimension-bulk-delete-request
title: DimensionBulkDeleteRequest
pagination_label: DimensionBulkDeleteRequest
sidebar_label: DimensionBulkDeleteRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DimensionBulkDeleteRequest', 'V2025DimensionBulkDeleteRequest'] 
slug: /tools/sdk/python/v2025/models/dimension-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'DimensionBulkDeleteRequest', 'V2025DimensionBulkDeleteRequest']
---

# DimensionBulkDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_ids** | **[]str** | List of IDs of Dimensions to be deleted. | [required]
}

## Example

```python
from sailpoint.v2025.models.dimension_bulk_delete_request import DimensionBulkDeleteRequest

dimension_bulk_delete_request = DimensionBulkDeleteRequest(
dimension_ids=[2c9180847812e0b1017817051919ecca, 2c9180887812e0b201781e129f151816]
)

```
[[Back to top]](#) 

