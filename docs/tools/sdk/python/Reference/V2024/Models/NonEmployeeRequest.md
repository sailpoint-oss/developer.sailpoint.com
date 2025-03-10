---
id: v2024-non-employee-request
title: NonEmployeeRequest
pagination_label: NonEmployeeRequest
sidebar_label: NonEmployeeRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequest', 'V2024NonEmployeeRequest'] 
slug: /tools/sdk/python/v2024/models/non-employee-request
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequest', 'V2024NonEmployeeRequest']
---

# NonEmployeeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee source id. | [optional] 
**source_id** | **str** | Source Id associated with this non-employee source. | [optional] 
**name** | **str** | Source name associated with this non-employee source. | [optional] 
**description** | **str** | Source description associated with this non-employee source. | [optional] 
**account_name** | **str** | Requested identity account name. | [optional] 
**first_name** | **str** | Non-Employee's first name. | [optional] 
**last_name** | **str** | Non-Employee's last name. | [optional] 
**email** | **str** | Non-Employee's email. | [optional] 
**phone** | **str** | Non-Employee's phone. | [optional] 
**manager** | **str** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**non_employee_source** | [**NonEmployeeSourceLite**](non-employee-source-lite) |  | [optional] 
**data** | **map[string]str** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**approval_items** | [**[]NonEmployeeApprovalItemBase**](non-employee-approval-item-base) | List of approval item for the request | [optional] 
**approval_status** | [**ApprovalStatus**](approval-status) |  | [optional] 
**comment** | **str** | Comment of requester | [optional] 
**completion_date** | **datetime** | When the request was completely approved. | [optional] 
**start_date** | **datetime** | Non-Employee employment start date. | [optional] 
**end_date** | **datetime** | Non-Employee employment end date. | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.non_employee_request import NonEmployeeRequest

non_employee_request = NonEmployeeRequest(
id='a0303682-5e4a-44f7-bdc2-6ce6112549c1',
source_id='2c91808568c529c60168cca6f90c1313',
name='Retail',
description='Source description',
account_name='william.smith',
first_name='William',
last_name='Smith',
email='william.smith@example.com',
phone='5125555555',
manager='jane.doe',
non_employee_source=sailpoint.v2024.models.non_employee_source_lite.NonEmployeeSourceLite(
                    id = 'a0303682-5e4a-44f7-bdc2-6ce6112549c1', 
                    source_id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'Retail', 
                    description = 'Source description', ),
data={description=Auditing},
approval_items=[
                    sailpoint.v2024.models.non_employee_approval_item_base.NonEmployeeApprovalItemBase(
                        id = '2c1e388b-1e55-4b0a-ab5c-897f1204159c', 
                        approver = sailpoint.v2024.models.non_employee_identity_reference_with_id.NonEmployeeIdentityReferenceWithId(
                            type = 'IDENTITY', 
                            id = '5168015d32f890ca15812c9180835d2e', ), 
                        account_name = 'test.account', 
                        approval_status = 'APPROVED', 
                        approval_order = 1, 
                        comment = 'I approve', 
                        modified = '2019-08-23T18:52:59.162Z', 
                        created = '2019-08-23T18:40:35.772Z', )
                    ],
approval_status='APPROVED',
comment='approved',
completion_date='2020-03-24T11:11:41.139-05:00',
start_date='2020-03-24T00:00-05:00',
end_date='2021-03-25T00:00-05:00',
modified='2020-03-24T11:11:41.139-05:00',
created='2020-03-24T11:11:41.139-05:00'
)

```
[[Back to top]](#) 

