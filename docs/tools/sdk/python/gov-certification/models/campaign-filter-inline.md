# CampaignFilterInline

# CampaignFilterInline

Inline Campaign Filter Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **CampaignFilterType** |  | [required]
**criteria_list** | [**[]Criteria**](criteria) | List of criteria. | [required]
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_filter_inline import CampaignFilterInline

campaign_filter_inline = CampaignFilterInline(
mode='INCLUSION',
criteria_list=[{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}]
)

```
[[Back to top]](#) 

