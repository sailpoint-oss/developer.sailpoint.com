---
id: va-cluster-status-change-event-health-check-result
title: VAClusterStatusChangeEventHealthCheckResult
pagination_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VAClusterStatusChangeEventHealthCheckResult'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventHealthCheckResult']
---


# VAClusterStatusChangeEventHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  **String** | Detailed message of the result of the health check. | [required]
**ResultType** |  **String** | The type of the health check result. | [required]
**Status** |   **Enum** [  "Succeeded",    "Failed" ] | The status of the health check. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventHealthCheckResult = Initialize-PSSailpoint.BetaVAClusterStatusChangeEventHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Succeeded
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

