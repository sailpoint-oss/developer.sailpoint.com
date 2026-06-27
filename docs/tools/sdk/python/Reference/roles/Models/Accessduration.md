---
id: accessduration
title: Accessduration
pagination_label: Accessduration
sidebar_label: Accessduration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessduration', 'Accessduration'] 
slug: /tools/sdk/python/roles/models/accessduration
tags: ['SDK', 'Software Development Kit', 'Accessduration', 'Accessduration']
---

# Accessduration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **int** | The numeric value representing the amount of time, which is defined in the **timeUnit**. | [optional] 
**time_unit** |  **Enum** [  'HOURS',    'DAYS',    'WEEKS',    'MONTHS' ] | The unit of time that corresponds to the **value**. It defines the scale of the time period. | [optional] 
}

## Example

```python
from sailpoint.roles.models.accessduration import Accessduration

accessduration = Accessduration(
value=6,
time_unit='MONTHS'
)

```
[[Back to top]](#) 

