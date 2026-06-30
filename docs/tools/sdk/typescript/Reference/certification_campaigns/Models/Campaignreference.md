---
id: v1-campaignreference-v1
title: CampaignreferenceV1
pagination_label: CampaignreferenceV1
sidebar_label: CampaignreferenceV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CampaignreferenceV1', 'v1CampaignreferenceV1']
slug: /tools/sdk/typescript/certification_campaigns/models/campaignreference-v1
tags: ['SDK', 'Software Development Kit', 'CampaignreferenceV1', 'v1CampaignreferenceV1']
---

# CampaignreferenceV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the campaign. | [default to undefined]
**name** | `string` | The name of the campaign. | [default to undefined]
**type** | `string` | The type of object that is being referenced. | [default to undefined]
**campaignType** | `string` | The type of the campaign. | [default to undefined]
**description** | `string` | The description of the campaign set by the admin who created it. | [default to undefined]
**correlatedStatus** | `string` | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [default to undefined]
**mandatoryCommentRequirement** | `string` | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [default to undefined]

