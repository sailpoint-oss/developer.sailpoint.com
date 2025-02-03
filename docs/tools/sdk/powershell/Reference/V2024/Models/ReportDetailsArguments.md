---
id: v2024-report-details-arguments
title: ReportDetailsArguments
pagination_label: ReportDetailsArguments
sidebar_label: ReportDetailsArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportDetailsArguments', 'V2024ReportDetailsArguments'] 
slug: /tools/sdk/powershell/v2024/models/report-details-arguments
tags: ['SDK', 'Software Development Kit', 'ReportDetailsArguments', 'V2024ReportDetailsArguments']
---


# ReportDetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** |  **String** | Source ID. | [required]
**SourceName** |  **String** | Source name. | [required]
**CorrelatedOnly** |  **Boolean** | Flag to specify if only correlated identities are included in report. | [required][default to $false]
**AuthoritativeSource** |  **String** | Source ID. | [required]
**SelectedFormats** |  Pointer to **[]String** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
**Indices** |  Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Query** |  **String** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**Columns** |  Pointer to **String** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportDetailsArguments = Initialize-PSSailpoint.V2024ReportDetailsArguments  -Application 2c9180897eSourceIde781782f705b9 `
 -SourceName Active Directory `
 -CorrelatedOnly true `
 -AuthoritativeSource 1234sourceId5678902 `
 -SelectedFormats [CSV] `
 -Indices [entitlements] `
 -Query name:a* `
 -Columns displayName,firstName,lastName,email,created,attributes.cloudLifecycleState `
 -Sort [displayName, +id]
```

- Convert the resource to JSON
```powershell
$ReportDetailsArguments | ConvertTo-JSON
```


[[Back to top]](#) 

