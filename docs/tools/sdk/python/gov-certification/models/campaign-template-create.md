# CampaignTemplateCreate

# CampaignTemplateCreate

Campaign Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the campaign template. | [required]
**description** | **str** | Description of the campaign template. | [required]
**type** | **CampaignType** |  | [required]
**remediator_ref** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**mandatory_comment_requirement** | **CampaignMandatoryCommentRequirement** |  | [optional] [default to CampaignMandatoryCommentRequirement.NO_DECISIONS]
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [required][default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [required][default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [required][default to False]
**sunset_comments_required** | **bool** | Determines if comments on sunset date changes are required. | [required][default to True]
**reviewer** | [**Reviewer**](reviewer) |  | [required]
**deadline_duration** | **str** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**campaign_name** | **str** | The campaign name. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**campaign_description** | **str** | The campaign description. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**filter_ref** | [**CampaignFilterIdRef**](campaign-filter-id-ref) |  | [optional] 
**search_based_params** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**source_ids** | **[]str** | A direct list of sourceIds to include in this campaign. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_template_create import CampaignTemplateCreate

campaign_template_create = CampaignTemplateCreate(
name='Manager Campaign Template',
description='Template for the annual manager campaign.',
type='IDENTITY',
remediator_ref=sailpoint.gov_certification.models.campaign_remediator_ref.CampaignRemediatorRef(
                    id = '2c90ad2a70ace7d50170acf22ca90010', 
                    name = 'Role Admin', ),
mandatory_comment_requirement='NO_DECISIONS',
email_notification_enabled=False,
auto_revoke_allowed=False,
recommendations_enabled=True,
sunset_comments_required=True,
reviewer=sailpoint.gov_certification.models.reviewer.Reviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    type = 'IDENTITY', 
                    name = 'William Wilson', ),
deadline_duration='P2W',
campaign_name='Manager Campaign',
campaign_description='Everyone needs to be reviewed by their manager',
filter_ref=sailpoint.gov_certification.models.campaign_filter_id_ref.CampaignFilterIdRef(
                    id = 'e9f9a139-7b84-2fd5-a658-42087040d3ac', ),
search_based_params=sailpoint.gov_certification.models.campaign_search_based_params.CampaignSearchBasedParams(
                    search_type = 'ACCESS', 
                    query = 'admin', 
                    identity_ids = ["0fbe863c063c4c88a35fd7f17e8a3df5"], 
                    access_constraints = [
                        sailpoint.gov_certification.models.access_constraint.AccessConstraint(
                            type = 'ENTITLEMENT', 
                            ids = ["2c90ad2a70ace7d50170acf22ca90010"], 
                            operator = 'SELECTED', )
                        ], ),
source_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"]
)

```
[[Back to top]](#) 

