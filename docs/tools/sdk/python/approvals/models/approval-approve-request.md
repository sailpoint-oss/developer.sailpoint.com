# ApprovalApproveRequest

# ApprovalApproveRequest

Approval Approve Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_attributes** | **map[string]str** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**comment** | **str** | Comment associated with the request. | [optional] 
**override_approver_id** | **str** | Optional field for ServiceNow Administrators to specify which member of a governance group to override/approve on behalf of. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_approve_request import ApprovalApproveRequest

approval_approve_request = ApprovalApproveRequest(
additional_attributes={"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"},
comment='comment',
override_approver_id='12345678901234567890123456789012'
)

```
[[Back to top]](#) 

