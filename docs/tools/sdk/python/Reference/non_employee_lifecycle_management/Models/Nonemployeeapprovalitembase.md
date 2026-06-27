---
id: nonemployeeapprovalitembase
title: Nonemployeeapprovalitembase
pagination_label: Nonemployeeapprovalitembase
sidebar_label: Nonemployeeapprovalitembase
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeeapprovalitembase', 'Nonemployeeapprovalitembase'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeeapprovalitembase
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalitembase', 'Nonemployeeapprovalitembase']
---

# Nonemployeeapprovalitembase


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
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalitembase import Nonemployeeapprovalitembase

nonemployeeapprovalitembase = Nonemployeeapprovalitembase(
id='2c1e388b-1e55-4b0a-ab5c-897f1204159c',
approver=sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', ),
account_name='test.account',
approval_status='APPROVED',
approval_order=1,
comment='I approve',
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z'
)

```
[[Back to top]](#) 

