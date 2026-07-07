---
id: entitlementapprovalscheme
title: Entitlementapprovalscheme
pagination_label: Entitlementapprovalscheme
sidebar_label: Entitlementapprovalscheme
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementapprovalscheme', 'Entitlementapprovalscheme'] 
slug: /tools/sdk/python/sources/models/entitlementapprovalscheme
tags: ['SDK', 'Software Development Kit', 'Entitlementapprovalscheme', 'Entitlementapprovalscheme']
---

# Entitlementapprovalscheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'ENTITLEMENT_OWNER',    'SOURCE_OWNER',    'MANAGER',    'GOVERNANCE_GROUP',    'WORKFLOW' ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field, Workflows are exclusive to other types of approvals and License required.      | [optional] 
**approver_id** | **str** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW | [optional] 
}

## Example

```python
from sailpoint.sources.models.entitlementapprovalscheme import Entitlementapprovalscheme

entitlementapprovalscheme = Entitlementapprovalscheme(
approver_type='GOVERNANCE_GROUP',
approver_id='e3eab852-8315-467f-9de7-70eda97f63c8'
)

```
[[Back to top]](#) 

