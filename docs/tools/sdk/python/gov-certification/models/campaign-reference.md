# CampaignReference

# CampaignReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign. | [required]
**name** | **str** | The name of the campaign. | [required]
**description** | **str** | The description of the campaign set by the admin who created it. | [optional] 
**type** | **CampaignType** |  | [optional] 
**mandatory_comment_requirement** | **MandatoryCommentType** |  | [optional] 
**recommendations_enabled** | **bool** | Indicates if the campaign related recommendations enabled. | [optional] [default to False]
**reviewer** | [**CampaignReferenceReviewer**](campaign-reference-reviewer) |  | [optional] 
**generation_type** | **CampaignGenerationType** |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_reference import CampaignReference

campaign_reference = CampaignReference(
id='ef38f943-47e9-4562-b5bb-8424a56397d8',
name='Campaign Name',
description='A description of the campaign',
type='IDENTITY',
mandatory_comment_requirement='ALL_DECISIONS',
recommendations_enabled=False,
reviewer=sailpoint.gov_certification.models.campaign_reference_reviewer.CampaignReference_reviewer(
                    type = 'IDENTITY', ),
generation_type='CAMPAIGN_FILTER'
)

```
[[Back to top]](#) 

