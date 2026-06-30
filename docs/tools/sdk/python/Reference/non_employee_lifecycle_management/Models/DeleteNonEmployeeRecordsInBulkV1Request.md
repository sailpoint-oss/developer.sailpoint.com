---
id: delete-non-employee-records-in-bulk-v1-request
title: DeleteNonEmployeeRecordsInBulkV1Request
pagination_label: DeleteNonEmployeeRecordsInBulkV1Request
sidebar_label: DeleteNonEmployeeRecordsInBulkV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeleteNonEmployeeRecordsInBulkV1Request', 'DeleteNonEmployeeRecordsInBulkV1Request'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/delete-non-employee-records-in-bulk-v1-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkV1Request', 'DeleteNonEmployeeRecordsInBulkV1Request']
---

# DeleteNonEmployeeRecordsInBulkV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | List of non-employee ids. | [required]
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.delete_non_employee_records_in_bulk_v1_request import DeleteNonEmployeeRecordsInBulkV1Request

delete_non_employee_records_in_bulk_v1_request = DeleteNonEmployeeRecordsInBulkV1Request(
ids=["2b838de9-db9b-abcf-e646-d4f274ad4238","2d838de9-db9b-abcf-e646-d4f274ad4238"]
)

```
[[Back to top]](#) 

