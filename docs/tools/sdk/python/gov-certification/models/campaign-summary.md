# CampaignSummary

# CampaignSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the campaign | [optional] [readonly] 
**name** | **str** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**description** | **str** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**deadline** | **date** | The campaign's completion deadline date. | [optional] 
**deadline_timezone** | **str** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**deadline_time** | **datetime** | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [optional] 
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [optional] [default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [optional] [default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to False]
**sunset_comments_required** | **bool** | Determines if comments on sunset date changes are required. | [optional] [default to True]
**mandatory_comment_requirement** | **CampaignMandatoryCommentRequirement** |  | [optional] [default to CampaignMandatoryCommentRequirement.NO_DECISIONS]
**type** | **CampaignType** |  | [required]
**reviewer** | [**Reviewer**](reviewer) |  | [optional] 
**alerts** | [**[]Alert**](alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] [default to []]
**created** | **datetime** | Created time of the campaign | [optional] [readonly] 
**modified** | **datetime** | Modified time of the campaign | [optional] [readonly] 
**total_certifications** | **int** | The total number of certifications in this campaign. | [optional] [readonly] 
**completed_certifications** | **int** | The number of completed certifications in this campaign. | [optional] [readonly] 
**status** |  **Enum** [  'ACTIVE',    'ACTIVATING',    'CANCELING',    'COMPLETED',    'COMPLETING',    'ERROR',    'PENDING',    'STAGED' ] | The campaign's current status. | [optional] [readonly] 
**generation_type** | **CampaignGenerationType** |  | [optional] [readonly] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_summary import CampaignSummary

campaign_summary = CampaignSummary(
id='2c9079b2-70a2-66a6-a170-a2779fcb0007',
name='Manager Campaign',
description='Everyone needs to be reviewed by their manager',
deadline='Sun Mar 15 00:00:00 UTC 2020',
deadline_timezone='-05:00',
deadline_time='2018-10-19T13:49:37.385Z',
email_notification_enabled=False,
auto_revoke_allowed=False,
recommendations_enabled=True,
sunset_comments_required=True,
mandatory_comment_requirement='NO_DECISIONS',
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
created='2020-03-03T22:15:13.611Z',
modified='2020-03-03T22:20:12.674Z',
total_certifications=100,
completed_certifications=10,
status='ACTIVE',
generation_type='CAMPAIGN_FILTER'
)

```
[[Back to top]](#) 

