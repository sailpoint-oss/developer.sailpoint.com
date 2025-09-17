---
id: approval-scheme-for-role
title: ApprovalSchemeForRole
pagination_label: ApprovalSchemeForRole
sidebar_label: ApprovalSchemeForRole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalSchemeForRole', 'ApprovalSchemeForRole'] 
slug: /tools/sdk/python/v3/models/approval-scheme-for-role
tags: ['SDK', 'Software Development Kit', 'ApprovalSchemeForRole', 'ApprovalSchemeForRole']
---

# ApprovalSchemeForRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'OWNER',    'MANAGER',    'GOVERNANCE_GROUP',    'WORKFLOW' ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.  | [optional] 
**approver_id** | **str** | Id of the specific approver, used when approverType is GOVERNANCE_GROUP or WORKFLOW. | [optional] 
}

## Example

```python
from sailpoint.v3.models.approval_scheme_for_role import ApprovalSchemeForRole

approval_scheme_for_role = ApprovalSchemeForRole(
approver_type='GOVERNANCE_GROUP',
approver_id='46c79819-a69f-49a2-becb-12c971ae66c6'
)

```
[[Back to top]](#) 

