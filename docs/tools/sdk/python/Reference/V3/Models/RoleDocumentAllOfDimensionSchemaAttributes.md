---
id: role-document-all-of-dimension-schema-attributes
title: RoleDocumentAllOfDimensionSchemaAttributes
pagination_label: RoleDocumentAllOfDimensionSchemaAttributes
sidebar_label: RoleDocumentAllOfDimensionSchemaAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleDocumentAllOfDimensionSchemaAttributes', 'RoleDocumentAllOfDimensionSchemaAttributes'] 
slug: /tools/sdk/python/v3/models/role-document-all-of-dimension-schema-attributes
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfDimensionSchemaAttributes', 'RoleDocumentAllOfDimensionSchemaAttributes']
---

# RoleDocumentAllOfDimensionSchemaAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**derived** | **bool** |  | [optional] [default to True]
**display_name** | **str** | Displayname of the dimension attribute. | [optional] 
**name** | **str** | Name of the dimension attribute. | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_document_all_of_dimension_schema_attributes import RoleDocumentAllOfDimensionSchemaAttributes

role_document_all_of_dimension_schema_attributes = RoleDocumentAllOfDimensionSchemaAttributes(
derived=True,
display_name='Department',
name='department'
)

```
[[Back to top]](#) 

