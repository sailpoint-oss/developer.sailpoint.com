---
id: v1-get-campaign-v1200-response-v1
title: GetCampaignV1200ResponseV1
pagination_label: GetCampaignV1200ResponseV1
sidebar_label: GetCampaignV1200ResponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GetCampaignV1200ResponseV1', 'v1GetCampaignV1200ResponseV1']
slug: /tools/sdk/typescript/certification_campaigns/models/get-campaign-v1200-response-v1
tags: ['SDK', 'Software Development Kit', 'GetCampaignV1200ResponseV1', 'v1GetCampaignV1200ResponseV1']
---

# GetCampaignV1200ResponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the campaign | [readonly] [default to undefined]
**name** | `string` | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [default to undefined]
**description** | `string` | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [default to undefined]
**deadline** | **(optional)** `string` | The campaign\'s completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [default to undefined]
**type** | `string` | The type of campaign. Could be extended in the future. | [default to undefined]
**emailNotificationEnabled** | **(optional)** `boolean` | Enables email notification for this campaign | [default to false]
**autoRevokeAllowed** | **(optional)** `boolean` | Allows auto revoke for this campaign | [default to false]
**recommendationsEnabled** | **(optional)** `boolean` | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**status** | **(optional)** `string` | The campaign\'s current status. | [readonly] [default to undefined]
**correlatedStatus** | **(optional)** `string` | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [default to undefined]
**created** | **(optional)** `string` | Created time of the campaign | [readonly] [default to undefined]
**totalCertifications** | **(optional)** `number` | The total number of certifications in this campaign. | [readonly] [default to undefined]
**completedCertifications** | **(optional)** `number` | The number of completed certifications in this campaign. | [readonly] [default to undefined]
**alerts** | **(optional)** `Array<CampaignalertV1>` | A list of errors and warnings that have accumulated. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Modified time of the campaign | [readonly] [default to undefined]
**filter** | **(optional)** `Campaign2AllOfFilterV1` |  | [default to undefined]
**sunsetCommentsRequired** | **(optional)** `boolean` | Determines if comments on sunset date changes are required. | [default to true]
**sourceOwnerCampaignInfo** | **(optional)** `Campaign2AllOfSourceOwnerCampaignInfoV1` |  | [default to undefined]
**searchCampaignInfo** | **(optional)** `Campaign2AllOfSearchCampaignInfoV1` |  | [default to undefined]
**roleCompositionCampaignInfo** | **(optional)** `Campaign2AllOfRoleCompositionCampaignInfoV1` |  | [default to undefined]
**machineAccountCampaignInfo** | **(optional)** `Campaign2AllOfMachineAccountCampaignInfoV1` |  | [default to undefined]
**sourcesWithOrphanEntitlements** | **(optional)** `Array<Campaign2AllOfSourcesWithOrphanEntitlementsV1>` | A list of sources in the campaign that contain \\\"orphan entitlements\\\" (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [readonly] [default to undefined]
**mandatoryCommentRequirement** | **(optional)** `string` | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [default to undefined]

