---
id: beta-va-cluster-status-change-event-health-check-result
title: VAClusterStatusChangeEventHealthCheckResult
pagination_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VAClusterStatusChangeEventHealthCheckResult', 'BetaVAClusterStatusChangeEventHealthCheckResult'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventHealthCheckResult', 'BetaVAClusterStatusChangeEventHealthCheckResult']
---


# VAClusterStatusChangeEventHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Detailed message of the health check result.. | [required]
**ResultType** | **String** | Health check result type. | [required]
**Status** |  **Enum** [  "Succeeded",    "Failed" ] | Health check status. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventHealthCheckResult = Initialize-BetaVAClusterStatusChangeEventHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Succeeded
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

