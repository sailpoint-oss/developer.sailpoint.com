---
id: v1-recommendationrequestdto-v1
title: RecommendationrequestdtoV1
pagination_label: RecommendationrequestdtoV1
sidebar_label: RecommendationrequestdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RecommendationrequestdtoV1', 'v1RecommendationrequestdtoV1']
slug: /tools/sdk/typescript/iai_recommendations/models/recommendationrequestdto-v1
tags: ['SDK', 'Software Development Kit', 'RecommendationrequestdtoV1', 'v1RecommendationrequestdtoV1']
---

# RecommendationrequestdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | **(optional)** `Array<RecommendationrequestV1>` |  | [default to undefined]
**excludeInterpretations** | **(optional)** `boolean` | Exclude interpretations in the response if \"true\". Return interpretations in the response if this attribute is not specified. | [default to false]
**includeTranslationMessages** | **(optional)** `boolean` | When set to true, the calling system uses the translated messages for the specified language | [default to false]
**includeDebugInformation** | **(optional)** `boolean` | Returns the recommender calculations if set to true | [default to false]
**prescribeMode** | **(optional)** `boolean` | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [default to false]

