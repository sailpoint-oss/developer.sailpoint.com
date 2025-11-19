---
id: beta-non-employee-record
title: NonEmployeeRecord
pagination_label: NonEmployeeRecord
sidebar_label: NonEmployeeRecord
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRecord', 'BetaNonEmployeeRecord'] 
slug: /tools/sdk/python/beta/models/non-employee-record
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRecord', 'BetaNonEmployeeRecord']
---

# NonEmployeeRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee record id. | [optional] 
**account_name** | **str** | Requested identity account name. | [optional] 
**first_name** | **str** | Non-Employee's first name. | [optional] 
**last_name** | **str** | Non-Employee's last name. | [optional] 
**email** | **str** | Non-Employee's email. | [optional] 
**phone** | **str** | Non-Employee's phone. | [optional] 
**manager** | **str** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**source_id** | **str** | Non-Employee's source id. | [optional] 
**data** | **map[string]str** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**start_date** | **datetime** | Non-Employee employment start date. | [optional] 
**end_date** | **datetime** | Non-Employee employment end date. | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_record import NonEmployeeRecord

non_employee_record = NonEmployeeRecord(
id='ac10e21c-931c-1ef2-8193-1c51e7ff0003',
account_name='william.smith',
first_name='William',
last_name='Smith',
email='william.smith@example.com',
phone='5125555555',
manager='jane.doe',
source_id='2c91808568c529c60168cca6f90c1313',
data={description=Auditing},
start_date='2019-08-23T18:52:59.162Z',
end_date='2020-08-23T18:52:59.162Z',
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z'
)

```
[[Back to top]](#) 

