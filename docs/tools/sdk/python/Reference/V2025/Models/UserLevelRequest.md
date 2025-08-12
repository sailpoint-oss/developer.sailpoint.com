---
id: v2025-user-level-request
title: UserLevelRequest
pagination_label: UserLevelRequest
sidebar_label: UserLevelRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserLevelRequest', 'V2025UserLevelRequest'] 
slug: /tools/sdk/python/v2025/models/user-level-request
tags: ['SDK', 'Software Development Kit', 'UserLevelRequest', 'V2025UserLevelRequest']
---

# UserLevelRequest

Payload containing details for creating a custom user level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the user level. | [required]
**description** | **str** | A brief description of the user level. | [required]
**owner** | [**BaseReferenceDto**](base-reference-dto) |  | [required]
**right_sets** | **[]str** | A list of rights associated with the user level. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.user_level_request import UserLevelRequest

user_level_request = UserLevelRequest(
name='Custom User Level Name',
description='This is a description of the custom user level.',
owner=sailpoint.v2025.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
right_sets=[idn:ui-right-set-list-read-example, idn:ui-right-set-write-example]
)

```
[[Back to top]](#) 

