# CampaignCompleteOptions

# CampaignCompleteOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_complete_action** |  **Enum** [  'APPROVE',    'REVOKE' ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to 'APPROVE']
\}

## Example

```python
from sailpoint.certification_campaigns.models.campaign_complete_options import CampaignCompleteOptions

campaign_complete_options = CampaignCompleteOptions(
auto_complete_action='APPROVE'
)

```
[[Back to top]](#) 

