---
id: templatedtodefault
title: Templatedtodefault
pagination_label: Templatedtodefault
sidebar_label: Templatedtodefault
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Templatedtodefault', 'Templatedtodefault'] 
slug: /tools/sdk/python/notifications/models/templatedtodefault
tags: ['SDK', 'Software Development Kit', 'Templatedtodefault', 'Templatedtodefault']
---

# Templatedtodefault


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the default template | [optional] 
**name** | **str** | The name of the default template | [optional] 
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | The message medium. More mediums may be added in the future. | [optional] 
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**subject** | **str** | The subject of the default template | [optional] 
**header** | **str** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**body** | **str** | The body of the default template | [optional] 
**footer** | **str** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**var_from** | **str** | The \"From:\" address of the default template | [optional] 
**reply_to** | **str** | The \"Reply To\" field of the default template | [optional] 
**description** | **str** | The description of the default template | [optional] 
**slack_template** | [**Templateslack**](templateslack) |  | [optional] 
**teams_template** | [**Templateteams**](templateteams) |  | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templatedtodefault import Templatedtodefault

templatedtodefault = Templatedtodefault(
key='cloud_manual_work_item_summary',
name='Task Manager Subscription',
medium='EMAIL',
locale='en',
subject='You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.',
header='',
body='Please go to the task manager',
footer='',
var_from='$__global.emailFromAddress',
reply_to='$__global.emailFromAddress',
description='Daily digest - sent if number of outstanding tasks for task owner > 0',
slack_template=sailpoint.notifications.models.template_slack.Template Slack(
                    key = '', 
                    text = 'You have a new approval request', 
                    blocks = '', 
                    attachments = '[]', 
                    notification_type = '', 
                    approval_id = '', 
                    request_id = '', 
                    requested_by_id = '', 
                    is_subscription = True, 
                    auto_approval_data = sailpoint.notifications.models.templateslack_auto_approval_data.templateslack_autoApprovalData(
                        is_auto_approved = '', 
                        item_id = '', 
                        item_type = '', 
                        auto_approval_message_json = '', 
                        auto_approval_title = '', ), 
                    custom_fields = sailpoint.notifications.models.templateslack_custom_fields.templateslack_customFields(
                        request_type = '', 
                        contains_deny = '', 
                        campaign_id = '', 
                        campaign_status = '', ), ),
teams_template=sailpoint.notifications.models.template_teams.Template Teams(
                    key = '', 
                    title = '', 
                    text = 'You have a new approval request', 
                    message_json = '', 
                    is_subscription = True, 
                    approval_id = '', 
                    request_id = '', 
                    requested_by_id = '', 
                    notification_type = '', 
                    auto_approval_data = sailpoint.notifications.models.templateslack_auto_approval_data.templateslack_autoApprovalData(
                        is_auto_approved = '', 
                        item_id = '', 
                        item_type = '', 
                        auto_approval_message_json = '', 
                        auto_approval_title = '', ), 
                    custom_fields = sailpoint.notifications.models.templateslack_custom_fields.templateslack_customFields(
                        request_type = '', 
                        contains_deny = '', 
                        campaign_id = '', 
                        campaign_status = '', ), )
)

```
[[Back to top]](#) 

