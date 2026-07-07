---
id: get-identity-outlier-snapshots-v1429-response
title: GetIdentityOutlierSnapshotsV1429Response
pagination_label: GetIdentityOutlierSnapshotsV1429Response
sidebar_label: GetIdentityOutlierSnapshotsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetIdentityOutlierSnapshotsV1429Response', 'GetIdentityOutlierSnapshotsV1429Response'] 
slug: /tools/sdk/powershell/iaioutliers/models/get-identity-outlier-snapshots-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetIdentityOutlierSnapshotsV1429Response', 'GetIdentityOutlierSnapshotsV1429Response']
---


# GetIdentityOutlierSnapshotsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetIdentityOutlierSnapshotsV1429Response = Initialize-GetIdentityOutlierSnapshotsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetIdentityOutlierSnapshotsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

