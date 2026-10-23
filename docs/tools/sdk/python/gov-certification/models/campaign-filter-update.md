# CampaignFilterUpdate

# CampaignFilterUpdate

Campaign Filter Update Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is campaign filter's name. | [required]
**description** | **str** | This is campaign filter's description. | [required]
**mode** | **CampaignFilterType** |  | [required]
**criteria_list** | [**[]Criteria**](criteria) | List of criteria. | [required]
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_filter_update import CampaignFilterUpdate

campaign_filter_update = CampaignFilterUpdate(
name='Identity Attribute Campaign Filter',
description='Campaign filter to certify data based on specified property of Identity Attribute.',
mode='INCLUSION',
criteria_list=[{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}]
)

```
[[Back to top]](#) 

