---
id: nonemployeesourcerequestbody
title: Nonemployeesourcerequestbody
pagination_label: Nonemployeesourcerequestbody
sidebar_label: Nonemployeesourcerequestbody
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeesourcerequestbody', 'Nonemployeesourcerequestbody'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeesourcerequestbody
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcerequestbody', 'Nonemployeesourcerequestbody']
---

# Nonemployeesourcerequestbody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of non-employee source. | [required]
**description** | **str** | Description of non-employee source. | [required]
**owner** | [**Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) |  | [required]
**management_workgroup** | **str** | The ID for the management workgroup that contains source sub-admins | [optional] 
**approvers** | [**[]Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) | List of approvers. | [optional] 
**account_managers** | [**[]Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) | List of account managers. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcerequestbody import Nonemployeesourcerequestbody

nonemployeesourcerequestbody = Nonemployeesourcerequestbody(
name='Retail',
description='Source description',
owner=sailpoint.non_employee_lifecycle_management.models.nonemployeeidnuserrequest.nonemployeeidnuserrequest(
                    id = '2c91808570313110017040b06f344ec9', ),
management_workgroup='123299',
approvers=[
                    sailpoint.non_employee_lifecycle_management.models.nonemployeeidnuserrequest.nonemployeeidnuserrequest(
                        id = '2c91808570313110017040b06f344ec9', )
                    ],
account_managers=[
                    sailpoint.non_employee_lifecycle_management.models.nonemployeeidnuserrequest.nonemployeeidnuserrequest(
                        id = '2c91808570313110017040b06f344ec9', )
                    ]
)

```
[[Back to top]](#) 

