---
id: revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Revocability', 'Revocability'] 
slug: /tools/sdk/python/v3/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'Revocability']
---

# Revocability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps in approving the revocation request | [optional] 
}

## Example

```python
from sailpoint.v3.models.revocability import Revocability

revocability = Revocability(
approval_schemes=[
                    sailpoint.v3.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ]
)

```
[[Back to top]](#) 

