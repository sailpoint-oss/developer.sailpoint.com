---
id: searchattributeconfig
title: Searchattributeconfig
pagination_label: Searchattributeconfig
sidebar_label: Searchattributeconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Searchattributeconfig', 'Searchattributeconfig'] 
slug: /tools/sdk/python/search-attribute-configuration/models/searchattributeconfig
tags: ['SDK', 'Software Development Kit', 'Searchattributeconfig', 'Searchattributeconfig']
---

# Searchattributeconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the new attribute | [optional] 
**display_name** | **str** | The display name of the new attribute | [optional] 
**application_attributes** | **object** | Map of application id and their associated attribute. | [optional] 
}

## Example

```python
from sailpoint.search_attribute_configuration.models.searchattributeconfig import Searchattributeconfig

searchattributeconfig = Searchattributeconfig(
name='newMailAttribute',
display_name='New Mail Attribute',
application_attributes={"2c91808b79fd2422017a0b35d30f3968":"employeeNumber","2c91808b79fd2422017a0b36008f396b":"employeeNumber"}
)

```
[[Back to top]](#) 

