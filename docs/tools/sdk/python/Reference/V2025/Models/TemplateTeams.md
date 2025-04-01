---
id: v2025-template-teams
title: TemplateTeams
pagination_label: TemplateTeams
sidebar_label: TemplateTeams
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplateTeams', 'V2025TemplateTeams'] 
slug: /tools/sdk/python/v2025/models/template-teams
tags: ['SDK', 'Software Development Kit', 'TemplateTeams', 'V2025TemplateTeams']
---

# TemplateTeams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**message_json** | **str** |  | [optional] 
**is_subscription** | **bool** |  | [optional] 
**approval_id** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 
**requested_by_id** | **str** |  | [optional] 
**notification_type** | **str** |  | [optional] 
**auto_approval_data** | [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**custom_fields** | [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.template_teams import TemplateTeams

template_teams = TemplateTeams(
key='',
title='',
text='',
message_json='',
is_subscription=True,
approval_id='',
request_id='',
requested_by_id='',
notification_type='',
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

