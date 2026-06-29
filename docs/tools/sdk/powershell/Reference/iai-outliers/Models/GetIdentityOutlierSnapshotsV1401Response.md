---
id: get-identity-outlier-snapshots-v1401-response
title: GetIdentityOutlierSnapshotsV1401Response
pagination_label: GetIdentityOutlierSnapshotsV1401Response
sidebar_label: GetIdentityOutlierSnapshotsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetIdentityOutlierSnapshotsV1401Response', 'GetIdentityOutlierSnapshotsV1401Response'] 
slug: /tools/sdk/powershell/iaioutliers/models/get-identity-outlier-snapshots-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetIdentityOutlierSnapshotsV1401Response', 'GetIdentityOutlierSnapshotsV1401Response']
---


# GetIdentityOutlierSnapshotsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetIdentityOutlierSnapshotsV1401Response = Initialize-GetIdentityOutlierSnapshotsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetIdentityOutlierSnapshotsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

