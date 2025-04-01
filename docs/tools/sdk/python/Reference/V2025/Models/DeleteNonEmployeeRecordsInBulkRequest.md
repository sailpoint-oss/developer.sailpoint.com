---
id: v2025-delete-non-employee-records-in-bulk-request
title: DeleteNonEmployeeRecordsInBulkRequest
pagination_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeleteNonEmployeeRecordsInBulkRequest', 'V2025DeleteNonEmployeeRecordsInBulkRequest'] 
slug: /tools/sdk/python/v2025/models/delete-non-employee-records-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkRequest', 'V2025DeleteNonEmployeeRecordsInBulkRequest']
---

# DeleteNonEmployeeRecordsInBulkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | List of non-employee ids. | [required]
}

## Example

```python
from sailpoint.v2025.models.delete_non_employee_records_in_bulk_request import DeleteNonEmployeeRecordsInBulkRequest

delete_non_employee_records_in_bulk_request = DeleteNonEmployeeRecordsInBulkRequest(
ids=[2b838de9-db9b-abcf-e646-d4f274ad4238, 2d838de9-db9b-abcf-e646-d4f274ad4238]
)

```
[[Back to top]](#) 

