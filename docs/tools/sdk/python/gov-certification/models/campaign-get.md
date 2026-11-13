# CampaignGet

# CampaignGet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the campaign | [optional] [readonly] 
**name** | **str** | The campaign name. | [required]
**description** | **str** | The campaign description. | [required]
**deadline** | **date** | The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [optional] 
**deadline_timezone** | **str** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**deadline_time** | **datetime** | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [optional] 
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [optional] [default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [optional] [default to False]
**auto_activate** | **bool** | If true, the campaign is set to activate automatically after generation completes. Campaigns stored without this attribute default to false. | [optional] [default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to False]
**sunset_comments_required** | **bool** | Determines if comments on sunset date changes are required. | [optional] [default to True]
**type** | **CampaignType** |  | [required]
**reviewer** | [**Reviewer**](reviewer) |  | [required]
**alerts** | [**[]Alert**](alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] [default to []]
**filter_ref** | [**CampaignFilterRef**](campaign-filter-ref) |  | [optional] 
**inline_filter** | [**CampaignFilterInline**](campaign-filter-inline) |  | [optional] 
**search_based_params** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**remediator_ref** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**owner_id** | **str** | The campaign owner is the Identity that created the campaign. | [optional] 
**created** | **datetime** | Created time of the campaign | [optional] [readonly] 
**modified** | **datetime** | Modified time of the campaign | [optional] [readonly] 
**total_certifications** | **int** | The total number of certifications in this campaign. | [optional] [readonly] 
**completed_certifications** | **int** | The number of completed certifications in this campaign. | [optional] [readonly] 
**mandatory_comment_requirement** | **CampaignMandatoryCommentRequirement** |  | [optional] [default to CampaignMandatoryCommentRequirement.NO_DECISIONS]
**status** |  **Enum** [  'PENDING',    'STAGED',    'CANCELING',    'ACTIVATING',    'ACTIVE',    'COMPLETING',    'COMPLETED',    'ERROR' ] | The campaign's current status. | [optional] [readonly] 
**latest_reports** | [**map[string]CampaignLatestReport**](campaign-latest-report) | A map of the latest report for each report type | [optional] 
**source_ids** | **[]str** | A direct list of sourceIds to include in this campaign. | [optional] 
**sources_with_orphan_entitlements** | [**[]CampaignOrphanEntitlementSource**](campaign-orphan-entitlement-source) | Sources that have orphan entitlement line items for this campaign, as supplied when the campaign finished staging. Each entry identifies a source by id and name. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_get import CampaignGet

campaign_get = CampaignGet(
id='2c9079b2-70a2-66a6-a170-a2779fcb0007',
name='Manager Campaign',
description='Everyone needs to be reviewed by their manager',
deadline='Sun Mar 15 00:00:00 UTC 2020',
deadline_timezone='-05:00',
deadline_time='2018-10-19T13:49:37.385Z',
email_notification_enabled=False,
auto_revoke_allowed=False,
auto_activate=False,
recommendations_enabled=True,
sunset_comments_required=True,
type='IDENTITY',
reviewer=sailpoint.gov_certification.models.reviewer.Reviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    type = 'IDENTITY', 
                    name = 'William Wilson', ),
alerts=[
                    sailpoint.gov_certification.models.alert.Alert(
                        level = 'ERROR', 
                        localizations = [
                            sailpoint.gov_certification.models.error_message_dto.ErrorMessageDto(
                                locale = 'en-US', 
                                locale_origin = 'DEFAULT', 
                                text = 'The request was syntactically correct but its content is semantically invalid.', )
                            ], )
                    ],
filter_ref=sailpoint.gov_certification.models.campaign_filter_ref.CampaignFilterRef(
                    id = 'e9f9a139-7b84-2fd5-a658-42087040d3ac', 
                    name = 'Test Filter', ),
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
owner_id='4030ca72bdfb4980b51b8fcee948be50',
created='2020-03-03T22:15:13.611Z',
modified='2020-03-03T22:20:12.674Z',
total_certifications=100,
completed_certifications=10,
mandatory_comment_requirement='NO_DECISIONS',
status='ACTIVE',
latest_reports={'STATUS': {...},'SIGN_OFF': {...}},
source_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"],
sources_with_orphan_entitlements=[{"type":"SOURCE","id":"30e6435e60bf47b0bc11622c31dfdbfd","name":"Active Directory"}]
)

```
[[Back to top]](#) 

