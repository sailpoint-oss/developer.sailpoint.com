---
id: v2025-non-employee-request-without-approval-item
title: NonEmployeeRequestWithoutApprovalItem
pagination_label: NonEmployeeRequestWithoutApprovalItem
sidebar_label: NonEmployeeRequestWithoutApprovalItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequestWithoutApprovalItem', 'V2025NonEmployeeRequestWithoutApprovalItem'] 
slug: /tools/sdk/python/v2025/models/non-employee-request-without-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestWithoutApprovalItem', 'V2025NonEmployeeRequestWithoutApprovalItem']
---

# NonEmployeeRequestWithoutApprovalItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee request id. | [optional] 
**requester** | [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 
**account_name** | **str** | Requested identity account name. | [optional] 
**first_name** | **str** | Non-Employee's first name. | [optional] 
**last_name** | **str** | Non-Employee's last name. | [optional] 
**email** | **str** | Non-Employee's email. | [optional] 
**phone** | **str** | Non-Employee's phone. | [optional] 
**manager** | **str** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**non_employee_source** | [**NonEmployeeSourceLiteWithSchemaAttributes**](non-employee-source-lite-with-schema-attributes) |  | [optional] 
**data** | **map[string]str** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**approval_status** | [**ApprovalStatus**](approval-status) |  | [optional] 
**comment** | **str** | Comment of requester | [optional] 
**completion_date** | **datetime** | When the request was completely approved. | [optional] 
**start_date** | **date** | Non-Employee employment start date. | [optional] 
**end_date** | **date** | Non-Employee employment end date. | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.non_employee_request_without_approval_item import NonEmployeeRequestWithoutApprovalItem

non_employee_request_without_approval_item = NonEmployeeRequestWithoutApprovalItem(
id='ac110005-7156-1150-8171-5b292e3e0084',
requester=sailpoint.v2025.models.non_employee_identity_reference_with_id.NonEmployeeIdentityReferenceWithId(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', ),
account_name='william.smith',
first_name='William',
last_name='Smith',
email='william.smith@example.com',
phone='5125555555',
manager='jane.doe',
non_employee_source=,
data={description=Auditing},
approval_status='APPROVED',
comment='approved',
completion_date='2020-03-24T11:11:41.139-05:00',
start_date='Tue Mar 24 00:00:00 UTC 2020',
end_date='Thu Mar 25 00:00:00 UTC 2021',
modified='2020-03-24T11:11:41.139-05:00',
created='2020-03-24T11:11:41.139-05:00'
)

```
[[Back to top]](#) 

