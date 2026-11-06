# Requestability

# Requestability

Access request configuration for this object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_required** | **bool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to False]
**denial_comments_required** | **bool** | Whether an approver must provide comments when denying the request | [optional] [default to False]
**approval_schemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps in approving the request | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.requestability import Requestability

requestability = Requestability(
comments_required=True,
denial_comments_required=True,
approval_schemes=[
                    sailpoint.gov_certification.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ]
)

```
[[Back to top]](#) 

