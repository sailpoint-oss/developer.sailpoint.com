---
id: backup-response
title: BackupResponse
pagination_label: BackupResponse
sidebar_label: BackupResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BackupResponse', 'BackupResponse'] 
slug: /tools/sdk/python/v3/models/backup-response
tags: ['SDK', 'Software Development Kit', 'BackupResponse', 'BackupResponse']
---

# BackupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this backup. | [optional] 
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the backup. | [optional] 
**type** |  **Enum** [  'BACKUP' ] | Type of the job, will always be BACKUP for this type of job. | [optional] 
**tenant** | **str** | The name of the tenant performing the upload | [optional] 
**requester_name** | **str** | The name of the requester. | [optional] 
**file_exists** | **bool** | Whether or not a file was created and stored for this backup. | [optional] [default to True]
**created** | **datetime** | The time the job was started. | [optional] 
**modified** | **datetime** | The time of the last update to the job. | [optional] 
**completed** | **datetime** | The time the job was completed. | [optional] 
**name** | **str** | The name assigned to the upload file in the request body. | [optional] 
**user_can_delete** | **bool** | Whether this backup can be deleted by a regular user. | [optional] [default to True]
**is_partial** | **bool** | Whether this backup contains all supported object types or only some of them. | [optional] [default to False]
**backup_type** |  **Enum** [  'UPLOADED',    'AUTOMATED',    'MANUAL' ] | Denotes how this backup was created. - MANUAL - The backup was created by a user. - AUTOMATED - The backup was created by devops. - AUTOMATED_DRAFT - The backup was created during a draft process. - UPLOADED - The backup was created by uploading an existing configuration file. | [optional] 
**options** | [**BackupOptions**](backup-options) |  | [optional] 
**hydration_status** |  **Enum** [  'HYDRATED',    'NOT_HYDRATED' ] | Whether the object details of this backup are ready. | [optional] 
**total_object_count** | **int** | Number of objects contained in this backup. | [optional] 
**cloud_storage_status** |  **Enum** [  'SYNCED',    'NOT_SYNCED',    'SYNC_FAILED' ] | Whether this backup has been transferred to a customer storage location. | [optional] 
}

## Example

```python
from sailpoint.v3.models.backup_response import BackupResponse

backup_response = BackupResponse(
job_id='3469b87d-48ca-439a-868f-2160001da8c1',
status='COMPLETE',
type='BACKUP',
tenant='tenant-name',
requester_name='Requester Name',
file_exists=True,
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z',
completed='2021-05-11T22:23:16Z',
name='Backup Name',
user_can_delete=False,
is_partial=False,
backup_type='MANUAL',
options=sailpoint.v3.models.backup_options.BackupOptions(
                    include_types = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    object_options = {TRIGGER_SUBSCRIPTION={includedNames=[Trigger Subscription name]}}, ),
hydration_status='NOT_HYDRATED',
total_object_count=10,
cloud_storage_status='SYNCED'
)

```
[[Back to top]](#) 

