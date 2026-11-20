# CertificationReference

# CertificationReference

Previous certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_id** | **str** | ID of certification for review. | [optional] 
**certification_display_name** | **str** | Display name of certification for review. | [optional] 
**reviewer** | [**CertificationReviewer**](certification-reviewer) |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.certification_reference import CertificationReference

certification_reference = CertificationReference(
certification_id='7589a83c-ec4b-4f13-8ce5-6c1a5ef0756d',
certification_display_name='Manager Access for Michael Michaels',
reviewer=sailpoint.gov_certification.models.certification_reviewer.CertificationReviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    type = 'IDENTITY', 
                    name = 'William Wilson', 
                    email = 'William.Wilson@email.com', )
)

```
[[Back to top]](#) 

