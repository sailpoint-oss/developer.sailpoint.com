# Campaign2AllOfSearchCampaignInfoReviewer

# Campaign2AllOfSearchCampaignInfoReviewer

If specified, this identity or governance group will be the reviewer for all certifications in this campaign. The allowed DTO types are IDENTITY and GOVERNANCE_GROUP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | The reviewer's DTO type. | [optional] 
**id** | **str** | The reviewer's ID. | [optional] 
**name** | **str** | The reviewer's name. | [optional] 
\}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_search_campaign_info_reviewer import Campaign2AllOfSearchCampaignInfoReviewer

campaign2_all_of_search_campaign_info_reviewer = Campaign2AllOfSearchCampaignInfoReviewer(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

