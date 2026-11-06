# CertificationTask

# CertificationTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the task | [required]
**target_id** | **str** | ID of the item for which the task is targeting | [optional] 
**type** |  **Enum** [  'CREATE_CAMPAIGN',    'SEARCH_CAMPAIGN',    'GENERATE_CAMPAIGN',    'ACTIVATE_CAMPAIGN',    'COMPLETE_CAMPAIGN',    'COMPLETE_CERTIFICATION',    'REASSIGN_SUBJECTS_AND_ITEMS',    'REASSIGN_CERTIFICATIONS',    'FINISH_CAMPAIGN',    'FINALIZE_ACTIVATE_CAMPAIGN',    'DELETE_CAMPAIGN',    'DELETE_CAMPAIGN_DATA',    'FINISH_CERTIFICATION' ] | Type of the task | [optional] 
**target_type** |  **Enum** [  'CERTIFICATION',    'CAMPAIGN' ] | Type of the item being targeted by the task | [optional] 
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | Status of the task | [optional] 
**errors** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**reassignment_trails** | [**[]ReassignmentTrail**](reassignment-trail) | Reassignment trails that lead to self certification during the reassignment | [optional] 
**created** | **datetime** | Created time of the task | [optional] [readonly] 
\}

## Example

```python
from sailpoint.gov_certification.models.certification_task import CertificationTask

certification_task = CertificationTask(
id='ef38f94347e94562b5bb8424a56397d8',
target_id='e2e48c27-721c-4eb8-8622-2d7b46d8a6e7',
type='REASSIGN_CERTIFICATIONS',
target_type='CERTIFICATION',
status='SUCCESS',
errors=[
                    sailpoint.gov_certification.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
reassignment_trails=[
                    sailpoint.gov_certification.models.reassignment_trail.ReassignmentTrail(
                        previous_reviewer = sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                            id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                            name = 'William Wilson', ), 
                        new_reviewer = sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                            id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                            name = 'William Wilson', ), 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ],
created='2020-03-03T22:15:13.611Z'
)

```
[[Back to top]](#) 

