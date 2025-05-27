---
id: beta-va-cluster-status-change-event-previous-health-check-result
title: VAClusterStatusChangeEventPreviousHealthCheckResult
pagination_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VAClusterStatusChangeEventPreviousHealthCheckResult', 'BetaVAClusterStatusChangeEventPreviousHealthCheckResult'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventPreviousHealthCheckResult', 'BetaVAClusterStatusChangeEventPreviousHealthCheckResult']
---


# VAClusterStatusChangeEventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Detailed message of the health check result. | [required]
**ResultType** | **String** | Health check result type. | [required]
**Status** |  **Enum** [  "Succeeded",    "Failed" ] | Health check status. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventPreviousHealthCheckResult = Initialize-BetaVAClusterStatusChangeEventPreviousHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Failed
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventPreviousHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

