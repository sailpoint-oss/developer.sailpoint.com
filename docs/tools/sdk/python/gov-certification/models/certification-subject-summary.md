# CertificationSubjectSummary

# CertificationSubjectSummary

The subject being targeted by a certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject_type** |  **Enum** [  'IDENTITY',    'MACHINE_IDENTITY',    'ROLE' ] | The type of subject being targeted by this certification | [optional] 
**id** | **str** | The subject id | [optional] 
**subject_name** | **str** | Name of the target subject | [optional] 
**subject_target_id** | **str** | The ID of the entity being targeted by a certification | [optional] 
**completed** | **bool** | Indicates whether the review items for the linked subject's certification have been completed | [optional] [default to False]
**subject_email** | **str** | Email of the subject | [optional] 
**subject_manager_name** | **str** | The name of the subject's manager | [optional] 
**identity_state** |  **Enum** [  'ACTIVE',    'INACTIVE_LONG_TERM',    'INACTIVE_SHORT_TERM' ] | The state of identity/subject | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.certification_subject_summary import CertificationSubjectSummary

certification_subject_summary = CertificationSubjectSummary(
subject_type='IDENTITY',
id='10dcb487-fd0d-44a1-8338-e48e7b9caf61',
subject_name='Alison Ferguson',
subject_target_id='2c9180857182306001719937377a33de',
completed=False,
subject_email='Alison.Ferguson@email.com',
subject_manager_name='Bobby Boss',
identity_state='ACTIVE'
)

```
[[Back to top]](#) 

