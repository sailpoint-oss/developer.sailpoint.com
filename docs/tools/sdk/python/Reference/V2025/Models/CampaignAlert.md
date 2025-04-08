---
id: v2025-campaign-alert
title: CampaignAlert
pagination_label: CampaignAlert
sidebar_label: CampaignAlert
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAlert', 'V2025CampaignAlert'] 
slug: /tools/sdk/python/v2025/models/campaign-alert
tags: ['SDK', 'Software Development Kit', 'CampaignAlert', 'V2025CampaignAlert']
---

# CampaignAlert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** |  **Enum** [  'ERROR',    'WARN',    'INFO' ] | Denotes the level of the message | [optional] 
**localizations** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.campaign_alert import CampaignAlert

campaign_alert = CampaignAlert(
level='ERROR',
localizations=[
                    sailpoint.v2025.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

