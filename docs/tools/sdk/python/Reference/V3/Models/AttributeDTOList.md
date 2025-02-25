---
id: attribute-dto-list
title: AttributeDTOList
pagination_label: AttributeDTOList
sidebar_label: AttributeDTOList
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDTOList', 'AttributeDTOList'] 
slug: /tools/sdk/python/v3/models/attribute-dto-list
tags: ['SDK', 'Software Development Kit', 'AttributeDTOList', 'AttributeDTOList']
---

# AttributeDTOList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.attribute_dto_list import AttributeDTOList

attribute_dto_list = AttributeDTOList(
attributes=[{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
)

```
[[Back to top]](#) 

