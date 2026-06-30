---
id: v1-campaign2-all-of-role-composition-campaign-info-v1
title: Campaign2AllOfRoleCompositionCampaignInfoV1
pagination_label: Campaign2AllOfRoleCompositionCampaignInfoV1
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfoV1', 'v1Campaign2AllOfRoleCompositionCampaignInfoV1']
slug: /tools/sdk/typescript/certification_campaigns/models/campaign2-all-of-role-composition-campaign-info-v1
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfoV1', 'v1Campaign2AllOfRoleCompositionCampaignInfoV1']
---

# Campaign2AllOfRoleCompositionCampaignInfoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewerId** | **(optional)** `string` | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the \"reviewer\" object. | [default to undefined]
**reviewer** | **(optional)** `Campaign2AllOfRoleCompositionCampaignInfoReviewerV1` |  | [default to undefined]
**roleIds** | **(optional)** `Array<string>` | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [default to undefined]
**remediatorRef** | `Campaign2AllOfRoleCompositionCampaignInfoRemediatorRefV1` |  | [default to undefined]
**query** | **(optional)** `string` | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [default to undefined]
**description** | **(optional)** `string` | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [default to undefined]

