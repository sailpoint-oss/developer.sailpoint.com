---
id: templateslack-custom-fields
title: TemplateslackCustomFields
pagination_label: TemplateslackCustomFields
sidebar_label: TemplateslackCustomFields
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplateslackCustomFields', 'TemplateslackCustomFields'] 
slug: /tools/sdk/python/notifications/models/templateslack-custom-fields
tags: ['SDK', 'Software Development Kit', 'TemplateslackCustomFields', 'TemplateslackCustomFields']
---

# TemplateslackCustomFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_type** | **str** | The type of request | [optional] 
**contains_deny** | **str** | Whether the request contains a deny action | [optional] 
**campaign_id** | **str** | The campaign ID | [optional] 
**campaign_status** | **str** | The campaign status | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templateslack_custom_fields import TemplateslackCustomFields

templateslack_custom_fields = TemplateslackCustomFields(
request_type='',
contains_deny='',
campaign_id='',
campaign_status=''
)

```
[[Back to top]](#) 

