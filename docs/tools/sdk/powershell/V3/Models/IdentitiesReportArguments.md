---
id: identities-report-arguments
title: IdentitiesReportArguments
pagination_label: IdentitiesReportArguments
sidebar_label: IdentitiesReportArguments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentitiesReportArguments'] 
slug: /tools/sdk/powershell/v3/models/identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesReportArguments']
---


# IdentitiesReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelatedOnly** |  Pointer to **Boolean** | Boolean FLAG to specify if only correlated identities should be used in report processing | [optional] [default to $false]
**DefaultS3Bucket** |  **Boolean** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **String** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitiesReportArguments = Initialize-PSSailpointIdentitiesReportArguments  -CorrelatedOnly true `
 -DefaultS3Bucket true `
 -S3Bucket the-dev-bucket
```

- Convert the resource to JSON
```powershell
$IdentitiesReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

