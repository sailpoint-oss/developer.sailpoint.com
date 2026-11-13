# CampaignTemplateGet

# CampaignTemplateGet

Campaign Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the campaign template | [required]
**name** | **str** | Name of the campaign template. | [required]
**description** | **str** | Description of the campaign template. | [required]
**type** | **CampaignType** |  | [required]
**owner_id** | **str** | The owner of this template, and the owner of campaigns generated from this template via a schedule. This field is automatically populated at creation time with the current user. | [required][readonly] 
**remediator_ref** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**mandatory_comment_requirement** | **CampaignMandatoryCommentRequirement** |  | [optional] [default to CampaignMandatoryCommentRequirement.NO_DECISIONS]
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [optional] [default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [optional] [default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to False]
**sunset_comments_required** | **bool** | Determines if comments on sunset date changes are required. | [optional] [default to True]
**reviewer** | [**Reviewer**](reviewer) |  | [required]
**deadline_duration** | **str** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). If it is passed as empty then deadline is not set, but this need to be set before campaign activation api by using PATCH operation | [optional] 
**campaign_name** | **str** | The campaign name. | [required]
**campaign_description** | **str** | The campaign description. | [required]
**filter_ref** | [**CampaignFilterRef**](campaign-filter-ref) |  | [optional] 
**search_based_params** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**source_ids** | **[]str** | A direct list of sourceIds to include in this campaign. | [optional] 
**schedule** | [**Schedule**](schedule) |  | [optional] 
**schedule_status** |  **Enum** [  'NOT_SCHEDULED',    'SCHEDULING',    'SCHEDULED',    'SCHEDULE_FAILED' ] | Used to determine current status of campaign template schedule | [optional] [readonly] 
**schedule_error** | **str** | Details about scheduling error | [optional] [readonly] 
**created** | **datetime** | Creation date of Campaign Template | [required][readonly] 
**modified** | **datetime** | Modification date of Campaign Template | [required][readonly] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_template_get import CampaignTemplateGet

campaign_template_get = CampaignTemplateGet(
id='2c9079b2-70a2-66a6-a170-a277bb960008',
name='Manager Campaign Template',
description='Template for the annual manager campaign.',
type='IDENTITY',
owner_id='2c918086676d3e0601677611dbde220f',
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
filter_ref=sailpoint.gov_certification.models.campaign_filter_ref.CampaignFilterRef(
                    id = 'e9f9a139-7b84-2fd5-a658-42087040d3ac', 
                    name = 'Test Filter', ),
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
source_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"],
schedule=sailpoint.gov_certification.models.schedule.Schedule(
                    type = 'DAILY', 
                    months = sailpoint.gov_certification.models.selector.Selector(
                        type = 'LIST', 
                        values = ["1","2","3"], 
                        interval = 2, ), 
                    days = sailpoint.gov_certification.models.selector.Selector(
                        type = 'LIST', 
                        values = ["1","2","3"], 
                        interval = 2, ), 
                    hours = , 
                    expiration = '2025-09-15T16:00Z', 
                    time_zone_id = 'America/Chicago', ),
schedule_status='SCHEDULED',
schedule_error='Failed to schedule campaign template due to invalid scheduling details',
created='2020-03-05T22:44:00.364Z',
modified='2020-03-05T22:52:09.969Z'
)

```
[[Back to top]](#) 

