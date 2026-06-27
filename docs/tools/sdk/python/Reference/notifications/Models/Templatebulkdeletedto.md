---
id: templatebulkdeletedto
title: Templatebulkdeletedto
pagination_label: Templatebulkdeletedto
sidebar_label: Templatebulkdeletedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Templatebulkdeletedto', 'Templatebulkdeletedto'] 
slug: /tools/sdk/python/notifications/models/templatebulkdeletedto
tags: ['SDK', 'Software Development Kit', 'Templatebulkdeletedto', 'Templatebulkdeletedto']
---

# Templatebulkdeletedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template key to delete | [required]
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | The notification medium (EMAIL, SLACK, or TEAMS) | [optional] 
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templatebulkdeletedto import Templatebulkdeletedto

templatebulkdeletedto = Templatebulkdeletedto(
key='cloud_manual_work_item_summary',
medium='EMAIL',
locale='en'
)

```
[[Back to top]](#) 

