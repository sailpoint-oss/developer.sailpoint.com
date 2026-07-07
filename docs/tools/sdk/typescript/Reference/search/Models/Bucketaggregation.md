---
id: v1-bucketaggregation-v1
title: BucketaggregationV1
pagination_label: BucketaggregationV1
sidebar_label: BucketaggregationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BucketaggregationV1', 'v1BucketaggregationV1']
slug: /tools/sdk/typescript/search/models/bucketaggregation-v1
tags: ['SDK', 'Software Development Kit', 'BucketaggregationV1', 'v1BucketaggregationV1']
---

# BucketaggregationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the bucket aggregate to be included in the result. | [default to undefined]
**type** | **(optional)** `BuckettypeV1` |  | [default to undefined]
**field** | `string` | The field to bucket on. Prefix the field name with \'@\' to reference a nested object. | [default to undefined]
**size** | **(optional)** `number` | Maximum number of buckets to include. | [default to undefined]
**minDocCount** | **(optional)** `number` | Minimum number of documents a bucket should have. | [default to undefined]

