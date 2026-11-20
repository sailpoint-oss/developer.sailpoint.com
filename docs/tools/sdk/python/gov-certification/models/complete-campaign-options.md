# CompleteCampaignOptions

# CompleteCampaignOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_complete_action** |  **Enum** [  'APPROVE',    'REVOKE' ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to 'APPROVE']
\}

## Example

```python
from sailpoint.gov_certification.models.complete_campaign_options import CompleteCampaignOptions

complete_campaign_options = CompleteCampaignOptions(
auto_complete_action='APPROVE'
)

```
[[Back to top]](#) 

