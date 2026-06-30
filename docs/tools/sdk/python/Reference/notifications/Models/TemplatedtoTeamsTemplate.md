---
id: templatedto-teams-template
title: TemplatedtoTeamsTemplate
pagination_label: TemplatedtoTeamsTemplate
sidebar_label: TemplatedtoTeamsTemplate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplatedtoTeamsTemplate', 'TemplatedtoTeamsTemplate'] 
slug: /tools/sdk/python/notifications/models/templatedto-teams-template
tags: ['SDK', 'Software Development Kit', 'TemplatedtoTeamsTemplate', 'TemplatedtoTeamsTemplate']
---

# TemplatedtoTeamsTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template key | [optional] 
**title** | **str** | The title of the Teams message | [optional] 
**text** | **str** | The main text content of the Teams message | [optional] 
**message_json** | **str** | JSON string of the Teams adaptive card | [optional] 
**is_subscription** | **bool** | Whether this is a subscription notification | [optional] [default to False]
**approval_id** | **str** | The approval request ID | [optional] 
**request_id** | **str** | The request ID | [optional] 
**requested_by_id** | **str** | The ID of the user who made the request | [optional] 
**notification_type** | **str** | The type of notification | [optional] 
**auto_approval_data** | [**TemplateslackAutoApprovalData**](templateslack-auto-approval-data) |  | [optional] 
**custom_fields** | [**TemplateslackCustomFields**](templateslack-custom-fields) |  | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templatedto_teams_template import TemplatedtoTeamsTemplate

templatedto_teams_template = TemplatedtoTeamsTemplate(
key='',
title='',
text='You have a new approval request',
message_json='',
is_subscription=True,
approval_id='',
request_id='',
requested_by_id='',
notification_type='',
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

