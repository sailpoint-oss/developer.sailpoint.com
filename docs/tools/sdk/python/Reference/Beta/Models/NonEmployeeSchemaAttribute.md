---
id: beta-non-employee-schema-attribute
title: NonEmployeeSchemaAttribute
pagination_label: NonEmployeeSchemaAttribute
sidebar_label: NonEmployeeSchemaAttribute
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeSchemaAttribute', 'BetaNonEmployeeSchemaAttribute'] 
slug: /tools/sdk/python/beta/models/non-employee-schema-attribute
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttribute', 'BetaNonEmployeeSchemaAttribute']
---

# NonEmployeeSchemaAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Schema Attribute Id | [optional] 
**system** | **bool** | True if this schema attribute is mandatory on all non-employees sources. | [optional] [default to False]
**modified** | **datetime** | When the schema attribute was last modified. | [optional] 
**created** | **datetime** | When the schema attribute was created. | [optional] 
**type** | [**NonEmployeeSchemaAttributeType**](non-employee-schema-attribute-type) |  | [required]
**label** | **str** | Label displayed on the UI for this schema attribute. | [required]
**technical_name** | **str** | The technical name of the attribute. Must be unique per source. | [required]
**help_text** | **str** | help text displayed by UI. | [optional] 
**placeholder** | **str** | Hint text that fills UI box. | [optional] 
**required** | **bool** | If true, the schema attribute is required for all non-employees in the source | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.non_employee_schema_attribute import NonEmployeeSchemaAttribute

non_employee_schema_attribute = NonEmployeeSchemaAttribute(
id='ac110005-7156-1150-8171-5b292e3e0084',
system=True,
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z',
type='TEXT',
label='Account Name',
technical_name='account.name',
help_text='The unique identifier for the account',
placeholder='Enter a unique user name for this account.',
required=True
)

```
[[Back to top]](#) 

