---
id: notificationtemplatecontext
title: Notificationtemplatecontext
pagination_label: Notificationtemplatecontext
sidebar_label: Notificationtemplatecontext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Notificationtemplatecontext', 'Notificationtemplatecontext'] 
slug: /tools/sdk/python/notifications/models/notificationtemplatecontext
tags: ['SDK', 'Software Development Kit', 'Notificationtemplatecontext', 'Notificationtemplatecontext']
---

# Notificationtemplatecontext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **map[string]object** | A JSON object that stores the context. | [optional] 
**created** | **datetime** | When the global context was created | [optional] 
**modified** | **datetime** | When the global context was last modified | [optional] 
}

## Example

```python
from sailpoint.notifications.models.notificationtemplatecontext import Notificationtemplatecontext

notificationtemplatecontext = Notificationtemplatecontext(
attributes={"productUrl":"https://test-org.identitysoon.com","brandingConfigs":{"default":{"narrowLogoURL":null,"productName":"SailPoint","standardLogoURL":null,"navigationColor":"011E64","actionButtonColor":"20B2DE","emailFromAddress":null,"activeLinkColor":"20B2DE","loginInformationalMessage":null}}},
created='2020-04-15T16:16:47.525Z',
modified='2020-04-15T16:16:47.525Z'
)

```
[[Back to top]](#) 

