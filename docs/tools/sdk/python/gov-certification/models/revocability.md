# Revocability

# Revocability

Revocation request configuration for this object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps in approving the revocation request | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.revocability import Revocability

revocability = Revocability(
approval_schemes=[
                    sailpoint.gov_certification.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ]
)

```
[[Back to top]](#) 

