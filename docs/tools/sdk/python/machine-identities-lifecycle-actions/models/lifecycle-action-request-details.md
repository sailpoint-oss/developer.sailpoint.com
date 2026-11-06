# LifecycleActionRequestDetails

# LifecycleActionRequestDetails

Nested lifecycle execution context stored on the lifecycle request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Lifecyclestatus** |  | [optional] 
**action** | **Lifecycleaction** |  | [optional] 
**approver** | [**LifecycleApproverReference**](lifecycle-approver-reference) |  | [optional] 
**approved_at** | **datetime** | Time when the request was approved (ISO-8601). | [optional] 
**canceller** | [**LifecycleRequesterReference**](lifecycle-requester-reference) |  | [optional] 
**canceled_at** | **datetime** | Time when the request was canceled (ISO-8601). | [optional] 
**cancel_comment** | **str** | Comment provided when the request was canceled. | [optional] 
**comments** | [**[]LifecycleComment**](lifecycle-comment) | Append-only comment thread for the lifecycle request. | [optional] 
**failure_phase** | **str** | Workflow phase where the request failed, when applicable. | [optional] 
**failure_reason** | **str** | Failure reason for the lifecycle request, when applicable. | [optional] 
**resource** | [**LifecycleResourceSummary**](lifecycle-resource-summary) |  | [optional] 
**resource_owners** | [**[]LifecycleOwnerReference**](lifecycle-owner-reference) | Cached resource owners for the lifecycle target. | [optional] 
**source_owner** | [**LifecycleOwnerReference**](lifecycle-owner-reference) |  | [optional] 
**requester** | [**LifecycleRequesterReference**](lifecycle-requester-reference) |  | [optional] 
**approval_request_id** | **str** | Approvals identifier when the request was submitted. | [optional] 
**approval_settings_id** | **str** | Approval settings identifier used for the request. | [optional] 
**provisioning** | [**LifecycleProvisioning**](lifecycle-provisioning) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_request_details import LifecycleActionRequestDetails

lifecycle_action_request_details = LifecycleActionRequestDetails(
status='RECEIVED',
action='DEACTIVATE',
approver=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_approver_reference.Lifecycle Approver Reference(
                    type = 'IDENTITY', 
                    id = '2c9180858082150f0180893dbaf44201', 
                    name = 'Alex Approver', ),
approved_at='2026-05-26T19:02Z',
canceller=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_requester_reference.Lifecycle Requester Reference(
                    type = 'IDENTITY', 
                    id = '2c9180858082150f0180893dbaf44201', 
                    name = 'Pat Manager', ),
canceled_at='2026-05-26T19:03Z',
cancel_comment='Cancelling - will resubmit after maintenance window',
comments=[
                    sailpoint.machine_identities_lifecycle_actions.models.lifecycle_comment.Lifecycle Comment(
                        comment_id = 'cmt-001', 
                        author = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_comment_author_reference.Lifecycle Comment Author Reference(
                            type = 'IDENTITY', 
                            id = '2c9180858082150f0180893dbaf44201', 
                            name = 'Pat Manager', ), 
                        comment = 'Suspending agent until security review completes', 
                        created_at = '2026-05-26T19:00Z', )
                    ],
failure_phase='WORKFLOW_START',
failure_reason='Operation can't be performed on AgentAlias when Agent is in Not Prepared state.',
resource=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_resource_summary.Lifecycle Resource Summary(
                    id = '1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0', 
                    resource_id = 'aws:bedrock:agent-42', 
                    name = 'Support Agent', 
                    source_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa', 
                    source_name = 'AWS Bedrock', 
                    subtype = 'AI_AGENT', ),
resource_owners=[
                    sailpoint.machine_identities_lifecycle_actions.models.lifecycle_owner_reference.Lifecycle Owner Reference(
                        type = 'IDENTITY', 
                        id = '2c9180858082150f0180893dbaf44201', 
                        name = 'Pat Manager', )
                    ],
source_owner=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_owner_reference.Lifecycle Owner Reference(
                    type = 'IDENTITY', 
                    id = '2c9180858082150f0180893dbaf44201', 
                    name = 'Pat Manager', ),
requester=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_requester_reference.Lifecycle Requester Reference(
                    type = 'IDENTITY', 
                    id = '2c9180858082150f0180893dbaf44201', 
                    name = 'Pat Manager', ),
approval_request_id='a0220198-4b01-444b-8ac3-7a8a147a3791',
approval_settings_id='approval-settings-001',
provisioning=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_provisioning.Lifecycle Provisioning(
                    status = 'NOT_STARTED', 
                    started = '2026-05-26T19:05Z', 
                    ended = '2026-05-26T19:10Z', )
)

```
[[Back to top]](#) 

