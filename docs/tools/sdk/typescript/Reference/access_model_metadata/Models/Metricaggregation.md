---
id: v1-metricaggregation-v1
title: MetricaggregationV1
pagination_label: MetricaggregationV1
sidebar_label: MetricaggregationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MetricaggregationV1', 'v1MetricaggregationV1']
slug: /tools/sdk/typescript/access_model_metadata/models/metricaggregation-v1
tags: ['SDK', 'Software Development Kit', 'MetricaggregationV1', 'v1MetricaggregationV1']
---

# MetricaggregationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [default to undefined]
**type** | **(optional)** `MetrictypeV1` |  | [default to undefined]
**field** | `string` | The field the calculation is performed on.  Prefix the field name with \'@\' to reference a nested object.  | [default to undefined]

