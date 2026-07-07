---
id: draftresponse
title: Draftresponse
pagination_label: Draftresponse
sidebar_label: Draftresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Draftresponse', 'Draftresponse'] 
slug: /tools/sdk/python/configuration-hub/models/draftresponse
tags: ['SDK', 'Software Development Kit', 'Draftresponse', 'Draftresponse']
---

# Draftresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this job. | [optional] 
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the job. | [optional] 
**type** |  **Enum** [  'CREATE_DRAFT' ] | Type of the job, will always be CREATE_DRAFT for this type of job. | [optional] 
**message** | **str** | Message providing information about the outcome of the draft process. | [optional] 
**requester_name** | **str** | The name of user that that initiated the draft process. | [optional] 
**file_exists** | **bool** | Whether or not a file was generated for this draft. | [optional] [default to True]
**created** | **datetime** | The time the job was started. | [optional] 
**modified** | **datetime** | The time of the last update to the job. | [optional] 
**completed** | **datetime** | The time the job was completed. | [optional] 
**name** | **str** | Name of the draft. | [optional] 
**source_tenant** | **str** | Tenant owner of the backup from which the draft was generated. | [optional] 
**source_backup_id** | **str** | Id of the backup from which the draft was generated. | [optional] 
**source_backup_name** | **str** | Name of the backup from which the draft was generated. | [optional] 
**mode** |  **Enum** [  'RESTORE',    'PROMOTE',    'UPLOAD' ] | Denotes the origin of the source backup from which the draft was generated. - RESTORE - Same tenant. - PROMOTE - Different tenant. - UPLOAD - Uploaded configuration. | [optional] 
**approval_status** |  **Enum** [  'DEFAULT',    'PENDING_APPROVAL',    'APPROVED',    'DENIED' ] | Approval status of the draft used to determine whether or not the draft can be deployed. | [optional] 
**approval_comment** | [**[]Approvalcomment**](approvalcomment) | List of comments that have been exchanged between an approval requester and an approver. | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.draftresponse import Draftresponse

draftresponse = Draftresponse(
job_id='07659d7d-2cce-47c0-9e49-185787ee565a',
status='COMPLETE',
type='CREATE_DRAFT',
message='Draft creation message',
requester_name='requester.name',
file_exists=True,
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z',
completed='2021-05-11T22:23:16Z',
name='Draft name',
source_tenant='source-tenant',
source_backup_id='549bf881-1ac4-4a64-9acf-6014e8a3a887',
source_backup_name='Source backup name',
mode='RESTORE',
approval_status='APPROVED',
approval_comment=[
                    sailpoint.configuration_hub.models.approval_comment.Approval Comment(
                        comment = 'Approval comment', 
                        timestamp = '2021-05-11T22:23:16Z', 
                        user = 'user.name', 
                        id = '549bf881-1ac4-4a64-9acf-6014e8a3a887', 
                        changed_to_status = 'PENDING_APPROVAL', )
                    ]
)

```
[[Back to top]](#) 

