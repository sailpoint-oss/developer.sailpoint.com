---
id: v2024-revocability-for-role
title: RevocabilityForRole
pagination_label: RevocabilityForRole
sidebar_label: RevocabilityForRole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RevocabilityForRole', 'V2024RevocabilityForRole'] 
slug: /tools/sdk/python/v2024/models/revocability-for-role
tags: ['SDK', 'Software Development Kit', 'RevocabilityForRole', 'V2024RevocabilityForRole']
---

# RevocabilityForRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_required** | **bool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to False]
**denial_comments_required** | **bool** | Whether an approver must provide comments when denying the request | [optional] [default to False]
**approval_schemes** | [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the revocation request | [optional] 
}

## Example

```python
from sailpoint.v2024.models.revocability_for_role import RevocabilityForRole

revocability_for_role = RevocabilityForRole(
comments_required=False,
denial_comments_required=False,
approval_schemes=[
                    sailpoint.v2024.models.approval_scheme_for_role.ApprovalSchemeForRole(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ]
)

```
[[Back to top]](#) 

