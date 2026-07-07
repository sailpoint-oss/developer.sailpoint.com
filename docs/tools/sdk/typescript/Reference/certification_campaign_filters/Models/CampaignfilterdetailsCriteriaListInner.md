---
id: v1-campaignfilterdetails-criteria-list-inner-v1
title: CampaignfilterdetailsCriteriaListInnerV1
pagination_label: CampaignfilterdetailsCriteriaListInnerV1
sidebar_label: CampaignfilterdetailsCriteriaListInnerV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CampaignfilterdetailsCriteriaListInnerV1', 'v1CampaignfilterdetailsCriteriaListInnerV1']
slug: /tools/sdk/typescript/certification_campaign_filters/models/campaignfilterdetails-criteria-list-inner-v1
tags: ['SDK', 'Software Development Kit', 'CampaignfilterdetailsCriteriaListInnerV1', 'v1CampaignfilterdetailsCriteriaListInnerV1']
---

# CampaignfilterdetailsCriteriaListInnerV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `CriteriatypeV1` |  | [default to undefined]
**operation** | **(optional)** `OperationV1` |  | [default to undefined]
**property** | `string` | Specified key from the type of criteria. | [default to undefined]
**value** | `string` | Value for the specified key from the type of criteria. | [default to undefined]
**negateResult** | **(optional)** `boolean` | If true, the filter will negate the result of the criteria. | [default to false]
**shortCircuit** | **(optional)** `boolean` | If true, the filter will short circuit the evaluation of the criteria. | [default to false]
**recordChildMatches** | **(optional)** `boolean` | If true, the filter will record child matches for the criteria. | [default to false]
**id** | **(optional)** `string` | The unique ID of the criteria. | [default to undefined]
**suppressMatchedItems** | **(optional)** `boolean` | If this value is true, then matched items will not only be excluded from the campaign, they will also not have archived certification items created.  Such items will not appear in the exclusion report.  | [default to false]
**children** | **(optional)** `Array<object>` | List of child criteria. | [default to undefined]

