---
id: preferencesdto
title: Preferencesdto
pagination_label: Preferencesdto
sidebar_label: Preferencesdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Preferencesdto', 'Preferencesdto'] 
slug: /tools/sdk/python/notifications/models/preferencesdto
tags: ['SDK', 'Software Development Kit', 'Preferencesdto', 'Preferencesdto']
---

# Preferencesdto

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
from sailpoint.notifications.models.preferencesdto import Preferencesdto

preferencesdto = Preferencesdto(
key='cloud_manual_work_item_summary',
mediums=["EMAIL"],
modified='2020-05-15T14:37:06.909Z'
)

```
[[Back to top]](#) 

