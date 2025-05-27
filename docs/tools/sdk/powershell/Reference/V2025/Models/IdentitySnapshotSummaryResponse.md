---
id: v2025-identity-snapshot-summary-response
title: IdentitySnapshotSummaryResponse
pagination_label: IdentitySnapshotSummaryResponse
sidebar_label: IdentitySnapshotSummaryResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitySnapshotSummaryResponse', 'V2025IdentitySnapshotSummaryResponse'] 
slug: /tools/sdk/powershell/v2025/models/identity-snapshot-summary-response
tags: ['SDK', 'Software Development Kit', 'IdentitySnapshotSummaryResponse', 'V2025IdentitySnapshotSummaryResponse']
---


# IdentitySnapshotSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Snapshot** | **String** | the date when the identity record was created | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitySnapshotSummaryResponse = Initialize-V2025IdentitySnapshotSummaryResponse  -Snapshot 2007-03-01T13:00:00.000Z
```

- Convert the resource to JSON
```powershell
$IdentitySnapshotSummaryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

