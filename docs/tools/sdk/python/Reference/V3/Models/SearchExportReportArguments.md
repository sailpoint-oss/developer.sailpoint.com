---
id: search-export-report-arguments
title: SearchExportReportArguments
pagination_label: SearchExportReportArguments
sidebar_label: SearchExportReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchExportReportArguments', 'SearchExportReportArguments'] 
slug: /tools/sdk/python/v3/models/search-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'SearchExportReportArguments', 'SearchExportReportArguments']
---

# SearchExportReportArguments

Arguments for Search Export report (SEARCH_EXPORT)  The report file generated will be a zip file containing csv files of the search results. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**query** | **str** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**columns** | **str** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**sort** | **[]str** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 
}

## Example

```python
from sailpoint.v3.models.search_export_report_arguments import SearchExportReportArguments

search_export_report_arguments = SearchExportReportArguments(
indices=[entitlements],
query='name:a*',
columns='displayName,firstName,lastName,email,created,attributes.cloudLifecycleState',
sort=[displayName, +id]
)

```
[[Back to top]](#) 

