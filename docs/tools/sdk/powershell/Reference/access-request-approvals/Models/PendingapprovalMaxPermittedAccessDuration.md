---
id: pendingapproval-max-permitted-access-duration
title: PendingapprovalMaxPermittedAccessDuration
pagination_label: PendingapprovalMaxPermittedAccessDuration
sidebar_label: PendingapprovalMaxPermittedAccessDuration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PendingapprovalMaxPermittedAccessDuration', 'PendingapprovalMaxPermittedAccessDuration'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/pendingapproval-max-permitted-access-duration
tags: ['SDK', 'Software Development Kit', 'PendingapprovalMaxPermittedAccessDuration', 'PendingapprovalMaxPermittedAccessDuration']
---


# PendingapprovalMaxPermittedAccessDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **Int32** | The numeric value of the duration. | [optional] 
**TimeUnit** |  **Enum** [  "HOURS",    "DAYS",    "WEEKS",    "MONTHS" ] | The time unit for the duration. | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingapprovalMaxPermittedAccessDuration = Initialize-PendingapprovalMaxPermittedAccessDuration  -Value 5 `
 -TimeUnit DAYS
```

- Convert the resource to JSON
```powershell
$PendingapprovalMaxPermittedAccessDuration | ConvertTo-JSON
```


[[Back to top]](#) 

