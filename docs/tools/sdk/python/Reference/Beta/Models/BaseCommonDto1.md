---
id: beta-base-common-dto1
title: BaseCommonDto1
pagination_label: BaseCommonDto1
sidebar_label: BaseCommonDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseCommonDto1', 'BetaBaseCommonDto1'] 
slug: /tools/sdk/python/beta/models/base-common-dto1
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto1', 'BetaBaseCommonDto1']
---

# BaseCommonDto1


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
from sailpoint.beta.models.base_common_dto1 import BaseCommonDto1

base_common_dto1 = BaseCommonDto1(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z'
)

```
[[Back to top]](#) 

