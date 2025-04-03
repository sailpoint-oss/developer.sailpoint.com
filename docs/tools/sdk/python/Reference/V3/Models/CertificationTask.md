---
id: certification-task
title: CertificationTask
pagination_label: CertificationTask
sidebar_label: CertificationTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationTask', 'CertificationTask'] 
slug: /tools/sdk/python/v3/models/certification-task
tags: ['SDK', 'Software Development Kit', 'CertificationTask', 'CertificationTask']
---

# CertificationTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the certification task. | [optional] 
**type** |  **Enum** [  'REASSIGN',    'ADMIN_REASSIGN',    'COMPLETE_CERTIFICATION',    'FINISH_CERTIFICATION',    'COMPLETE_CAMPAIGN',    'ACTIVATE_CAMPAIGN',    'CAMPAIGN_CREATE',    'CAMPAIGN_DELETE' ] | The type of the certification task. More values may be added in the future. | [optional] 
**target_type** |  **Enum** [  'CERTIFICATION',    'CAMPAIGN' ] | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [optional] 
**target_id** | **str** | The ID of the item being operated on by this task. | [optional] 
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The status of the task. | [optional] 
**errors** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
**reassignment_trail_dtos** | [**[]ReassignmentTrailDTO**](reassignment-trail-dto) | Reassignment trails that lead to self certification identity | [optional] 
**created** | **datetime** | The date and time on which this task was created. | [optional] 
}

## Example

```python
from sailpoint.v3.models.certification_task import CertificationTask

certification_task = CertificationTask(
id='2c918086719eec070171a7e3355a360a',
type='ADMIN_REASSIGN',
target_type='CAMPAIGN',
target_id='2c918086719eec070171a7e3355a834c',
status='QUEUED',
errors=[
                    sailpoint.v3.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
reassignment_trail_dtos={previousOwner=ef38f94347e94562b5bb8424a56397d8, newOwner=ef38f94347e94562b5bb8424a56397a3, reassignmentType=AUTOMATIC_REASSIGNMENT},
created='2020-09-24T18:10:47.693Z'
)

```
[[Back to top]](#) 

