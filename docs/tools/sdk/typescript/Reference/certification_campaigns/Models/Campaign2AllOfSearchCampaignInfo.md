---
id: v1-campaign2-all-of-search-campaign-info-v1
title: Campaign2AllOfSearchCampaignInfoV1
pagination_label: Campaign2AllOfSearchCampaignInfoV1
sidebar_label: Campaign2AllOfSearchCampaignInfoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Campaign2AllOfSearchCampaignInfoV1', 'v1Campaign2AllOfSearchCampaignInfoV1']
slug: /tools/sdk/typescript/certification_campaigns/models/campaign2-all-of-search-campaign-info-v1
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSearchCampaignInfoV1', 'v1Campaign2AllOfSearchCampaignInfoV1']
---

# Campaign2AllOfSearchCampaignInfoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | The type of search campaign represented. | [default to undefined]
**description** | **(optional)** `string` | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [default to undefined]
**reviewer** | **(optional)** `Campaign2AllOfSearchCampaignInfoReviewerV1` |  | [default to undefined]
**query** | **(optional)** `string` | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [default to undefined]
**identityIds** | **(optional)** `Array<string>` | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [default to undefined]
**accessConstraints** | **(optional)** `Array<AccessconstraintV1>` | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [default to undefined]

