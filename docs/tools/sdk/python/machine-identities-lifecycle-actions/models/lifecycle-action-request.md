# LifecycleActionRequest

# LifecycleActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Lifecycle request identifier. | [optional] 
**tenant_id** | **str** | Tenant identifier for the lifecycle request. | [optional] 
**status_type** | **str** | Generic request status type discriminator. | [optional] 
**requested_by** | **str** | Identity id of the principal that submitted the request. | [optional] 
**target_type** |  **Enum** [  'AI_AGENT' ] | Resource type targeted by the lifecycle request. | [optional] 
**target_id** | **str** | Internal machine identity UUID for the lifecycle target. | [optional] 
**operation_type** | **Lifecycleaction** |  | [optional] 
**workflow_id** | **str** | Temporal workflow identifier for the lifecycle request. | [optional] 
**completed** | **bool** | Indicates whether the lifecycle request has reached a terminal state. | [optional] [default to False]
**details** | [**LifecycleActionRequestDetails**](lifecycle-action-request-details) |  | [optional] 
**created** | **datetime** | Time when the lifecycle request was created (ISO-8601). | [optional] 
**modified** | **datetime** | Time when the lifecycle request was last modified (ISO-8601). | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_request import LifecycleActionRequest

lifecycle_action_request = LifecycleActionRequest(
id='a1b2c3d4-e5f6-7890-abcd-ef1234567890',
tenant_id='tenant-001',
status_type='LIFECYCLE_ACTIONS_REQUEST',
requested_by='2c9180858082150f0180893dbaf44201',
target_type='AI_AGENT',
target_id='1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0',
operation_type='DEACTIVATE',
workflow_id='sp:resource-lifecycle:AI_AGENT:a1b2c3d4-e5f6-7890-abcd-ef1234567890',
completed=False,
details=sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_request_details.Lifecycle Action Request Details(
                    status = 'RECEIVED', 
                    action = 'DEACTIVATE', 
                    approver = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_approver_reference.Lifecycle Approver Reference(
                        type = 'IDENTITY', 
                        id = '2c9180858082150f0180893dbaf44201', 
                        name = 'Alex Approver', ), 
                    approved_at = '2026-05-26T19:02Z', 
                    canceller = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_requester_reference.Lifecycle Requester Reference(
                        type = 'IDENTITY', 
                        id = '2c9180858082150f0180893dbaf44201', 
                        name = 'Pat Manager', ), 
                    canceled_at = '2026-05-26T19:03Z', 
                    cancel_comment = 'Cancelling - will resubmit after maintenance window', 
                    comments = [
                        sailpoint.machine_identities_lifecycle_actions.models.lifecycle_comment.Lifecycle Comment(
                            comment_id = 'cmt-001', 
                            author = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_comment_author_reference.Lifecycle Comment Author Reference(
                                type = 'IDENTITY', 
                                id = '2c9180858082150f0180893dbaf44201', 
                                name = 'Pat Manager', ), 
                            comment = 'Suspending agent until security review completes', 
                            created_at = '2026-05-26T19:00Z', )
                        ], 
                    failure_phase = 'WORKFLOW_START', 
                    failure_reason = 'Operation can't be performed on AgentAlias when Agent is in Not Prepared state.', 
                    resource = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_resource_summary.Lifecycle Resource Summary(
                        id = '1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0', 
                        resource_id = 'aws:bedrock:agent-42', 
                        name = 'Support Agent', 
                        source_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa', 
                        source_name = 'AWS Bedrock', 
                        subtype = 'AI_AGENT', ), 
                    resource_owners = [
                        sailpoint.machine_identities_lifecycle_actions.models.lifecycle_owner_reference.Lifecycle Owner Reference(
                            type = 'IDENTITY', 
                            id = '2c9180858082150f0180893dbaf44201', 
                            name = 'Pat Manager', )
                        ], 
                    source_owner = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_owner_reference.Lifecycle Owner Reference(
                        type = 'IDENTITY', 
                        id = '2c9180858082150f0180893dbaf44201', 
                        name = 'Pat Manager', ), 
                    requester = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_requester_reference.Lifecycle Requester Reference(
                        type = 'IDENTITY', 
                        id = '2c9180858082150f0180893dbaf44201', 
                        name = 'Pat Manager', ), 
                    approval_request_id = 'a0220198-4b01-444b-8ac3-7a8a147a3791', 
                    approval_settings_id = 'approval-settings-001', 
                    provisioning = sailpoint.machine_identities_lifecycle_actions.models.lifecycle_provisioning.Lifecycle Provisioning(
                        started = '2026-05-26T19:05Z', 
                        ended = '2026-05-26T19:10Z', ), ),
created='2026-05-26T19:00Z',
modified='2026-05-26T19:05Z'
)

```
[[Back to top]](#) 

