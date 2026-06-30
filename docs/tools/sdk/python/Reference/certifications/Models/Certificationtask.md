---
id: certificationtask
title: Certificationtask
pagination_label: Certificationtask
sidebar_label: Certificationtask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certificationtask', 'Certificationtask'] 
slug: /tools/sdk/python/certifications/models/certificationtask
tags: ['SDK', 'Software Development Kit', 'Certificationtask', 'Certificationtask']
---

# Certificationtask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the certification task. | [optional] 
**type** |  **Enum** [  'REASSIGN',    'ADMIN_REASSIGN',    'COMPLETE_CERTIFICATION',    'FINISH_CERTIFICATION',    'COMPLETE_CAMPAIGN',    'ACTIVATE_CAMPAIGN',    'CAMPAIGN_CREATE',    'CAMPAIGN_DELETE' ] | The type of the certification task. More values may be added in the future. | [optional] 
**target_type** |  **Enum** [  'CERTIFICATION',    'CAMPAIGN' ] | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [optional] 
**target_id** | **str** | The ID of the item being operated on by this task. | [optional] 
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The status of the task. | [optional] 
**errors** | [**[]Errormessagedto**](errormessagedto) | List of error messages | [optional] 
**reassignment_trail_dtos** | [**[]Reassignmenttraildto**](reassignmenttraildto) | Reassignment trails that lead to self certification identity | [optional] 
**created** | **datetime** | The date and time on which this task was created. | [optional] 
}

## Example

```python
from sailpoint.certifications.models.certificationtask import Certificationtask

certificationtask = Certificationtask(
id='2c918086719eec070171a7e3355a360a',
type='ADMIN_REASSIGN',
target_type='CAMPAIGN',
target_id='2c918086719eec070171a7e3355a834c',
status='QUEUED',
errors={"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"},
reassignment_trail_dtos={"previousOwner":"ef38f94347e94562b5bb8424a56397d8","newOwner":"ef38f94347e94562b5bb8424a56397a3","reassignmentType":"AUTOMATIC_REASSIGNMENT"},
created='2020-09-24T18:10:47.693Z'
)

```
[[Back to top]](#) 

