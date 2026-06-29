---
id: v1-accessrequestrecommendationconfigdto-v1
title: AccessrequestrecommendationconfigdtoV1
pagination_label: AccessrequestrecommendationconfigdtoV1
sidebar_label: AccessrequestrecommendationconfigdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestrecommendationconfigdtoV1', 'v1AccessrequestrecommendationconfigdtoV1']
slug: /tools/sdk/typescript/iai_access_request_recommendations/models/accessrequestrecommendationconfigdto-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestrecommendationconfigdtoV1', 'v1AccessrequestrecommendationconfigdtoV1']
---

# AccessrequestrecommendationconfigdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scoreThreshold** | `number` | The value that internal calculations need to exceed for recommendations to be made. | [default to undefined]
**startDateAttribute** | **(optional)** `string` | Use to map an attribute name for determining identities\' start date. | [default to undefined]
**restrictionAttribute** | **(optional)** `string` | Use to only give recommendations based on this attribute. | [default to undefined]
**moverAttribute** | **(optional)** `string` | Use to map an attribute name for determining whether identities are movers. | [default to undefined]
**joinerAttribute** | **(optional)** `string` | Use to map an attribute name for determining whether identities are joiners. | [default to undefined]
**useRestrictionAttribute** | **(optional)** `boolean` | Use only the attribute named in restrictionAttribute to make recommendations. | [default to false]

