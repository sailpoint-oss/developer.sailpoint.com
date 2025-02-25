---
id: beta-non-employee-request-body
title: NonEmployeeRequestBody
pagination_label: NonEmployeeRequestBody
sidebar_label: NonEmployeeRequestBody
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequestBody', 'BetaNonEmployeeRequestBody'] 
slug: /tools/sdk/python/beta/models/non-employee-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestBody', 'BetaNonEmployeeRequestBody']
---

# NonEmployeeRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Requested identity account name. | [required]
**first_name** | **str** | Non-Employee's first name. | [required]
**last_name** | **str** | Non-Employee's last name. | [required]
**email** | **str** | Non-Employee's email. | [required]
**phone** | **str** | Non-Employee's phone. | [required]
**manager** | **str** | The account ID of a valid identity to serve as this non-employee's manager. | [required]
**source_id** | **str** | Non-Employee's source id. | [required]
**data** | **map[string]str** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**start_date** | **datetime** | Non-Employee employment start date. | [required]
**end_date** | **datetime** | Non-Employee employment end date. | [required]
}

## Example

```python
from sailpoint.beta.models.non_employee_request_body import NonEmployeeRequestBody

non_employee_request_body = NonEmployeeRequestBody(
account_name='william.smith',
first_name='William',
last_name='Smith',
email='william.smith@example.com',
phone='5125555555',
manager='jane.doe',
source_id='2c91808568c529c60168cca6f90c1313',
data={description=Auditing},
start_date='2020-03-24T00:00-05:00',
end_date='2021-03-25T00:00-05:00'
)

```
[[Back to top]](#) 

