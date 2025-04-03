---
id: v2025-workgroup-bulk-delete-request
title: WorkgroupBulkDeleteRequest
pagination_label: WorkgroupBulkDeleteRequest
sidebar_label: WorkgroupBulkDeleteRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupBulkDeleteRequest', 'V2025WorkgroupBulkDeleteRequest'] 
slug: /tools/sdk/python/v2025/models/workgroup-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'WorkgroupBulkDeleteRequest', 'V2025WorkgroupBulkDeleteRequest']
---

# WorkgroupBulkDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | List of IDs of Governance Groups to be deleted. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.workgroup_bulk_delete_request import WorkgroupBulkDeleteRequest

workgroup_bulk_delete_request = WorkgroupBulkDeleteRequest(
ids=[567a697e-885b-495a-afc5-d55e1c23a302, c7b0f7b2-1e78-4063-b294-a555333dacd2]
)

```
[[Back to top]](#) 

