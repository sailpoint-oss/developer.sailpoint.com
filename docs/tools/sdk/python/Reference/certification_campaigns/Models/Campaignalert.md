---
id: campaignalert
title: Campaignalert
pagination_label: Campaignalert
sidebar_label: Campaignalert
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaignalert', 'Campaignalert'] 
slug: /tools/sdk/python/certification-campaigns/models/campaignalert
tags: ['SDK', 'Software Development Kit', 'Campaignalert', 'Campaignalert']
---

# Campaignalert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** |  **Enum** [  'ERROR',    'WARN',    'INFO' ] | Denotes the level of the message | [optional] 
**localizations** | [**[]Errormessagedto**](errormessagedto) |  | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaignalert import Campaignalert

campaignalert = Campaignalert(
level='ERROR',
localizations=[
                    sailpoint.certification_campaigns.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

