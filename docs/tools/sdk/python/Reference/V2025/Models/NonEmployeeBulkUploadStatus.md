---
id: v2025-non-employee-bulk-upload-status
title: NonEmployeeBulkUploadStatus
pagination_label: NonEmployeeBulkUploadStatus
sidebar_label: NonEmployeeBulkUploadStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeBulkUploadStatus', 'V2025NonEmployeeBulkUploadStatus'] 
slug: /tools/sdk/python/v2025/models/non-employee-bulk-upload-status
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadStatus', 'V2025NonEmployeeBulkUploadStatus']
---

# NonEmployeeBulkUploadStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'PENDING',    'IN_PROGRESS',    'COMPLETED',    'ERROR' ] | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors. null means job has been submitted to the source.  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.non_employee_bulk_upload_status import NonEmployeeBulkUploadStatus

non_employee_bulk_upload_status = NonEmployeeBulkUploadStatus(
status='PENDING'
)

```
[[Back to top]](#) 

