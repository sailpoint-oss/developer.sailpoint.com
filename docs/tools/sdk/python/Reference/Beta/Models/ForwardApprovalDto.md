---
id: beta-forward-approval-dto
title: ForwardApprovalDto
pagination_label: ForwardApprovalDto
sidebar_label: ForwardApprovalDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ForwardApprovalDto', 'BetaForwardApprovalDto'] 
slug: /tools/sdk/python/beta/models/forward-approval-dto
tags: ['SDK', 'Software Development Kit', 'ForwardApprovalDto', 'BetaForwardApprovalDto']
---

# ForwardApprovalDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_owner_id** | **str** | The Id of the new owner | [required]
**comment** | **str** | The comment provided by the forwarder | [required]
}

## Example

```python
from sailpoint.beta.models.forward_approval_dto import ForwardApprovalDto

forward_approval_dto = ForwardApprovalDto(
new_owner_id='0',
comment='0'
)

```
[[Back to top]](#) 

