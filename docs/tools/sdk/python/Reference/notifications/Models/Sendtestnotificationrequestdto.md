---
id: sendtestnotificationrequestdto
title: Sendtestnotificationrequestdto
pagination_label: Sendtestnotificationrequestdto
sidebar_label: Sendtestnotificationrequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sendtestnotificationrequestdto', 'Sendtestnotificationrequestdto'] 
slug: /tools/sdk/python/notifications/models/sendtestnotificationrequestdto
tags: ['SDK', 'Software Development Kit', 'Sendtestnotificationrequestdto', 'Sendtestnotificationrequestdto']
---

# Sendtestnotificationrequestdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template notification key. | [optional] 
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | The notification medium. Has to be one of the following enum values. | [optional] 
**locale** | **str** | The locale for the message text. | [optional] 
**context** | **object** | A Json object that denotes the context specific to the template. | [optional] 
**recipient_email_list** | **[]str** | A list of override recipient email addresses for the test notification. | [optional] 
**carbon_copy** | **[]str** | A list of CC email addresses for the test notification. | [optional] 
**blind_carbon_copy** | **[]str** | A list of BCC email addresses for the test notification. | [optional] 
}

## Example

```python
from sailpoint.notifications.models.sendtestnotificationrequestdto import Sendtestnotificationrequestdto

sendtestnotificationrequestdto = Sendtestnotificationrequestdto(
key='cloud_manual_work_item_summary',
medium='EMAIL',
locale='en',
context={"numberOfPendingTasks":"4","taskTasks":"tasks"},
recipient_email_list=["test@example.com"],
carbon_copy=["cc@example.com"],
blind_carbon_copy=["bcc@example.com"]
)

```
[[Back to top]](#) 

