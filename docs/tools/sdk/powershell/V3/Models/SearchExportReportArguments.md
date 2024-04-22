---
id: search-export-report-arguments
title: SearchExportReportArguments
pagination_label: SearchExportReportArguments
sidebar_label: SearchExportReportArguments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SearchExportReportArguments'] 
slug: /tools/sdk/powershell/v3/models/search-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'SearchExportReportArguments']
---


# SearchExportReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** |  Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Filters** |  Pointer to [**map[string]ModelFilter**](model-filter) | The filters to be applied for each filtered field name. | [optional] 
**Query** |  [**Query**](query) |  | 
**IncludeNested** |  Pointer to **Boolean** | Indicates whether nested objects from returned search results should be included. | [optional] [default to $true]
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 
**DefaultS3Bucket** |  **Boolean** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **String** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchExportReportArguments = Initialize-SearchExportReportArguments  -Indices [entitlements] `
 -Filters {source.id={type=TERMS, terms=[2c9180897termsId780bd2920576]}, source.name.exact={type=TERMS, terms=[IdentityNow], exclude=true}} `
 -Query null `
 -IncludeNested true `
 -Sort [displayName, +id] `
 -DefaultS3Bucket true `
 -S3Bucket the-dev-bucket
```

- Convert the resource to JSON
```powershell
$SearchExportReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

