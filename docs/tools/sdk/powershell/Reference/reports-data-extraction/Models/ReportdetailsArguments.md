---
id: reportdetails-arguments
title: ReportdetailsArguments
pagination_label: ReportdetailsArguments
sidebar_label: ReportdetailsArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportdetailsArguments', 'ReportdetailsArguments'] 
slug: /tools/sdk/powershell/reportsdataextraction/models/reportdetails-arguments
tags: ['SDK', 'Software Development Kit', 'ReportdetailsArguments', 'ReportdetailsArguments']
---


# ReportdetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **String** | Source ID. | [required]
**SourceName** | **String** | Source name. | [required]
**CorrelatedOnly** | **Boolean** | Flag to specify if only correlated identities are included in report. | [required][default to $false]
**AuthoritativeSource** | **String** | Source ID. | [required]
**SelectedFormats** | **[]String** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
**Indices** | **[]Index** | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Query** | **String** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**Columns** | **String** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**Sort** | **[]String** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportdetailsArguments = Initialize-ReportdetailsArguments  -Application 2c9180897eSourceIde781782f705b9 `
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
$ReportdetailsArguments | ConvertTo-JSON
```


[[Back to top]](#) 

