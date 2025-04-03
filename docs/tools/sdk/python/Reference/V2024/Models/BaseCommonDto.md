---
id: v2024-base-common-dto
title: BaseCommonDto
pagination_label: BaseCommonDto
sidebar_label: BaseCommonDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseCommonDto', 'V2024BaseCommonDto'] 
slug: /tools/sdk/python/v2024/models/base-common-dto
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto', 'V2024BaseCommonDto']
---

# BaseCommonDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
}

## Example

```python
from sailpoint.v2024.models.base_common_dto import BaseCommonDto

base_common_dto = BaseCommonDto(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z'
)

```
[[Back to top]](#) 

