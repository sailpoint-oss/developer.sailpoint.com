---
id: v2025-search-attribute-config
title: SearchAttributeConfig
pagination_label: SearchAttributeConfig
sidebar_label: SearchAttributeConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchAttributeConfig', 'V2025SearchAttributeConfig'] 
slug: /tools/sdk/python/v2025/models/search-attribute-config
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfig', 'V2025SearchAttributeConfig']
---

# SearchAttributeConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the new attribute | [optional] 
**display_name** | **str** | The display name of the new attribute | [optional] 
**application_attributes** | **object** | Map of application id and their associated attribute. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.search_attribute_config import SearchAttributeConfig

search_attribute_config = SearchAttributeConfig(
name='newMailAttribute',
display_name='New Mail Attribute',
application_attributes={2c91808b79fd2422017a0b35d30f3968=employeeNumber, 2c91808b79fd2422017a0b36008f396b=employeeNumber}
)

```
[[Back to top]](#) 

