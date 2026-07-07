---
id: v1-accessrequestrecommendationitemdetail-v1
title: AccessrequestrecommendationitemdetailV1
pagination_label: AccessrequestrecommendationitemdetailV1
sidebar_label: AccessrequestrecommendationitemdetailV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestrecommendationitemdetailV1', 'v1AccessrequestrecommendationitemdetailV1']
slug: /tools/sdk/typescript/iai_access_request_recommendations/models/accessrequestrecommendationitemdetail-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestrecommendationitemdetailV1', 'v1AccessrequestrecommendationitemdetailV1']
---

# AccessrequestrecommendationitemdetailV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | Identity ID for the recommendation | [default to undefined]
**access** | **(optional)** `AccessrequestrecommendationitemdetailAccessV1` |  | [default to undefined]
**ignored** | **(optional)** `boolean` | Whether or not the identity has already chosen to ignore this recommendation. | [default to undefined]
**requested** | **(optional)** `boolean` | Whether or not the identity has already chosen to request this recommendation. | [default to undefined]
**viewed** | **(optional)** `boolean` | Whether or not the identity reportedly viewed this recommendation. | [default to undefined]
**messages** | **(optional)** `Array<AccessrecommendationmessageV1>` |  | [default to undefined]
**translationMessages** | **(optional)** `Array<TranslationmessageV1>` | The list of translation messages | [default to undefined]

