---
id: beta-attribute-dto-list
title: AttributeDTOList
pagination_label: AttributeDTOList
sidebar_label: AttributeDTOList
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDTOList', 'BetaAttributeDTOList'] 
slug: /tools/sdk/python/beta/models/attribute-dto-list
tags: ['SDK', 'Software Development Kit', 'AttributeDTOList', 'BetaAttributeDTOList']
---

# AttributeDTOList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.attribute_dto_list import AttributeDTOList

attribute_dto_list = AttributeDTOList(
attributes=[{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
)

```
[[Back to top]](#) 

