---
id: nonemployeerequestwithoutapprovalitem
title: Nonemployeerequestwithoutapprovalitem
pagination_label: Nonemployeerequestwithoutapprovalitem
sidebar_label: Nonemployeerequestwithoutapprovalitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeerequestwithoutapprovalitem', 'Nonemployeerequestwithoutapprovalitem'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeerequestwithoutapprovalitem
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestwithoutapprovalitem', 'Nonemployeerequestwithoutapprovalitem']
---

# Nonemployeerequestwithoutapprovalitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee request id. | [optional] 
**requester** | [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
**account_name** | **str** | Requested identity account name. | [optional] 
**first_name** | **str** | Non-Employee's first name. | [optional] 
**last_name** | **str** | Non-Employee's last name. | [optional] 
**email** | **str** | Non-Employee's email. | [optional] 
**phone** | **str** | Non-Employee's phone. | [optional] 
**manager** | **str** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**non_employee_source** | [**Nonemployeesourcelitewithschemaattributes**](nonemployeesourcelitewithschemaattributes) |  | [optional] 
**data** | **map[string]str** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**approval_status** | [**Approvalstatus**](approvalstatus) |  | [optional] 
**comment** | **str** | Comment of requester | [optional] 
**completion_date** | **datetime** | When the request was completely approved. | [optional] 
**start_date** | **date** | Non-Employee employment start date. | [optional] 
**end_date** | **date** | Non-Employee employment end date. | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestwithoutapprovalitem import Nonemployeerequestwithoutapprovalitem

nonemployeerequestwithoutapprovalitem = Nonemployeerequestwithoutapprovalitem(
id='ac110005-7156-1150-8171-5b292e3e0084',
requester=sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', ),
account_name='william.smith',
first_name='William',
last_name='Smith',
email='william.smith@example.com',
phone='5125555555',
manager='jane.doe',
non_employee_source=,
data={"description":"Auditing"},
approval_status='APPROVED',
comment='approved',
completion_date='2020-03-24T11:11:41.139-05:00',
start_date='Mon Mar 23 20:00:00 EDT 2020',
end_date='Wed Mar 24 20:00:00 EDT 2021',
modified='2020-03-24T11:11:41.139-05:00',
created='2020-03-24T11:11:41.139-05:00'
)

```
[[Back to top]](#) 

