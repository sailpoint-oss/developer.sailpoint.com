---
id: orphan-uncorrelated-report-arguments
title: OrphanUncorrelatedReportArguments
pagination_label: OrphanUncorrelatedReportArguments
sidebar_label: OrphanUncorrelatedReportArguments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OrphanUncorrelatedReportArguments'] 
slug: /tools/sdk/powershell/v3/models/orphan-uncorrelated-report-arguments
tags: ['SDK', 'Software Development Kit', 'OrphanUncorrelatedReportArguments']
---


# OrphanUncorrelatedReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** |  Pointer to **[]String** | Output report file formats. This are formats for calling get endpoint as a query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 
**DefaultS3Bucket** |  **Boolean** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **String** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Examples

- Prepare the resource
```powershell
$OrphanUncorrelatedReportArguments = Initialize-PSSailpointOrphanUncorrelatedReportArguments  -SelectedFormats [CSV] `
 -DefaultS3Bucket true `
 -S3Bucket the-dev-bucket
```

- Convert the resource to JSON
```powershell
$OrphanUncorrelatedReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

