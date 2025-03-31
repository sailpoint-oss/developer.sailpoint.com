---
id: beta-send-test-notification-request-dto
title: SendTestNotificationRequestDto
pagination_label: SendTestNotificationRequestDto
sidebar_label: SendTestNotificationRequestDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SendTestNotificationRequestDto', 'BetaSendTestNotificationRequestDto'] 
slug: /tools/sdk/python/beta/models/send-test-notification-request-dto
tags: ['SDK', 'Software Development Kit', 'SendTestNotificationRequestDto', 'BetaSendTestNotificationRequestDto']
---

# SendTestNotificationRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template notification key. | [optional] 
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | The notification medium. Has to be one of the following enum values. | [optional] 
**context** | **object** | A Json object that denotes the context specific to the template. | [optional] 
}

## Example

```python
from sailpoint.beta.models.send_test_notification_request_dto import SendTestNotificationRequestDto

send_test_notification_request_dto = SendTestNotificationRequestDto(
key='cloud_manual_work_item_summary',
medium='EMAIL',
context=None
)

```
[[Back to top]](#) 

