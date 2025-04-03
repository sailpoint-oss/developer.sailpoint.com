---
id: v2025-template-slack
title: TemplateSlack
pagination_label: TemplateSlack
sidebar_label: TemplateSlack
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplateSlack', 'V2025TemplateSlack'] 
slug: /tools/sdk/python/v2025/models/template-slack
tags: ['SDK', 'Software Development Kit', 'TemplateSlack', 'V2025TemplateSlack']
---

# TemplateSlack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**blocks** | **str** |  | [optional] 
**attachments** | **str** |  | [optional] 
**notification_type** | **str** |  | [optional] 
**approval_id** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 
**requested_by_id** | **str** |  | [optional] 
**is_subscription** | **bool** |  | [optional] 
**auto_approval_data** | [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**custom_fields** | [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.template_slack import TemplateSlack

template_slack = TemplateSlack(
key='',
text='',
blocks='',
attachments='',
notification_type='',
approval_id='',
request_id='',
requested_by_id='',
is_subscription=True,
auto_approval_data=sailpoint.v2025.models.template_slack_auto_approval_data.TemplateSlack_autoApprovalData(
                    is_auto_approved = '', 
                    item_id = '', 
                    item_type = '', 
                    auto_approval_message_json = '', 
                    auto_approval_title = '', ),
custom_fields=sailpoint.v2025.models.template_slack_custom_fields.TemplateSlack_customFields(
                    request_type = '', 
                    contains_deny = '', 
                    campaign_id = '', 
                    campaign_status = '', )
)

```
[[Back to top]](#) 

