---
id: report-details-arguments
title: ReportDetailsArguments
pagination_label: ReportDetailsArguments
sidebar_label: ReportDetailsArguments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ReportDetailsArguments'] 
slug: /tools/sdk/powershell/v3/models/report-details-arguments
tags: ['SDK', 'Software Development Kit', 'ReportDetailsArguments']
---


# ReportDetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** |  **String** | Id of the authoritative source to export related accounts e.g. identities | 
**SourceName** |  **String** | Name of the authoritative source for accounts export | 
**DefaultS3Bucket** |  **Boolean** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **String** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 
**CorrelatedOnly** |  **Boolean** | Boolean FLAG to specify if only correlated identities should be used in report processing | [default to $false]
**AuthoritativeSource** |  **String** | Source Id to be checked on errors of identity profiles aggregation | 
**SelectedFormats** |  Pointer to **[]String** | Output report file formats. This are formats for calling get endpoint as a query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 
**Indices** |  Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Filters** |  Pointer to [**map[string]ModelFilter**](model-filter) | The filters to be applied for each filtered field name. | [optional] 
**Query** |  [**Query**](query) |  | 
**IncludeNested** |  Pointer to **Boolean** | Indicates whether nested objects from returned search results should be included. | [optional] [default to $true]
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportDetailsArguments = Initialize-PSSailpointReportDetailsArguments  -Application 2c9180897eSourceIde781782f705b9 `
 -SourceName DataScienceSourceName `
 -DefaultS3Bucket true `
 -S3Bucket the-dev-bucket `
 -CorrelatedOnly true `
 -AuthoritativeSource 1234sourceId5678902 `
 -SelectedFormats [CSV] `
 -Indices [entitlements] `
 -Filters {source.id&#x3D;{type&#x3D;TERMS, terms&#x3D;[2c9180897termsId780bd2920576]}, source.name.exact&#x3D;{type&#x3D;TERMS, terms&#x3D;[IdentityNow], exclude&#x3D;true}} `
 -Query null `
 -IncludeNested true `
 -Sort [displayName, +id]
```

- Convert the resource to JSON
```powershell
$ReportDetailsArguments | ConvertTo-JSON
```


[[Back to top]](#) 

