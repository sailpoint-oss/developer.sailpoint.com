---
id: v1-search-export-report-arguments-v1
title: SearchExportReportArgumentsV1
pagination_label: SearchExportReportArgumentsV1
sidebar_label: SearchExportReportArgumentsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SearchExportReportArgumentsV1', 'v1SearchExportReportArgumentsV1']
slug: /tools/sdk/typescript/reports_data_extraction/models/search-export-report-arguments-v1
tags: ['SDK', 'Software Development Kit', 'SearchExportReportArgumentsV1', 'v1SearchExportReportArgumentsV1']
---

# SearchExportReportArgumentsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | **(optional)** `Array<IndexV1>` | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [default to undefined]
**query** | `string` | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [default to undefined]
**columns** | **(optional)** `string` | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [default to undefined]
**sort** | **(optional)** `Array<string>` | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [default to undefined]

