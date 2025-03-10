---
id: beta-non-employee-approval-item
title: NonEmployeeApprovalItem
pagination_label: NonEmployeeApprovalItem
sidebar_label: NonEmployeeApprovalItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeApprovalItem', 'BetaNonEmployeeApprovalItem'] 
slug: /tools/sdk/python/beta/models/non-employee-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItem', 'BetaNonEmployeeApprovalItem']
---

# NonEmployeeApprovalItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee approval item id | [optional] 
**approver** | [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**account_name** | **str** | Requested identity account name | [optional] 
**approval_status** | [**ApprovalStatus**](approval-status) |  | [optional] 
**approval_order** | **float** | Approval order | [optional] 
**comment** | **str** | comment of approver | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
**non_employee_request** | [**NonEmployeeRequestLite**](non-employee-request-lite) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_approval_item import NonEmployeeApprovalItem

non_employee_approval_item = NonEmployeeApprovalItem(
id='2c1e388b-1e55-4b0a-ab5c-897f1204159c',
approver=sailpoint.beta.models.identity_reference_with_id.IdentityReferenceWithId(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', ),
account_name='test.account',
approval_status='APPROVED',
approval_order=1,
comment='true',
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z',
non_employee_request=sailpoint.beta.models.non_employee_request_lite.NonEmployeeRequestLite(
                    id = 'ac10e21c-931c-1ef2-8193-1c51e7ff0003', 
                    requester = sailpoint.beta.models.identity_reference_with_id.IdentityReferenceWithId(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', ), )
)

```
[[Back to top]](#) 

