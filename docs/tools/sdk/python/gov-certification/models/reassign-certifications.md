# ReassignCertifications

# ReassignCertifications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_ids** | **[]str** | List of certification IDs to reassign | [required]
**reassign_to** | [**ReassignCertificationsReassignTo**](reassign-certifications-reassign-to) |  | [required]
**reason** | **str** | Comment to explain why the certification was reassigned | [required]
\}

## Example

```python
from sailpoint.gov_certification.models.reassign_certifications import ReassignCertifications

reassign_certifications = ReassignCertifications(
certification_ids=["af385946-4779-4712-91bb-8424a563abc1","af385946-4779-4712-91bb-8424a563abc2","af385946-4779-4712-91bb-8424a563abc3"],
reassign_to=sailpoint.gov_certification.models.reassign_certifications_reassign_to.ReassignCertifications_reassignTo(
                    id = '0fbe863c-063c-4c88-a35f-d7f17e8a3df5', 
                    type = 'IDENTITY', ),
reason='Reassigning the certifications'
)

```
[[Back to top]](#) 

