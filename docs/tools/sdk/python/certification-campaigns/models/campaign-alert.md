# CampaignAlert

# CampaignAlert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** |  **Enum** [  'ERROR',    'WARN',    'INFO' ] | Denotes the level of the message | [optional] 
**localizations** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
\}

## Example

```python
from sailpoint.certification_campaigns.models.campaign_alert import CampaignAlert

campaign_alert = CampaignAlert(
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

