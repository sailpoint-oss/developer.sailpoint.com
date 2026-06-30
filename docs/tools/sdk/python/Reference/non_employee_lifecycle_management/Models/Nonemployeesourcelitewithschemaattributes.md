---
id: nonemployeesourcelitewithschemaattributes
title: Nonemployeesourcelitewithschemaattributes
pagination_label: Nonemployeesourcelitewithschemaattributes
sidebar_label: Nonemployeesourcelitewithschemaattributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeesourcelitewithschemaattributes', 'Nonemployeesourcelitewithschemaattributes'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeesourcelitewithschemaattributes
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcelitewithschemaattributes', 'Nonemployeesourcelitewithschemaattributes']
---

# Nonemployeesourcelitewithschemaattributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee source id. | [optional] 
**source_id** | **str** | Source Id associated with this non-employee source. | [optional] 
**name** | **str** | Source name associated with this non-employee source. | [optional] 
**description** | **str** | Source description associated with this non-employee source. | [optional] 
**schema_attributes** | [**[]Nonemployeeschemaattribute**](nonemployeeschemaattribute) | List of schema attributes associated with this non-employee source. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcelitewithschemaattributes import Nonemployeesourcelitewithschemaattributes

nonemployeesourcelitewithschemaattributes = Nonemployeesourcelitewithschemaattributes(
id='a0303682-5e4a-44f7-bdc2-6ce6112549c1',
source_id='2c91808568c529c60168cca6f90c1313',
name='Retail',
description='Source description',
schema_attributes=[
                    sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattribute.nonemployeeschemaattribute(
                        id = 'ac110005-7156-1150-8171-5b292e3e0084', 
                        system = True, 
                        modified = '2019-08-23T18:52:59.162Z', 
                        created = '2019-08-23T18:40:35.772Z', 
                        type = 'TEXT', 
                        label = 'Account Name', 
                        technical_name = 'account.name', 
                        help_text = 'The unique identifier for the account', 
                        placeholder = 'Enter a unique user name for this account.', 
                        required = True, )
                    ]
)

```
[[Back to top]](#) 

