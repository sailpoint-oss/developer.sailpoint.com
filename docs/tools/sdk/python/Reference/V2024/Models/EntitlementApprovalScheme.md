---
id: v2024-entitlement-approval-scheme
title: EntitlementApprovalScheme
pagination_label: EntitlementApprovalScheme
sidebar_label: EntitlementApprovalScheme
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementApprovalScheme', 'V2024EntitlementApprovalScheme'] 
slug: /tools/sdk/python/v2024/models/entitlement-approval-scheme
tags: ['SDK', 'Software Development Kit', 'EntitlementApprovalScheme', 'V2024EntitlementApprovalScheme']
---

# EntitlementApprovalScheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'ENTITLEMENT_OWNER',    'SOURCE_OWNER',    'MANAGER',    'GOVERNANCE_GROUP',    'WORKFLOW' ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field, Workflows are exclusive to other types of approvals and License required.      | [optional] 
**approver_id** | **str** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement_approval_scheme import EntitlementApprovalScheme

entitlement_approval_scheme = EntitlementApprovalScheme(
approver_type='GOVERNANCE_GROUP',
approver_id='e3eab852-8315-467f-9de7-70eda97f63c8'
)

```
[[Back to top]](#) 

