---
id: approvalstatusdto
title: Approvalstatusdto
pagination_label: Approvalstatusdto
sidebar_label: Approvalstatusdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalstatusdto', 'Approvalstatusdto'] 
slug: /tools/sdk/python/access-requests/models/approvalstatusdto
tags: ['SDK', 'Software Development Kit', 'Approvalstatusdto', 'Approvalstatusdto']
---

# Approvalstatusdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to False]
**original_owner** | [**ApprovalstatusdtoOriginalOwner**](approvalstatusdto-original-owner) |  | [optional] 
**current_owner** | [**ApprovalstatusdtoCurrentOwner**](approvalstatusdto-current-owner) |  | [optional] 
**modified** | **datetime** | Time at which item was modified. | [optional] 
**status** | [**Manualworkitemstate**](manualworkitemstate) |  | [optional] 
**scheme** | [**Approvalscheme**](approvalscheme) |  | [optional] 
**error_messages** | [**[]Errormessagedto**](errormessagedto) | If the request failed, includes any error messages that were generated. | [optional] 
**comment** | **str** | Comment, if any, provided by the approver. | [optional] 
**remove_date** | **datetime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.approvalstatusdto import Approvalstatusdto

approvalstatusdto = Approvalstatusdto(
forwarded=False,
original_owner=sailpoint.access_requests.models.approvalstatusdto_original_owner.approvalstatusdto_originalOwner(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
current_owner=,
modified='2019-08-23T18:52:57.398Z',
status='PENDING',
scheme='MANAGER',
error_messages=[
                    sailpoint.access_requests.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
comment='I approve this request',
remove_date='2020-07-11T00:00Z'
)

```
[[Back to top]](#) 

