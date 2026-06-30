---
id: v1-outlier-v1
title: OutlierV1
pagination_label: OutlierV1
sidebar_label: OutlierV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'OutlierV1', 'v1OutlierV1']
slug: /tools/sdk/typescript/iai_outliers/models/outlier-v1
tags: ['SDK', 'Software Development Kit', 'OutlierV1', 'v1OutlierV1']
---

# OutlierV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The identity\'s unique identifier for the outlier record | [default to undefined]
**identityId** | **(optional)** `string` | The ID of the identity that is detected as an outlier | [default to undefined]
**type** | **(optional)** `string` | The type of outlier summary | [default to undefined]
**firstDetectionDate** | **(optional)** `string` | The first date the outlier was detected | [default to undefined]
**latestDetectionDate** | **(optional)** `string` | The most recent date the outlier was detected | [default to undefined]
**ignored** | **(optional)** `boolean` | Flag whether or not the outlier has been ignored | [default to undefined]
**attributes** | **(optional)** `object` | Object containing mapped identity attributes | [default to undefined]
**score** | **(optional)** `number` | The outlier score determined by the detection engine ranging from 0..1 | [default to undefined]
**unignoreType** | **(optional)** `string` | Enum value of if the outlier manually or automatically un-ignored. Will be NULL if outlier is not ignored | [default to undefined]
**unignoreDate** | **(optional)** `string` | shows date when last time has been unignored outlier | [default to undefined]
**ignoreDate** | **(optional)** `string` | shows date when last time has been ignored outlier | [default to undefined]

