---
id: identities-details-report-arguments
title: IdentitiesDetailsReportArguments
pagination_label: IdentitiesDetailsReportArguments
sidebar_label: IdentitiesDetailsReportArguments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentitiesDetailsReportArguments'] 
slug: /tools/sdk/powershell/v3/models/identities-details-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesDetailsReportArguments']
---


# IdentitiesDetailsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelatedOnly** |  **Boolean** | Boolean FLAG to specify if only correlated identities should be used in report processing | [default to $false]
**DefaultS3Bucket** |  **Boolean** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **String** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitiesDetailsReportArguments = Initialize-IdentitiesDetailsReportArguments  -CorrelatedOnly true `
 -DefaultS3Bucket true `
 -S3Bucket the-dev-bucket
```

- Convert the resource to JSON
```powershell
$IdentitiesDetailsReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

