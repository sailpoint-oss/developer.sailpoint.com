---
id: v2024-non-employee-source-lite-with-schema-attributes
title: NonEmployeeSourceLiteWithSchemaAttributes
pagination_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeSourceLiteWithSchemaAttributes', 'V2024NonEmployeeSourceLiteWithSchemaAttributes'] 
slug: /tools/sdk/python/v2024/models/non-employee-source-lite-with-schema-attributes
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceLiteWithSchemaAttributes', 'V2024NonEmployeeSourceLiteWithSchemaAttributes']
---

# NonEmployeeSourceLiteWithSchemaAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee source id. | [optional] 
**source_id** | **str** | Source Id associated with this non-employee source. | [optional] 
**name** | **str** | Source name associated with this non-employee source. | [optional] 
**description** | **str** | Source description associated with this non-employee source. | [optional] 
**schema_attributes** | [**[]NonEmployeeSchemaAttribute**](non-employee-schema-attribute) | List of schema attributes associated with this non-employee source. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.non_employee_source_lite_with_schema_attributes import NonEmployeeSourceLiteWithSchemaAttributes

non_employee_source_lite_with_schema_attributes = NonEmployeeSourceLiteWithSchemaAttributes(
id='a0303682-5e4a-44f7-bdc2-6ce6112549c1',
source_id='2c91808568c529c60168cca6f90c1313',
name='Retail',
description='Source description',
schema_attributes=[
                    sailpoint.v2024.models.non_employee_schema_attribute.NonEmployeeSchemaAttribute(
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

