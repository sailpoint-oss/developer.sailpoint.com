---
id: v2025-notification-template-context
title: NotificationTemplateContext
pagination_label: NotificationTemplateContext
sidebar_label: NotificationTemplateContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NotificationTemplateContext', 'V2025NotificationTemplateContext'] 
slug: /tools/sdk/python/v2025/models/notification-template-context
tags: ['SDK', 'Software Development Kit', 'NotificationTemplateContext', 'V2025NotificationTemplateContext']
---

# NotificationTemplateContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **map[string]object** | A JSON object that stores the context. | [optional] 
**created** | **datetime** | When the global context was created | [optional] 
**modified** | **datetime** | When the global context was last modified | [optional] 
}

## Example

```python
from sailpoint.v2025.models.notification_template_context import NotificationTemplateContext

notification_template_context = NotificationTemplateContext(
attributes={productUrl=https://test-org.identitysoon.com, brandingConfigs={default={narrowLogoURL=null, productName=SailPoint, standardLogoURL=null, navigationColor=011E64, actionButtonColor=20B2DE, emailFromAddress=null, activeLinkColor=20B2DE, loginInformationalMessage=null}}},
created='2020-04-15T16:16:47.525Z',
modified='2020-04-15T16:16:47.525Z'
)

```
[[Back to top]](#) 

