---
id: beta-base-common-dto
title: BaseCommonDto
pagination_label: BaseCommonDto
sidebar_label: BaseCommonDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseCommonDto', 'BetaBaseCommonDto'] 
slug: /tools/sdk/python/beta/models/base-common-dto
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto', 'BetaBaseCommonDto']
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
from sailpoint.beta.models.base_common_dto import BaseCommonDto

base_common_dto = BaseCommonDto(
id='id12345',
name='aName',
created='2023-01-03T21:16:22.432Z',
modified='2023-01-03T21:16:22.432Z'
)

```
[[Back to top]](#) 

