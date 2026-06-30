---
id: revocabilityforrole
title: Revocabilityforrole
pagination_label: Revocabilityforrole
sidebar_label: Revocabilityforrole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Revocabilityforrole', 'Revocabilityforrole'] 
slug: /tools/sdk/python/roles/models/revocabilityforrole
tags: ['SDK', 'Software Development Kit', 'Revocabilityforrole', 'Revocabilityforrole']
---

# Revocabilityforrole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_required** | **bool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to False]
**denial_comments_required** | **bool** | Whether an approver must provide comments when denying the request | [optional] [default to False]
**approval_schemes** | [**[]Approvalschemeforrole**](approvalschemeforrole) | List describing the steps in approving the revocation request | [optional] 
}

## Example

```python
from sailpoint.roles.models.revocabilityforrole import Revocabilityforrole

revocabilityforrole = Revocabilityforrole(
comments_required=False,
denial_comments_required=False,
approval_schemes=[
                    sailpoint.roles.models.approvalschemeforrole.approvalschemeforrole(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ]
)

```
[[Back to top]](#) 

