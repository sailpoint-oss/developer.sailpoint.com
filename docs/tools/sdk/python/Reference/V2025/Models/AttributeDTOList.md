---
id: v2025-attribute-dto-list
title: AttributeDTOList
pagination_label: AttributeDTOList
sidebar_label: AttributeDTOList
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDTOList', 'V2025AttributeDTOList'] 
slug: /tools/sdk/python/v2025/models/attribute-dto-list
tags: ['SDK', 'Software Development Kit', 'AttributeDTOList', 'V2025AttributeDTOList']
---

# AttributeDTOList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attribute_dto_list import AttributeDTOList

attribute_dto_list = AttributeDTOList(
attributes=[{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
)

```
[[Back to top]](#) 

