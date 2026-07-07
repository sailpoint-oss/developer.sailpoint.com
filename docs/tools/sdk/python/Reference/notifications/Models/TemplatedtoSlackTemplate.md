---
id: templatedto-slack-template
title: TemplatedtoSlackTemplate
pagination_label: TemplatedtoSlackTemplate
sidebar_label: TemplatedtoSlackTemplate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplatedtoSlackTemplate', 'TemplatedtoSlackTemplate'] 
slug: /tools/sdk/python/notifications/models/templatedto-slack-template
tags: ['SDK', 'Software Development Kit', 'TemplatedtoSlackTemplate', 'TemplatedtoSlackTemplate']
---

# TemplatedtoSlackTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template key | [optional] 
**text** | **str** | The main text content of the Slack message | [optional] 
**blocks** | **str** | JSON string of Slack Block Kit blocks for rich formatting | [optional] 
**attachments** | **str** | JSON string of Slack attachments | [optional] 
**notification_type** | **str** | The type of notification | [optional] 
**approval_id** | **str** | The approval request ID | [optional] 
**request_id** | **str** | The request ID | [optional] 
**requested_by_id** | **str** | The ID of the user who made the request | [optional] 
**is_subscription** | **bool** | Whether this is a subscription notification | [optional] [default to False]
**auto_approval_data** | [**TemplateslackAutoApprovalData**](templateslack-auto-approval-data) |  | [optional] 
**custom_fields** | [**TemplateslackCustomFields**](templateslack-custom-fields) |  | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templatedto_slack_template import TemplatedtoSlackTemplate

templatedto_slack_template = TemplatedtoSlackTemplate(
key='',
text='You have a new approval request',
blocks='',
attachments='[]',
notification_type='',
approval_id='',
request_id='',
requested_by_id='',
is_subscription=True,
auto_approval_data=sailpoint.notifications.models.templateslack_auto_approval_data.templateslack_autoApprovalData(
                    is_auto_approved = '', 
                    item_id = '', 
                    item_type = '', 
                    auto_approval_message_json = '', 
                    auto_approval_title = '', ),
custom_fields=sailpoint.notifications.models.templateslack_custom_fields.templateslack_customFields(
                    request_type = '', 
                    contains_deny = '', 
                    campaign_id = '', 
                    campaign_status = '', )
)

```
[[Back to top]](#) 

