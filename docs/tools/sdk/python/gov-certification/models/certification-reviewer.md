# CertificationReviewer

# CertificationReviewer

Details of the cert reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Identity or Governance Group | [optional] 
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Type of the reviewer | [optional] 
**name** | **str** | Human-readable display name of the Identity or Governance Group | [optional] 
**email** | **str** | The email of the Identity | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.certification_reviewer import CertificationReviewer

certification_reviewer = CertificationReviewer(
id='0fbe863c063c4c88a35fd7f17e8a3df5',
type='IDENTITY',
name='William Wilson',
email='William.Wilson@email.com'
)

```
[[Back to top]](#) 

