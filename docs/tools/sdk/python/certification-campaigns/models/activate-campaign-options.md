# ActivateCampaignOptions

# ActivateCampaignOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_zone** | **str** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to 'Z']
\}

## Example

```python
from sailpoint.certification_campaigns.models.activate_campaign_options import ActivateCampaignOptions

activate_campaign_options = ActivateCampaignOptions(
time_zone='Z'
)

```
[[Back to top]](#) 

