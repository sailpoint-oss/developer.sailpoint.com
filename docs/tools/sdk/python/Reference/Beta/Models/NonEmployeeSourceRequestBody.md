---
id: beta-non-employee-source-request-body
title: NonEmployeeSourceRequestBody
pagination_label: NonEmployeeSourceRequestBody
sidebar_label: NonEmployeeSourceRequestBody
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeSourceRequestBody', 'BetaNonEmployeeSourceRequestBody'] 
slug: /tools/sdk/python/beta/models/non-employee-source-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceRequestBody', 'BetaNonEmployeeSourceRequestBody']
---

# NonEmployeeSourceRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of non-employee source. | [required]
**description** | **str** | Description of non-employee source. | [required]
**owner** | [**NonEmployeeIdnUserRequest**](non-employee-idn-user-request) |  | [required]
**management_workgroup** | **str** | The ID for the management workgroup that contains source sub-admins | [optional] 
**approvers** | [**[]NonEmployeeIdnUserRequest**](non-employee-idn-user-request) | List of approvers. | [optional] 
**account_managers** | [**[]NonEmployeeIdnUserRequest**](non-employee-idn-user-request) | List of account managers. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_source_request_body import NonEmployeeSourceRequestBody

non_employee_source_request_body = NonEmployeeSourceRequestBody(
name='Retail',
description='Source description',
owner=sailpoint.beta.models.non_employee_idn_user_request.Non Employee Idn User Request(
                    id = '2c91808570313110017040b06f344ec9', ),
management_workgroup='123299',
approvers=[
                    sailpoint.beta.models.non_employee_idn_user_request.Non Employee Idn User Request(
                        id = '2c91808570313110017040b06f344ec9', )
                    ],
account_managers=[
                    sailpoint.beta.models.non_employee_idn_user_request.Non Employee Idn User Request(
                        id = '2c91808570313110017040b06f344ec9', )
                    ]
)

```
[[Back to top]](#) 

