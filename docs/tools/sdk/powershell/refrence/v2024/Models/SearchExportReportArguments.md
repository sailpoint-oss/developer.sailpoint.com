---
id: search-export-report-arguments
title: SearchExportReportArguments
pagination_label: SearchExportReportArguments
sidebar_label: SearchExportReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchExportReportArguments'] 
slug: /tools/sdk/powershell/v2024/models/search-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'SearchExportReportArguments']
---


# SearchExportReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** |  Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Query** |  **String** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**Columns** |  Pointer to **String** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchExportReportArguments = Initialize-PSSailpoint.V2024SearchExportReportArguments  -Indices [entitlements] `
 -Query name:a* `
 -Columns displayName,firstName,lastName,email,created,attributes.cloudLifecycleState `
 -Sort [displayName, +id]
```

- Convert the resource to JSON
```powershell
$SearchExportReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

