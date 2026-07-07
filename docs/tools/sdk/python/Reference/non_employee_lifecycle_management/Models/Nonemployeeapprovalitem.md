---
id: nonemployeeapprovalitem
title: Nonemployeeapprovalitem
pagination_label: Nonemployeeapprovalitem
sidebar_label: Nonemployeeapprovalitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeeapprovalitem', 'Nonemployeeapprovalitem'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeeapprovalitem
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalitem', 'Nonemployeeapprovalitem']
---

# Nonemployeeapprovalitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee approval item id | [optional] 
**approver** | [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
**account_name** | **str** | Requested identity account name | [optional] 
**approval_status** | [**Approvalstatus**](approvalstatus) |  | [optional] 
**approval_order** | **float** | Approval order | [optional] 
**comment** | **str** | comment of approver | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
**non_employee_request** | [**Nonemployeerequestlite**](nonemployeerequestlite) |  | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalitem import Nonemployeeapprovalitem

nonemployeeapprovalitem = Nonemployeeapprovalitem(
id='2c1e388b-1e55-4b0a-ab5c-897f1204159c',
approver=sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', ),
account_name='test.account',
approval_status='APPROVED',
approval_order=1,
comment='I approve',
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z',
non_employee_request=sailpoint.non_employee_lifecycle_management.models.nonemployeerequestlite.nonemployeerequestlite(
                    id = 'ac110005-7156-1150-8171-5b292e3e0084', 
                    requester = sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', ), )
)

```
[[Back to top]](#) 

