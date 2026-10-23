# CampaignCreate

# CampaignCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the campaign. | [required]
**description** | **str** | Description of the campaign. | [required]
**deadline** | **date** | The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [optional] 
**deadline_timezone** | **str** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [required][default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [required][default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [required][default to False]
**sunset_comments_required** | **bool** | Determines if comments on sunset date changes are required. | [required][default to True]
**source_ids** | **[]str** | A direct list of sourceIds to include in this campaign. | [optional] 
**auto_activate** | **bool** | If autoActivate is true, the campaign will be activated automatically after generation completes. In this case, a deadline must be provided; otherwise, campaign creation will fail. | [required][default to False]
**type** | **CampaignType** |  | [required]
**reviewer** | [**Reviewer**](reviewer) |  | [required]
**filter_ref** | [**CampaignFilterIdRef**](campaign-filter-id-ref) |  | [optional] 
**inline_filter** | [**CampaignFilterInline**](campaign-filter-inline) |  | [optional] 
**search_based_params** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**remediator_ref** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**mandatory_comment_requirement** | **CampaignMandatoryCommentRequirement** |  | [optional] [default to CampaignMandatoryCommentRequirement.NO_DECISIONS]
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_create import CampaignCreate

campaign_create = CampaignCreate(
name='Manager Campaign',
description='Everyone needs to be reviewed by their manager',
deadline='Sun Mar 15 00:00:00 UTC 2020',
deadline_timezone='-05:00',
email_notification_enabled=False,
auto_revoke_allowed=False,
recommendations_enabled=True,
sunset_comments_required=True,
source_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"],
auto_activate=True,
type='IDENTITY',
reviewer=sailpoint.gov_certification.models.reviewer.Reviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    type = 'IDENTITY', 
                    name = 'William Wilson', ),
filter_ref=sailpoint.gov_certification.models.campaign_filter_id_ref.CampaignFilterIdRef(
                    id = 'e9f9a139-7b84-2fd5-a658-42087040d3ac', ),
inline_filter=sailpoint.gov_certification.models.campaign_filter_inline.CampaignFilterInline(
                    mode = 'INCLUSION', 
                    criteria_list = [{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}], ),
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
remediator_ref=sailpoint.gov_certification.models.campaign_remediator_ref.CampaignRemediatorRef(
                    id = '2c90ad2a70ace7d50170acf22ca90010', 
                    name = 'Role Admin', ),
mandatory_comment_requirement='NO_DECISIONS'
)

```
[[Back to top]](#) 

