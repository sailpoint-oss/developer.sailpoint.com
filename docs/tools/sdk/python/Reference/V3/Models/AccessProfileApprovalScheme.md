---
id: access-profile-approval-scheme
title: AccessProfileApprovalScheme
pagination_label: AccessProfileApprovalScheme
sidebar_label: AccessProfileApprovalScheme
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileApprovalScheme', 'AccessProfileApprovalScheme'] 
slug: /tools/sdk/python/v3/models/access-profile-approval-scheme
tags: ['SDK', 'Software Development Kit', 'AccessProfileApprovalScheme', 'AccessProfileApprovalScheme']
---

# AccessProfileApprovalScheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'APP_OWNER',    'OWNER',    'SOURCE_OWNER',    'MANAGER',    'GOVERNANCE_GROUP' ] | Describes the individual or group that is responsible for an approval step. These are the possible values: **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**approver_id** | **str** | Specific approver ID. Only use this when the `approverType` is `GOVERNANCE_GROUP`. | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_profile_approval_scheme import AccessProfileApprovalScheme

access_profile_approval_scheme = AccessProfileApprovalScheme(
approver_type='GOVERNANCE_GROUP',
approver_id='46c79819-a69f-49a2-becb-12c971ae66c6'
)

```
[[Back to top]](#) 

