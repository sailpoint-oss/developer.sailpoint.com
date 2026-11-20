# ApprovalRequestedTarget

# ApprovalRequestedTarget

Specifies the actual object or target the approval request is for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Target ID (for example a role ID or access profile ID). | [optional] 
**ids** | **[]str** | Target IDs when the approval request applies to multiple targets. | [optional] 
**name** | **str** | Target name (for example a role name or access profile name). | [optional] 
**names** | **[]str** | Target names when the approval request applies to multiple targets. | [optional] 
**target_type** | **str** | Target type (for example Role or Access Profile). | [optional] 
**target_types** | **[]str** | Target types when the approval request applies to multiple targets. | [optional] 
**description** | **str** | Optional description for the requested target. | [optional] 
**ep_level_at_creation** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW',    'NONE' ] | Effective privilege (EP) level at approval creation. | [optional] 
**current_ep_level** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW',    'NONE' ] | Current effective privilege (EP) level for the requested target. | [optional] 
**current_ep_modified_date** | **datetime** | Date and time when the current effective privilege level was last modified. | [optional] 
**request_type** | **str** | Access request type (for example GRANT_ACCESS or REVOKE_ACCESS). | [optional] 
**forced_auth_signature** | **str** | Signature required for forced authentication. | [optional] 
**reauth_required** | **bool** | Indicates whether forced reauthentication is required upon approval. | [optional] [default to False]
**start_date** | **datetime** | When temporary access will be granted, if applicable. | [optional] 
**removal_date** | **datetime** | When temporary access will be removed, if applicable. | [optional] 
**modified_start_date** | **datetime** | Updated start date when startDate is edited during the approval request. | [optional] 
**modified_removal_date** | **datetime** | Updated removal date when removalDate is edited during the approval request. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_requested_target import ApprovalRequestedTarget

approval_requested_target = ApprovalRequestedTarget(
id='string',
ids=["2c9180835d191a86015d28455b4a2329"],
name='string',
names=["Engineering Role"],
target_type='string',
target_types=["ROLE","ACCESS_PROFILE"],
description='string',
ep_level_at_creation='HIGH',
current_ep_level='HIGH',
current_ep_modified_date='2025-07-07T18:10:13.687Z',
request_type='GRANT_ACCESS',
forced_auth_signature='string',
reauth_required=True,
start_date='2025-07-07T18:10:13.687Z',
removal_date='2025-07-07T18:10:13.687Z',
modified_start_date='2025-07-07T18:10:13.687Z',
modified_removal_date='2025-07-07T18:10:13.687Z'
)

```
[[Back to top]](#) 

