---
id: v1-recommendercalculations-v1
title: RecommendercalculationsV1
pagination_label: RecommendercalculationsV1
sidebar_label: RecommendercalculationsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RecommendercalculationsV1', 'v1RecommendercalculationsV1']
slug: /tools/sdk/typescript/iai_recommendations/models/recommendercalculations-v1
tags: ['SDK', 'Software Development Kit', 'RecommendercalculationsV1', 'v1RecommendercalculationsV1']
---

# RecommendercalculationsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | The ID of the identity | [default to undefined]
**entitlementId** | **(optional)** `string` | The entitlement ID | [default to undefined]
**recommendation** | **(optional)** `string` | The actual recommendation | [default to undefined]
**overallWeightedScore** | **(optional)** `number` | The overall weighted score | [default to undefined]
**featureWeightedScores** | **(optional)**  | The weighted score of each individual feature | [default to undefined]
**threshold** | **(optional)** `number` | The configured value against which the overallWeightedScore is compared | [default to undefined]
**identityAttributes** | **(optional)**  | The values for your configured features | [default to undefined]
**featureValues** | **(optional)** `FeaturevaluedtoV1` |  | [default to undefined]

