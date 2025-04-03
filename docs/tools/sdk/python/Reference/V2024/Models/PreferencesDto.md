---
id: v2024-preferences-dto
title: PreferencesDto
pagination_label: PreferencesDto
sidebar_label: PreferencesDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PreferencesDto', 'V2024PreferencesDto'] 
slug: /tools/sdk/python/v2024/models/preferences-dto
tags: ['SDK', 'Software Development Kit', 'PreferencesDto', 'V2024PreferencesDto']
---

# PreferencesDto

Maps an Identity's attribute key to a list of preferred notification mediums.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template notification key. | [optional] 
**mediums** | [**[]Medium**](medium) | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. More mediums may be added in the future. | [optional] 
**modified** | **datetime** | Modified date of preference | [optional] 
}

## Example

```python
from sailpoint.v2024.models.preferences_dto import PreferencesDto

preferences_dto = PreferencesDto(
key='cloud_manual_work_item_summary',
mediums=[EMAIL],
modified='2020-05-15T14:37:06.909Z'
)

```
[[Back to top]](#) 

