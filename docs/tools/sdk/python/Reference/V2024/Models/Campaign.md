---
id: v2024-campaign
title: Campaign
pagination_label: Campaign
sidebar_label: Campaign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign', 'V2024Campaign'] 
slug: /tools/sdk/python/v2024/models/campaign
tags: ['SDK', 'Software Development Kit', 'Campaign', 'V2024Campaign']
---

# Campaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the campaign | [optional] [readonly] 
**name** | **str** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [required]
**description** | **str** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [required]
**deadline** | **datetime** | The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH',    'ROLE_COMPOSITION',    'MACHINE_ACCOUNT' ] | The type of campaign. Could be extended in the future. | [required]
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [optional] [default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [optional] [default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to False]
**status** |  **Enum** [  'PENDING',    'STAGED',    'CANCELING',    'ACTIVATING',    'ACTIVE',    'COMPLETING',    'COMPLETED',    'ERROR',    'ARCHIVED' ] | The campaign's current status. | [optional] [readonly] 
**correlated_status** |  **Enum** [  'CORRELATED',    'UNCORRELATED' ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**created** | **datetime** | Created time of the campaign | [optional] [readonly] 
**total_certifications** | **int** | The total number of certifications in this campaign. | [optional] [readonly] 
**completed_certifications** | **int** | The number of completed certifications in this campaign. | [optional] [readonly] 
**alerts** | [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**modified** | **datetime** | Modified time of the campaign | [optional] [readonly] 
**filter** | [**CampaignAllOfFilter**](campaign-all-of-filter) |  | [optional] 
**sunset_comments_required** | **bool** | Determines if comments on sunset date changes are required. | [optional] [default to True]
**source_owner_campaign_info** | [**CampaignAllOfSourceOwnerCampaignInfo**](campaign-all-of-source-owner-campaign-info) |  | [optional] 
**search_campaign_info** | [**CampaignAllOfSearchCampaignInfo**](campaign-all-of-search-campaign-info) |  | [optional] 
**role_composition_campaign_info** | [**CampaignAllOfRoleCompositionCampaignInfo**](campaign-all-of-role-composition-campaign-info) |  | [optional] 
**machine_account_campaign_info** | [**CampaignAllOfMachineAccountCampaignInfo**](campaign-all-of-machine-account-campaign-info) |  | [optional] 
**sources_with_orphan_entitlements** | [**[]CampaignAllOfSourcesWithOrphanEntitlements**](campaign-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\"orphan entitlements\\\" (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**mandatory_comment_requirement** |  **Enum** [  'ALL_DECISIONS',    'REVOKE_ONLY_DECISIONS',    'NO_DECISIONS' ] | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.campaign import Campaign

campaign = Campaign(
id='2c9079b270a266a60170a2779fcb0007',
name='Manager Campaign',
description='Everyone needs to be reviewed by their manager',
deadline='2020-03-15T10:00:01.456Z',
type='MANAGER',
email_notification_enabled=False,
auto_revoke_allowed=False,
recommendations_enabled=True,
status='ACTIVE',
correlated_status='CORRELATED',
created='2020-03-03T22:15:13.611Z',
total_certifications=100,
completed_certifications=10,
alerts=[
                    sailpoint.v2024.models.campaign_alert.Campaign Alert(
                        level = 'ERROR', 
                        localizations = [
                            sailpoint.v2024.models.error_message_dto.Error Message Dto(
                                locale = 'en-US', 
                                locale_origin = 'DEFAULT', 
                                text = 'The request was syntactically correct but its content is semantically invalid.', )
                            ], )
                    ],
modified='2020-03-03T22:20:12.674Z',
filter=sailpoint.v2024.models.campaign_all_of_filter.Campaign_allOf_filter(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    type = 'CAMPAIGN_FILTER', 
                    name = 'Test Filter', ),
sunset_comments_required=True,
source_owner_campaign_info=sailpoint.v2024.models.campaign_all_of_source_owner_campaign_info.Campaign_allOf_sourceOwnerCampaignInfo(
                    source_ids = [0fbe863c063c4c88a35fd7f17e8a3df5], ),
search_campaign_info=sailpoint.v2024.models.campaign_all_of_search_campaign_info.Campaign_allOf_searchCampaignInfo(
                    type = 'ACCESS', 
                    description = 'Search Campaign description', 
                    reviewer = sailpoint.v2024.models.campaign_all_of_search_campaign_info_reviewer.Campaign_allOf_searchCampaignInfo_reviewer(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', ), 
                    query = 'Search Campaign query description', 
                    identity_ids = [0fbe863c063c4c88a35fd7f17e8a3df5], 
                    access_constraints = [
                        sailpoint.v2024.models.access_constraint.Access Constraint(
                            type = 'ENTITLEMENT', 
                            ids = [2c90ad2a70ace7d50170acf22ca90010], 
                            operator = 'SELECTED', )
                        ], ),
role_composition_campaign_info=sailpoint.v2024.models.campaign_all_of_role_composition_campaign_info.Campaign_allOf_roleCompositionCampaignInfo(
                    reviewer_id = '2c91808568c529c60168cca6f90c1313', 
                    reviewer = sailpoint.v2024.models.campaign_all_of_role_composition_campaign_info_reviewer.Campaign_allOf_roleCompositionCampaignInfo_reviewer(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', ), 
                    role_ids = [2c90ad2a70ace7d50170acf22ca90010], 
                    remediator_ref = sailpoint.v2024.models.campaign_all_of_role_composition_campaign_info_remediator_ref.Campaign_allOf_roleCompositionCampaignInfo_remediatorRef(
                        type = 'IDENTITY', 
                        id = '2c90ad2a70ace7d50170acf22ca90010', 
                        name = 'Role Admin', ), 
                    query = 'Search Query', 
                    description = 'Role Composition Description', ),
machine_account_campaign_info=sailpoint.v2024.models.campaign_all_of_machine_account_campaign_info.Campaign_allOf_machineAccountCampaignInfo(
                    source_ids = [0fbe863c063c4c88a35fd7f17e8a3df5], 
                    reviewer_type = 'ACCOUNT_OWNER', ),
sources_with_orphan_entitlements=[
                    sailpoint.v2024.models.campaign_all_of_sources_with_orphan_entitlements.Campaign_allOf_sourcesWithOrphanEntitlements(
                        id = '2c90ad2a70ace7d50170acf22ca90010', 
                        type = 'SOURCE', 
                        name = 'Source with orphan entitlements', )
                    ],
mandatory_comment_requirement='NO_DECISIONS'
)

```
[[Back to top]](#) 

