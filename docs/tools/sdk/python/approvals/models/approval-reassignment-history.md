# ApprovalReassignmentHistory

# ApprovalReassignmentHistory

ReassignmentHistoryRecord holds a history record of reassignment and escalation actions for an approval request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_id** | **str** | Unique identifier for the comment associated with the reassignment. | [optional] 
**reassigned_from** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**reassigned_to** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**reassigner** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**reassignment_date** | **datetime** | Date and time when the reassignment occurred. | [optional] 
**reassignment_type** |  **Enum** [  'ESCALATION',    'MANUAL_REASSIGNMENT',    'AUTO_REASSIGNMENT' ] | Type of reassignment, such as escalation or manual reassignment. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_reassignment_history import ApprovalReassignmentHistory

approval_reassignment_history = ApprovalReassignmentHistory(
comment_id='f47ac10b-58cc-4372-a567-0e02b2c3d479',
reassigned_from=sailpoint.approvals.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.approvals.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.approvals.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
reassigned_to=sailpoint.approvals.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.approvals.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.approvals.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
reassigner=sailpoint.approvals.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.approvals.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.approvals.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
reassignment_date='2023-10-01T12:34:56.789Z',
reassignment_type='ESCALATION'
)

```
[[Back to top]](#) 

