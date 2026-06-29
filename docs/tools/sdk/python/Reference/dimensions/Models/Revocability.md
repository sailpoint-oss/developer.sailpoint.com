---
id: revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Revocability', 'Revocability'] 
slug: /tools/sdk/python/dimensions/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'Revocability']
---

# Revocability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]Accessprofileapprovalscheme**](accessprofileapprovalscheme) | List describing the steps involved in approving the revocation request. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.revocability import Revocability

revocability = Revocability(
approval_schemes=[
                    sailpoint.dimensions.models.accessprofileapprovalscheme.accessprofileapprovalscheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ]
)

```
[[Back to top]](#) 

