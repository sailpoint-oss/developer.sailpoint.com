---
id: identity-profile-identity-error-report-arguments
title: IdentityProfileIdentityErrorReportArguments
pagination_label: IdentityProfileIdentityErrorReportArguments
sidebar_label: IdentityProfileIdentityErrorReportArguments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfileIdentityErrorReportArguments'] 
slug: /tools/sdk/powershell/v3/models/identity-profile-identity-error-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentityProfileIdentityErrorReportArguments']
---


# IdentityProfileIdentityErrorReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthoritativeSource** |  **String** | Source Id to be checked on errors of identity profiles aggregation | 
**DefaultS3Bucket** |  **Boolean** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **String** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileIdentityErrorReportArguments = Initialize-PSSailpointIdentityProfileIdentityErrorReportArguments  -AuthoritativeSource 1234sourceId5678902 `
 -DefaultS3Bucket true `
 -S3Bucket the-dev-bucket
```

- Convert the resource to JSON
```powershell
$IdentityProfileIdentityErrorReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

