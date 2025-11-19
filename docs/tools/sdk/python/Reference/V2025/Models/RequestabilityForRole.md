---
id: v2025-requestability-for-role
title: RequestabilityForRole
pagination_label: RequestabilityForRole
sidebar_label: RequestabilityForRole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestabilityForRole', 'V2025RequestabilityForRole'] 
slug: /tools/sdk/python/v2025/models/requestability-for-role
tags: ['SDK', 'Software Development Kit', 'RequestabilityForRole', 'V2025RequestabilityForRole']
---

# RequestabilityForRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_required** | **bool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to False]
**denial_comments_required** | **bool** | Whether an approver must provide comments when denying the request | [optional] [default to False]
**reauthorization_required** | **bool** | Indicates whether reauthorization is required for the request. | [optional] [default to False]
**approval_schemes** | [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the request | [optional] 
**dimension_schema** | [**DimensionSchema**](dimension-schema) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.requestability_for_role import RequestabilityForRole

requestability_for_role = RequestabilityForRole(
comments_required=True,
denial_comments_required=True,
reauthorization_required=True,
approval_schemes=[
                    sailpoint.v2025.models.approval_scheme_for_role.ApprovalSchemeForRole(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ],
dimension_schema=sailpoint.v2025.models.dimension_schema.DimensionSchema(
                    dimension_attributes = [
                        sailpoint.v2025.models.dimension_attribute.DimensionAttribute(
                            name = 'city', 
                            display_name = 'City', 
                            derived = True, )
                        ], )
)

```
[[Back to top]](#) 

